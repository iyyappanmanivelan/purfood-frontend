import React from "react";
import { AlertTriangle, Gavel, TrendingDown } from "lucide-react";
import styles from "./styles.module.css";

const IndustryChallenges = () => {
    const challenges = [
        {
            icon: <UsersIconHack />,
            title: "Multiple vendors",
            desc: "Managing separate vendors for training & compliance is inefficient.",
        },
        {
            icon: <Gavel size={32} />,
            title: "Regulatory Complexity",
            desc: "Navigating FSSAI audits & constant regulatory changes.",
        },
        {
            icon: <TrendingDown size={32} />,
            title: "Operational Risks",
            desc: "Penalties, brand impact, and safety hazards.",
        },
    ];

    return (
        <section className={styles.challengesSection}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className={styles.sectionTitle}>Hospitality Industry Challenges</h2>
                    <div className={styles.titleUnderline}></div>
                </div>

                <div className="row g-4 justify-content-center">
                    {challenges.map((item, index) => (
                        <div key={index} className="col-md-4">
                            <div className={styles.challengeCard}>
                                <div className={styles.iconBox}>{item.icon}</div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Simple SVG icon for multiple users/vendors if generic Users is too plain
const UsersIconHack = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

export default IndustryChallenges;
