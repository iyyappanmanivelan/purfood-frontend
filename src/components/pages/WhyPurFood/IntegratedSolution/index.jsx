import React from "react";
import { ListChecks } from "lucide-react";
import styles from "./styles.module.css";

const IntegratedSolution = () => {
    const items = [
        "Training",
        "Compliance",
        "Legal food requirements",
        "Audit readiness",
    ];

    return (
        <section className={styles.solutionSection}>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8">
                        <h2 className={styles.title}>Our Integrated Solution (SPOC)</h2>
                        <div className={styles.underline}></div>
                        <p className={styles.subtitle}>Single Point Contact for:</p>

                        <div className={styles.listWrapper}>
                            <ul className={styles.list}>
                                {items.map((item, index) => (
                                    <li key={index} className={styles.listItem}>
                                        <ListChecks className={styles.icon} size={28} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntegratedSolution;
