import Link from "next/link";
import styles from "./styles.module.css";

export default function Navbar() {
  return (
    <div className={styles["navbar"]}>
      <nav className={styles["style_nav"]}>Logo</nav>
      <ul className={styles["list"]}>
        <Link href="/" className={styles["link_nav"]}>Home</Link>
        <Link href="/about"className={styles["link_nav"]}>About</Link>
        <Link href="/contacts"className={styles["link_nav"]}>Contacts</Link>
      </ul>
    </div>
  );
}
