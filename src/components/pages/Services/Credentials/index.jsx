import React from "react";
import { BadgeCheck, GraduationCap, Award } from "lucide-react";
import styles from "./styles.module.css";

const TrainerCredentials = () => {
    const credentials = [
        { text: "FSSAI-Certified FoSTaC Master Trainers", icon: <BadgeCheck /> },
        { text: "Industry-experienced hospitality trainers", icon: <GraduationCap /> },
        { text: "Certified food safety & quality professionals", icon: <Award /> },
        { text: "Practical kitchen-floor expertise", icon: <BadgeCheck /> },
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <h2 className={styles.title}>Trainer Credentials & Certifications</h2>
                        <div className={styles.underline}></div>
                        <p className={styles.desc}>
                            Our training programs are delivered by certified experts with deep industry knowledge.
                        </p>
                    </div>
                    <div className="col-lg-7">
                        <div className={styles.grid}>
                            {credentials.map((cred, index) => (
                                <div key={index} className={styles.card}>
                                    <div className={styles.icon}>{cred.icon}</div>
                                    <p>{cred.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainerCredentials;
