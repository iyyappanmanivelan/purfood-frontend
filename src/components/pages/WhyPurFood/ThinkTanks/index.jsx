import React from "react";
import { Award, GraduationCap, Trophy, Star, CheckCircle } from "lucide-react";
import styles from "./styles.module.css";

const ThinkTanks = () => {
    const experts = [
        {
            name: "Ms. V Nagalakshmi",
            title: "Founder & Director",
            tagline: "The Kitchen Queen of Chennai",
            description: "Proven track record of excelling aggressive performance metrics within the vision of Culinary of India. Talented at delivering exceptional experiences through Nutrition, Dietary, Food Safety Audit, Training & Hygiene.",
            education: [
                "B.Sc. Hotel Management & Catering Science - 80%",
                "PG Diploma in Business Administration (AIIMS, Chennai) - 70%",
                "PG Diploma in Food & Nutrition (Annamalai University) - 80%",
                "PG Diploma in Child Nutrition & Product",
                "Pursuing PhD in Business Administration & Nutrition"
            ],
            highlights: [
                "Mindfulness training at NI Nurturing Institute (Nov 2025)",
                "Pre-placement workshop for MAC Nursing College",
                "Entrepreneurship workshop in Microbiology (Sep 2025)",
                "Industrial food technology talk at Rajalakshmi Engineering College",
                "Extensive FoSTaC training across various industries",
                "FSSAI 'Eat Right India' campaign trainer"
            ],
            color: "accent1"
        },
        {
            name: "Dr. Karthika Jeyeraman",
            title: "Food Safety Expert",
            tagline: "Business Sustainability Enabler",
            description: "Lead Auditor in FSSC V 5.1 with 14 years of experience in Food safety, Product Development, Lean management in food processing, Compliance and various audit levels. Advanced and Basic FoSTaC Trainer.",
            education: [
                "Ph.D. in Food Science & Nutrition, TNAU (2004-2008)",
                "M.Sc. in Food Science & Nutrition, TNAU (2002-2004)",
                "B.Sc. Home Science, Madurai Kamaraj University (1999-2002)"
            ],
            highlights: [
                "Activist, Nation-Builder & Life Science Entrepreneur",
                "Running multiple startups in food sustainability",
                "Research in food/biotechnology & sustainable agriculture",
                "Trained over 150,000 professionals nationwide",
                "FoSTaC-FSSAI Government Resource Person",
                "HEERA Award recipient (High Impact Entrepreneur)"
            ],
            color: "accent2"
        }
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="text-center mb-5">
                    <div className={styles.iconWrapper}>
                        <Star size={40} />
                    </div>
                    <h2 className={styles.title}>Our Think Tanks</h2>
                    <div className={styles.underline}></div>
                    <p className={styles.subtitle}>
                        Meet the visionary experts driving excellence in food safety and hospitality training
                    </p>
                </div>

                <div className={styles.expertsGrid}>
                    {experts.map((expert, index) => (
                        <div key={index} className={`${styles.expertCard} ${styles[expert.color]}`}>
                            {/* Header with gradient */}
                            <div className={styles.cardHeader}>
                                <div className={styles.headerContent}>
                                    <h3 className={styles.expertName}>{expert.name}</h3>
                                    <p className={styles.expertTitle}>{expert.title}</p>
                                    <div className={styles.taglineBadge}>
                                        <Trophy size={16} />
                                        <span>{expert.tagline}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className={styles.cardBody}>
                                <p className={styles.description}>{expert.description}</p>

                                {/* Education Section */}
                                <div className={styles.infoSection}>
                                    <div className={styles.sectionTitle}>
                                        <GraduationCap size={20} />
                                        <h4>Academic Excellence</h4>
                                    </div>
                                    <div className={styles.itemsGrid}>
                                        {expert.education.map((item, idx) => (
                                            <div key={idx} className={styles.gridItem}>
                                                <CheckCircle size={16} className={styles.checkIcon} />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Achievements Section */}
                                <div className={styles.infoSection}>
                                    <div className={styles.sectionTitle}>
                                        <Award size={20} />
                                        <h4>Key Achievements</h4>
                                    </div>
                                    <div className={styles.achievementsList}>
                                        {expert.highlights.slice(0, 4).map((item, idx) => (
                                            <div key={idx} className={styles.achievementItem}>
                                                <div className={styles.achievementDot}></div>
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ThinkTanks;
