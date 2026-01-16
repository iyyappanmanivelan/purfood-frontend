import React from "react";
import { FileCheck, ShieldCheck, ChefHat, Star } from "lucide-react";
import styles from "./styles.module.css";

const Value = () => {
    const values = [
        {
            text: "Audit-ready staff & operations",
            icon: <FileCheck size={40} />,
        },
        {
            text: "Reduced compliance risk",
            icon: <ShieldCheck size={40} />,
        },
        {
            text: "Improved food safety culture",
            icon: <ChefHat size={40} />,
        },
        {
            text: "Enhanced guest trust & brand reputation",
            icon: <Star size={40} />,
        },
    ];

    return (
        <section className={styles.section}>
            <div className="container text-center">
                <h2 className={styles.title}>Value to Hotels & Restaurants</h2>
                <div className={styles.underline}></div>

                <div className="row g-4 justify-content-center">
                    {values.map((item, index) => (
                        <div key={index} className="col-md-6 col-lg-3">
                            <div className={styles.card}>
                                <div className={styles.iconBox}>{item.icon}</div>
                                <h4>{item.text}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Value;
