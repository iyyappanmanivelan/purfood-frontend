import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import styles from "./styles.module.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row g-5">
                    {/* Company Info */}
                    <div className="col-lg-4">
                        <div className={styles.footerSection}>
                            <div className={styles.brandSection}>
                                <Image
                                    src="/assets/purfood-logo-crop.jpg"
                                    width={60}
                                    height={60}
                                    alt="PUR Food LLP Logo"
                                    className={styles.logo}
                                />
                                <h3>PUR Food LLP</h3>
                            </div>
                            <p className={styles.tagline}>
                                Pleasantly Unifying & Revolutionizing Food
                            </p>
                            <p className={styles.description}>
                                A holistic, nutrition-focused, safety-driven food enterprise serving institutions, industries, and consumers across India.
                            </p>
                            <div className={styles.socialLinks}>
                                <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                                <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                                <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                                <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-4">
                        <div className={styles.footerSection}>
                            <h4>Quick Links</h4>
                            <ul className={styles.linkList}>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/why-pur-food">Why PurFood?</Link></li>
                                <li><Link href="/services">Services</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="col-lg-3 col-md-4">
                        <div className={styles.footerSection}>
                            <h4>Our Services</h4>
                            <ul className={styles.linkList}>
                                <li><Link href="/services">FoSTaC Training</Link></li>
                                <li><Link href="/services">Food Safety Consulting</Link></li>
                                <li><Link href="/services">FSSAI Compliance</Link></li>
                                <li><Link href="/services">Industry Training</Link></li>
                                <li><Link href="/services">Audit Support</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-3 col-md-4">
                        <div className={styles.footerSection}>
                            <h4>Contact Us</h4>
                            <ul className={styles.contactList}>
                                <li>
                                    <Phone size={18} />
                                    <a href="tel:7305225182">7305225182</a>
                                </li>
                                <li>
                                    <Mail size={18} />
                                    <a href="mailto:info@purfoodllp.com">info@purfoodllp.com</a>
                                </li>
                                <li>
                                    <MapPin size={18} />
                                    <span>Chennai, Tamil Nadu, India</span>
                                </li>
                            </ul>
                            <div className={styles.certifications}>
                                <p><strong>Certifications:</strong></p>
                                <p>FSSAI | FoSTaC | Skill India</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <p className={styles.copyright}>
                                © {currentYear} PUR Food LLP. All rights reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className={styles.bottomLinks}>
                                <Link href="#">Privacy Policy</Link>
                                <span>|</span>
                                <Link href="#">Terms of Service</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;