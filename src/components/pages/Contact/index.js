import React from "react";
import Partners from "./Partners";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import { Handshake, Phone, Mail } from "lucide-react";
import styles from "./styles.module.css";

const ContactComponent = () => {
    return (
        <>
            <div style={{ paddingTop: "80px" }}>
                {/* Let's Partner Section */}
                <section className={styles.partnerSection}>
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-5">
                                <div className={styles.partnerInfo}>
                                    <h2 className={styles.sectionTitle}>Let's Partner</h2>
                                    <div className={styles.underline}></div>
                                    <ul className={styles.partnerList}>
                                        <li>
                                            <Handshake className={styles.icon} />
                                            End-to-end hospitality training and food compliance partner
                                        </li>
                                        <li>
                                            <Handshake className={styles.icon} />
                                            Annual retainers & project-based engagement
                                        </li>
                                        <li>
                                            <Handshake className={styles.icon} />
                                            PUR Food LLP – Trusted Food Safety Partner
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Thank You / Contact Info Section */}
                <section className={styles.thankYouSection}>
                    <div className="container text-center">
                        <h2 className={styles.thankYouTitle}>Thank You !!!</h2>
                        <p className={styles.contactMessage}>
                            Kindly contact us for detailed discussion on your food and training related activities.
                        </p>
                        <p className={styles.supportMessage}>
                            We are delighted to support and handhold your organisation in the journey of safe food handling practices and WoW moments for the guests visit us.
                        </p>

                        <div className={styles.contactCard}>
                            <h3>PUR Food LLP</h3>
                            <p className={styles.director}>Ms. Nagalakshmi – Director</p>
                            <div className={styles.phoneBox}>
                                <Phone size={24} />
                                <a href="tel:7305225182">7305225182</a>
                            </div>
                        </div>
                    </div>
                </section>

                <Partners />
            </div>
        </>
    );
};

export default ContactComponent;
