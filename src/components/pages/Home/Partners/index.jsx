import React from "react";
import Image from "next/image";
import { Handshake, Award } from "lucide-react";
import styles from "./styles.module.css";

const Partners = () => {
    // Associated Partners (as1 to as11)
    const associatedPartners = [
        { name: "Qualcomm", logo: "/assets/as1.jpeg" },
        { name: "IIHM", logo: "/assets/as2.jpeg" },
        { name: "Delight Foods", logo: "/assets/as3.jpeg" },
        { name: "GreenPark Hotels", logo: "/assets/as4.jpeg" },
        { name: "Vethaa Milk", logo: "/assets/as5.jpeg" },
        { name: "Arjun Hospitality", logo: "/assets/as6.jpeg" },
        { name: "Amaai Herbals", logo: "/assets/as7.jpeg" },
        { name: "Jalalai Kadai", logo: "/assets/as8.jpeg" },
        { name: "Sri Krishna Sweets", logo: "/assets/as9.jpeg" },
        { name: "Le Royal Meridien", logo: "/assets/as10.jpeg" },
        { name: "Roast Coffee", logo: "/assets/as11.jpeg" },
    ];

    // Technical Partners (pt1 to pt4)
    const technicalPartners = [
        { name: "Technical Partner 1", logo: "/assets/pt1.jpeg" },
        { name: "Technical Partner 2", logo: "/assets/pt2.jpeg" },
        { name: "Technical Partner 3", logo: "/assets/pt3.jpeg" },
        { name: "Technical Partner 4", logo: "/assets/pt4.jpeg" },
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="text-center mb-5">
                    <div className={styles.iconWrapper}>
                        <Handshake size={40} />
                    </div>
                    <h2 className={styles.title}>Our Partners</h2>
                    <div className={styles.underline}></div>
                    <p className={styles.subtitle}>
                        Trusted collaborations driving excellence in food safety and hospitality
                    </p>
                </div>

                {/* Associated Partners Section - Animated Slider */}
                <div className={styles.partnerSection}>
                    <div className={styles.sectionHeader}>
                        <Handshake size={24} />
                        <h3>Associated Partners</h3>
                    </div>
                    <div className={styles.sliderWrapper}>
                        <div className={styles.slider}>
                            {/* Triple the logos for smooth infinite scroll */}
                            {[...associatedPartners, ...associatedPartners, ...associatedPartners].map((partner, index) => (
                                <div key={index} className={styles.logoCard}>
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        width={200}
                                        height={150}
                                        className={styles.partnerLogo}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Technical Partners Section - Animated Slider (Reverse Direction) */}
                <div className={styles.partnerSection}>
                    <div className={styles.sectionHeader}>
                        <Award size={24} />
                        <h3>Technical Partners</h3>
                    </div>
                    <div className={styles.sliderWrapper}>
                        <div className={`${styles.slider} ${styles.sliderReverse}`}>
                            {/* Triple the logos for smooth infinite scroll */}
                            {[...technicalPartners, ...technicalPartners, ...technicalPartners].map((partner, index) => (
                                <div key={index} className={styles.logoCard}>
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        width={200}
                                        height={150}
                                        className={styles.partnerLogo}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
