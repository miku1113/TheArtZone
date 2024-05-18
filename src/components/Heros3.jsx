import React from 'react';
import './css/module.Heros3.css';

const Heros3 = () => {
    const handleWhatsAppClick = () => {
        window.open('https://api.whatsapp.com/send?phone=9824180759', '_blank');
    };

    return (
        <section className="heros3">
            <div className="heros3-content">
                <h1 className="heros3-H1">CONTACT US TO BOOK YOUR CLASS NOW!</h1>
                <button className='heros3-button' onClick={handleWhatsAppClick}>BOOK NOW</button>
            </div>
        </section>
    );
};

export default Heros3;
