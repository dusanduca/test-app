import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div style={{height: "100vh"}}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      </div>
    </>
  );
}
