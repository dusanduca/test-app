import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "./styles.module.css"


interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={styles["main_layout"]}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      </div>
    </>
  );
}
