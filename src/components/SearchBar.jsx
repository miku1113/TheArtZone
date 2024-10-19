import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io";
import "./css/module.SearchBar.css";

const SearchBar = () => {
const handleWhatsAppClick = () => {
    // Open WhatsApp in a new tab with the provided number
    window.open('https://api.whatsapp.com/send?phone=9824180759', '_blank');
};

  return (
    <div className="call px-lg-5 py-1 d-flex justify-content-between flex-wrap">
      <div className="social-icons">
        <FaFacebookF className="icons" />
        <AiFillInstagram className="icons" />
        <IoLogoWhatsapp className="icons" />
      </div>
      <div className="contact-info">
        <label onClick={handleWhatsAppClick}>
          <IoLogoWhatsapp className="icons" />
          9824180759 &nbsp;&nbsp;
        </label>
        <IoCallOutline />
        8866465508
      </div>
    </div>
  );
};

export default SearchBar;
