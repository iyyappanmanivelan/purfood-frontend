import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Send, User, Mail, Phone, Building, MessageSquare, CheckCircle, XCircle } from "lucide-react";
import styles from "./styles.module.css";

const ContactForm = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('success'); // 'success' or 'error'

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, "Name must be at least 2 characters")
            .required("Name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
            .required("Phone number is required"),
        organization: Yup.string()
            .min(2, "Organization name must be at least 2 characters")
            .required("Organization is required"),
        subject: Yup.string()
            .required("Subject is required"),
        message: Yup.string()
            .min(10, "Message must be at least 10 characters")
            .required("Message is required"),
    });

    const initialValues = {
        name: "",
        email: "",
        phone: "",
        organization: "",
        subject: "",
        message: "",
    };

    const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
        try {
            // POST to Google Sheets API
            const response = await fetch('https://script.google.com/macros/s/AKfycbyq5dq3xPygUMPcnOv_cbDe3RRM9LPcDiFk1QMK_s6pvghD6ULkuvzHlgmdZZ6tGiBZ/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    organization: values.organization,
                    subject: values.subject,
                    message: values.message,
                    timestamp: new Date().toISOString(),
                }),
            });

            setStatus({ success: true });
            setModalType('success');
            setShowModal(true);
            resetForm();
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus({ success: false, error: error.message });
            setModalType('error');
            setShowModal(true);
        } finally {
            setSubmitting(false);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className={styles.formContainer}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <Form className={styles.form}>
                            <div className="row g-4">
                                {/* Name Field */}
                                <div className="col-md-6">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name" className={styles.label}>
                                            <User size={18} /> Full Name *
                                        </label>
                                        <Field
                                            type="text"
                                            id="name"
                                            name="name"
                                            className={`${styles.input} ${errors.name && touched.name ? styles.inputError : ''}`}
                                            placeholder="Enter your full name"
                                        />
                                        <ErrorMessage name="name" component="div" className={styles.error} />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="col-md-6">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.label}>
                                            <Mail size={18} /> Email Address *
                                        </label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            className={`${styles.input} ${errors.email && touched.email ? styles.inputError : ''}`}
                                            placeholder="your.email@example.com"
                                        />
                                        <ErrorMessage name="email" component="div" className={styles.error} />
                                    </div>
                                </div>

                                {/* Phone Field */}
                                <div className="col-md-6">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone" className={styles.label}>
                                            <Phone size={18} /> Phone Number *
                                        </label>
                                        <Field
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className={`${styles.input} ${errors.phone && touched.phone ? styles.inputError : ''}`}
                                            placeholder="10-digit mobile number"
                                        />
                                        <ErrorMessage name="phone" component="div" className={styles.error} />
                                    </div>
                                </div>

                                {/* Organization Field */}
                                <div className="col-md-6">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="organization" className={styles.label}>
                                            <Building size={18} /> Organization *
                                        </label>
                                        <Field
                                            type="text"
                                            id="organization"
                                            name="organization"
                                            className={`${styles.input} ${errors.organization && touched.organization ? styles.inputError : ''}`}
                                            placeholder="Your organization name"
                                        />
                                        <ErrorMessage name="organization" component="div" className={styles.error} />
                                    </div>
                                </div>

                                {/* Subject Field */}
                                <div className="col-12">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="subject" className={styles.label}>
                                            <MessageSquare size={18} /> Subject *
                                        </label>
                                        <Field
                                            as="select"
                                            id="subject"
                                            name="subject"
                                            className={`${styles.input} ${errors.subject && touched.subject ? styles.inputError : ''}`}
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="training">Training Programs</option>
                                            <option value="compliance">Compliance & Legal Support</option>
                                            <option value="consulting">Food Safety Consulting</option>
                                            <option value="partnership">Partnership Opportunities</option>
                                            <option value="other">Other Inquiry</option>
                                        </Field>
                                        <ErrorMessage name="subject" component="div" className={styles.error} />
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="col-12">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="message" className={styles.label}>
                                            <MessageSquare size={18} /> Message *
                                        </label>
                                        <Field
                                            as="textarea"
                                            id="message"
                                            name="message"
                                            rows="5"
                                            className={`${styles.input} ${styles.textarea} ${errors.message && touched.message ? styles.inputError : ''}`}
                                            placeholder="Tell us about your food and training related activities..."
                                        />
                                        <ErrorMessage name="message" component="div" className={styles.error} />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="col-12">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={styles.submitBtn}
                                    >
                                        {isSubmitting ? (
                                            "Sending..."
                                        ) : (
                                            <>
                                                <Send size={20} /> Send Message
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

            {/* Success/Error Modal */}
            {showModal && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <div className={`${styles.modalHeader} ${modalType === 'success' ? styles.successHeader : styles.errorHeader}`}>
                            {modalType === 'success' ? (
                                <CheckCircle size={60} />
                            ) : (
                                <XCircle size={60} />
                            )}
                        </div>
                        <div className={styles.modalBody}>
                            <h3>{modalType === 'success' ? 'Message Sent Successfully!' : 'Submission Failed'}</h3>
                            <p>
                                {modalType === 'success'
                                    ? 'Thank you for contacting us! We have received your message and will get back to you soon.'
                                    : 'There was an error submitting your form. Please try again or contact us directly at 7305225182.'
                                }
                            </p>
                        </div>
                        <div className={styles.modalFooter}>
                            <button onClick={closeModal} className={styles.modalBtn}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactForm;
