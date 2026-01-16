import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

const Navbar = () => {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar}`}>
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image
            src={"/assets/purfood-logo-crop.jpg"}
            width={50}
            height={50}
            className={styles.brandLogo}
            alt="PurFood Logo"
          />
          <span className={styles.brandName}>PurFood</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link ${styles.navLink} ${isActive('/') ? styles.active : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/why-pur-food"
                className={`nav-link ${styles.navLink} ${isActive('/why-pur-food') ? styles.active : ''}`}
              >
                Why PurFood
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/services"
                className={`nav-link ${styles.navLink} ${isActive('/services') ? styles.active : ''}`}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact"
                className={`nav-link ${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link href="/contact" className={`btn ${styles.btnPrimary}`}>
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
