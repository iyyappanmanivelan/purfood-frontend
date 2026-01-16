import React from "react";
import { Handshake, Phone, Mail } from "lucide-react";
import styles from "./styles.module.css";

const ContactDetails = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className="row g-5 align-items-center">
                    {/* Let's Partner */}
                    <div className="col-lg-6">
                        <div className={styles.partnerInfo}>
                            <h2 className={styles.title}>Let’s Partner</h2>
                            <ul className={styles.list}>
                                <li>
                                    <Handshake className={styles.icon} />
                                    End-to-end hospitality training & food compliance partner
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

                    {/* Contact Us */}
                    <div className="col-lg-6">
                        <div className={styles.contactCard}>
                            <h2 className={styles.contactTitle}>Contact Us</h2>
                            <p className={styles.contactDesc}>
                                For detailed discussion on food and training related activities:
                            </p>
                            <p className={styles.message}>
                                We are delighted to support and handhold your organisation in the journey of safe food handling practices and creating WoW moments for the guests visiting us.
                            </p>

                            <div className={styles.contactPerson}>
                                <h3>PUR Food LLP</h3>
                                <p>Ms. Nagalakshmi – Director</p>
                                <div className={styles.phoneBox}>
                                    <Phone size={20} />
                                    <a href="tel:7305225182">7305225182</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactDetails;
