import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

interface NavWithFooterProps {
  children: React.ReactNode;
}

function NavWithFooter({ children }: NavWithFooterProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default NavWithFooter;
