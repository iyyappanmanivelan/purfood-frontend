import React from "react";
import { Leaf, Award, ShieldCheck, Users, Factory, BookOpen, GraduationCap, ShoppingBag } from "lucide-react";
import styles from "./styles.module.css";

const AboutUs = () => {
    const pillars = [
        {
            title: "Nutrition",
            icon: <Leaf size={32} />,
            description: "Focusing on wholesome, balanced, and nutrient-rich food solutions.",
        },
        {
            title: "Innovation",
            icon: <Award size={32} />,
            description: "Pioneering new standards in food technology and culinary excellence.",
        },
        {
            title: "Food Safety",
            icon: <ShieldCheck size={32} />,
            description: "Uncompromising adherence to safety protocols and global standards.",
        },
        {
            title: "People-Focused",
            icon: <Users size={32} />,
            description: "Empowering communities and fostering growth through food.",
        },
    ];

    const verticals = [
        {
            title: "Healthy Food Manufacturing",
            icon: <Factory size={24} />,
        },
        {
            title: "Food Safety & Nutrition Consulting",
            icon: <BookOpen size={24} />,
        },
        {
            title: "Industry-Standard Training",
            icon: <GraduationCap size={24} />,
        },
        {
            title: "Retailing of Nutrition-Focused Products",
            icon: <ShoppingBag size={24} />,
        },
    ];

    return (
        <section className={styles.aboutSection}>
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <h2 className={styles.sectionTitle}>About PUR Food LLP</h2>
                        <div className={styles.titleUnderline}></div>
                        <p className={styles.introText}>
                            PUR Food LLP was founded with a commitment to pleasantly unify and
                            revolutionize the food sector through an uncompromising focus on
                            excellence. We work to elevate the nation’s nutrition and
                            food-safety culture.
                        </p>
                    </div>
                </div>

                {/* Core Pillars Grid */}
                <div className="row g-4 mb-5">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="col-md-6 col-lg-3">
                            <div className={styles.pillarCard}>
                                <div className={styles.pillarIcon}>{pillar.icon}</div>
                                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                                <p className={styles.pillarDesc}>{pillar.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Verticals & Conclusion */}
                <div className="row align-items-center mt-5">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className={styles.verticalsWrapper}>
                            <h3 className={styles.subHeading}>Our Operational Verticals</h3>
                            <div className={styles.verticalsGrid}>
                                {verticals.map((item, index) => (
                                    <div key={index} className={styles.verticalItem}>
                                        <div className={styles.verticalIcon}>{item.icon}</div>
                                        <span>{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.conclusionBox}>
                            <p>
                                With a strong foundation in <span className={styles.highlight}>research</span>,{" "}
                                <span className={styles.highlight}>quality systems</span>, and{" "}
                                <span className={styles.highlight}>practical industry experience</span>, we are
                                redefining standards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
