import React from 'react';
import './css/module.WhatsappButton.css';
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButon = ({ whatsappNumber }) => {
const handleWhatsAppClick = () => {
    // Open WhatsApp in a new tab with the provided number
    window.open('https://api.whatsapp.com/send?phone=9824180759', '_blank');
};

  return (
    <div className="floating-button" onClick={handleWhatsAppClick}>
      <FaWhatsapp className='whatsapp-icon'/>
    </div>
  );
};

export default WhatsappButon;
