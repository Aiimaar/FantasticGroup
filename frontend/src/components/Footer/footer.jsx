import "./footer.css";
import { FaYoutube, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <p className="footer-copy">© 2025 <strong>Fantastic4</strong></p>
        <div className="footer-links">
          <a href="#" className="footer-link">Terms & Policy</a>
          <a href="#" className="footer-link">Terms & Policy</a>
        </div>
      </div>
      <div className="footer-icons">
        <a href="https://youtube.com" className="footer-icon"><FaYoutube /></a>
        <a href="https://x.com" className="footer-icon"><FaTwitter /></a>
        <a href="https://facebook.com" className="footer-icon"><FaFacebookF /></a>
        <a href="https://instagram.com" className="footer-icon"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer;
