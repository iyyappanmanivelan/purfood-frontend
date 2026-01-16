import React from "react";
import { Users, Briefcase, FileCheck, Landmark } from "lucide-react";
import styles from "./styles.module.css";

const WhoWeAre = () => {
    const features = [
        {
            icon: <Users size={28} />,
            text: "Integrated food consulting & training partner",
        },
        {
            icon: <Briefcase size={28} />,
            text: "Focused on hospitality & food service industry",
        },
        {
            icon: <FileCheck size={28} />,
            text: "End-to-end compliance-driven approach",
        },
        {
            icon: <Landmark size={28} />,
            text: "Government & regulatory aligned",
        },
    ];

    return (
        <section className={styles.whoSection}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <h2 className={styles.heading}>Who We Are</h2>
                        <div className={styles.underline}></div>
                        <p className={styles.subText}>
                            Your trusted partner in navigating the complex landscape of food safety and compliance.
                        </p>
                    </div>
                    <div className="col-lg-7">
                        <div className={styles.grid}>
                            {features.map((item, index) => (
                                <div key={index} className={styles.card}>
                                    <div className={styles.iconWrapper}>{item.icon}</div>
                                    <p className={styles.cardText}>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
