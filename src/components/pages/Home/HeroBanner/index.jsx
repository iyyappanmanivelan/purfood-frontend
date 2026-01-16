import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";
import styles from "./styles.module.css";

const HeroBanner = () => {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Content */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className={styles.contentWrapper}>
              <span className={styles.tagline}>
                Pleasantly Unifying & Revolutionizing Food
              </span>
              <h1 className={styles.mainHeading}>PUR Food LLP</h1>
              <p className={styles.subHeading}>
                A holistic, nutrition-focused, safety-driven food enterprise
              </p>
              <p className={styles.description}>
                Serving institutions, industries, and consumers across India. Single
                Point Contact for Hospitality Food Training & Compliance.
              </p>

              <div className={styles.badges}>
                <span className={styles.badgeItem}>
                  <CheckCircle size={18} className={styles.badgeIcon} /> FSSAI
                </span>
                <span className={styles.badgeItem}>
                  <CheckCircle size={18} className={styles.badgeIcon} /> FoSTaC
                </span>
                <span className={styles.badgeItem}>
                  <CheckCircle size={18} className={styles.badgeIcon} /> Skill
                  India
                </span>
              </div>

              <div className={styles.visionBox}>
                <p>“A single point solution for all your food related activities.”</p>
              </div>

              <div className={styles.ctaGroup}>
                <Link href="/services" className={`btn ${styles.btnPrimary}`}>
                  Our Services
                </Link>
                <Link href="/contact" className={`btn ${styles.btnOutline}`}>
                  Contact Us <ArrowRight size={18} className="ms-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0">
            <div className={styles.imageWrapper}>
              <div className={styles.blobBackground}></div>
              <Image
                src="/assets/bgbannerhero.png"
                alt="Delicious Food Plate"
                width={600}
                height={600}
                className={styles.heroImage}
                priority
              />
              {/* Floating Card Decorative Element */}
              <div className={styles.floatingCard}>
                <div className={styles.cardIcon}>
                  <ShieldCheck size={24} color="var(--brand-accent)" />
                </div>
                <div>
                  <strong>Safety Certified</strong>
                  <span className="d-block text-muted small">FSSAI Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
