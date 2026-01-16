import React from "react";
import { Check, ShieldCheck } from "lucide-react";
import styles from "./styles.module.css";

const WhyPurFood = () => {
    const benefits = [
        "Single Point Contact (SPOC) for training, compliance, audits & legal requirements",
        "Hospitality-focused expertise for hotels, restaurants, cloud kitchens & catering units",
        "FSSAI & FoSTaC aligned programs",
        "Certified Master Trainers with hands-on hospitality operations experience",
        "Reduced compliance risk & protection from penalties",
        "End-to-end support from licensing to training to mock audits",
        "Enhanced food safety culture, guest trust & brand reputation",
    ];

    return (
        <section className={styles.whySection}>
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-8">
                        <h2 className={styles.sectionTitle}>Why PUR Food LLP?</h2>
                        <div className={styles.titleUnderline}></div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className={styles.grid}>
                            {benefits.map((benefit, index) => (
                                <div key={index} className={styles.benefitCard}>
                                    <div className={styles.checkIcon}>
                                        <Check size={20} strokeWidth={3} />
                                    </div>
                                    <p className={styles.benefitText}>{benefit}</p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.highlightBox}>
                            <div className={styles.shieldIcon}>
                                <ShieldCheck size={40} />
                            </div>
                            <h3>PUR Food LLP</h3>
                            <p>Making food compliance simple, structured, and sustainable.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyPurFood;
