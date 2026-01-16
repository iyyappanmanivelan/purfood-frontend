import React from "react";
import {
    Users,
    Clock,
    Target,
    MessageCircle,
    UserCheck,
    Heart,
    Brain,
    ShieldAlert,
    Flame,
    Stethoscope,
    Building
} from "lucide-react";
import styles from "./styles.module.css";

const IndustryTraining = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className={styles.title}>Industry Related Training & Other Services</h2>
                    <div className={styles.underline}></div>
                </div>

                <div className="row g-5 align-items-start">
                    {/* Soft Skills Column */}
                    <div className="col-lg-6">
                        <div className={`${styles.categoryCard} ${styles.softSkillsCard}`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconCircle}>
                                    <Users size={32} />
                                </div>
                                <h3>Soft Skills & Professional Development</h3>
                            </div>

                            <div className={styles.subCategory}>
                                <h4>Holistic Wellbeing</h4>
                                <div className={styles.skillTags}>
                                    <span><Clock size={14} /> Time Management</span>
                                    <span><Target size={14} /> Goal Setting</span>
                                    <span><Heart size={14} /> Attitude</span>
                                    <span><MessageCircle size={14} /> Communication Skills</span>
                                    <span><UserCheck size={14} /> Personality Development</span>
                                    <span><Heart size={14} /> Good Manners</span>
                                    <span><Brain size={14} /> Decision Making</span>
                                    <span><Users size={14} /> Team Building</span>
                                </div>
                            </div>

                            <div className={styles.subCategory}>
                                <h4>Personal Growth</h4>
                                <div className={styles.skillTags}>
                                    <span>Self Confidence</span>
                                    <span>Anger Management</span>
                                    <span>Stress Management</span>
                                    <span>Leadership Skills</span>
                                    <span>Values & Commitment</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Safety & Health Column */}
                    <div className="col-lg-6">
                        <div className={`${styles.categoryCard} ${styles.safetyCard}`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconCircle}>
                                    <ShieldAlert size={32} />
                                </div>
                                <h3>Safety, Health & Compliance</h3>
                            </div>

                            <ul className={styles.complianceList}>
                                <li>
                                    <div className={styles.listIcon}><ShieldAlert size={20} /></div>
                                    <div>
                                        <strong>POSH Awareness</strong>
                                        <p>Prevention of Sexual Harassment training</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listIcon}><Heart size={20} /></div>
                                    <div>
                                        <strong>First Aid Training</strong>
                                        <p>Emergency response basics</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listIcon}><Flame size={20} /></div>
                                    <div>
                                        <strong>Industrial & Fire Safety</strong>
                                        <p>Includes safety protocols and Mock Drills</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listIcon}><Stethoscope size={20} /></div>
                                    <div>
                                        <strong>Medical Health Checkup</strong>
                                        <p>Onsite employee health screenings</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listIcon}><Building size={20} /></div>
                                    <div>
                                        <strong>Occupational Health Centre</strong>
                                        <p>Managing OHC inside premises</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listIcon}><Target size={20} /></div>
                                    <div>
                                        <strong>NATS Apprenticeship</strong>
                                        <p>Implementation support</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer/Reach Section */}
                <div className={styles.reachWrapper}>
                    <div className={styles.reachContent}>
                        <h3>Our Training Footprint</h3>
                        <p>
                            Covers <strong>multiple states across India</strong>, with <strong>thousands of participants trained</strong> through corporate, institutional, and skill-development projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryTraining;
