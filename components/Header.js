import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.flex}>
        <div className={styles.image}>
            <Image
            src="/img/mercado_libre_logo.606e0981e5e08.avif"
            width="300"
            height="200"
            alt="Logo mercado Clon"
            />
        </div>
        <div>
            <Link href="/pages/index.js">
            <a className={styles.icon}>
                <i className="fa-solid fa-circle-question"></i>
            </a>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
