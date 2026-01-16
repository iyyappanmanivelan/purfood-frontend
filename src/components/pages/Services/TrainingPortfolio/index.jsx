import React from "react";
import { BookOpen, Users, Shield, ChefHat } from "lucide-react";
import styles from "./styles.module.css";

const TrainingPortfolio = () => {
    const programs = [
        { title: "FoSTaC Basic & Advanced", subtitle: "(FSSAI Approved)" },
        { title: "Food Handlers & Hygiene Training", subtitle: "" },
        { title: "HACCP, GMP, GHP, ISO 22000", subtitle: "Standards" },
        { title: "Kitchen Safety", subtitle: "" },
        { title: "Internal Auditor Programs", subtitle: "" },
        { title: "Nutrition Literacy Programs", subtitle: "" },
        { title: "Kitchen Operations, Audits & Compliance", subtitle: "" },
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className={styles.title}>Training Portfolio – Hospitality Focused</h2>
                    <div className={styles.underline}></div>
                </div>
                <div className="row g-4 justify-content-center">
                    {programs.map((prog, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className={styles.card}>
                                <div className={styles.iconBox}>
                                    <ChefHat size={24} />
                                </div>
                                <div>
                                    <h4 className={styles.cardTitle}>{prog.title}</h4>
                                    {prog.subtitle && <p className={styles.cardSub}>{prog.subtitle}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrainingPortfolio;
