import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
