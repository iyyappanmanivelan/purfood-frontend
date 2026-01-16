import React from "react";
import { Landmark, FileText } from "lucide-react";
import styles from "./styles.module.css";

const Regulations = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className="row g-5">
                    {/* Govt Alignment */}
                    <div className="col-lg-6">
                        <h3 className={styles.colTitle}>Government & Regulatory Alignment</h3>
                        <div className={styles.box}>
                            <div className={styles.item}>
                                <Landmark className={styles.icon} />
                                <div>
                                    <strong>FSSAI</strong>
                                    <p>Food Safety & Standards Authority of India</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <Landmark className={styles.icon} />
                                <div>
                                    <strong>FoSTaC</strong>
                                    <p>Food Safety Training & Certification</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <Landmark className={styles.icon} />
                                <div>
                                    <strong>Skill India Mission</strong>
                                    <p>Training ecosystem alignment</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <Landmark className={styles.icon} />
                                <div>
                                    <strong>National Compliance</strong>
                                    <p>As per national food laws</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Compliance Support */}
                    <div className="col-lg-6">
                        <h3 className={styles.colTitle}>Compliance & Legal Support</h3>
                        <div className={styles.box}>
                            <ul className={styles.list}>
                                <li>
                                    <FileText className={styles.listIcon} />
                                    FSSAI licensing (new / renewal / modification)
                                </li>
                                <li>
                                    <FileText className={styles.listIcon} />
                                    FSMS documentation & SOP development
                                </li>
                                <li>
                                    <FileText className={styles.listIcon} />
                                    Mock audits & inspection readiness
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Regulations;
