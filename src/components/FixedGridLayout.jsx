import React from 'react';
import './css/FixedGridLayout.css';
import image1 from '../assets/event9.jpeg'; // Import images
import image2 from '../assets/event8.jpeg';
import image3 from '../assets/event7.jpeg';
import image4 from '../assets/event6.jpeg'; // Import images
import image5 from '../assets/event5.jpeg';
import image6 from '../assets/event4.jpeg';
import image7 from '../assets/event3.jpeg'; // Import images
import image8 from '../assets/event2.jpeg';
import image9 from '../assets/event1.jpeg';

const FixedGridLayout = () => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
                <div className="col mb-3">
                    <img src={image1} alt="Image 1" className="img-fluid fixed-image" />
                </div>
                <div className="col mb-3">
                    <img src={image2} alt="Image 2" className="img-fluid fixed-image" />
                </div>
                <div className="col mb-3">
                    <img src={image3} alt="Image 3" className="img-fluid fixed-image" />
                </div>
                <div className="col mb-3">
                    <img src={image4} alt="Image 1" className="img-fluid fixed-image" />
                </div>
                <div className="col mb-3">
                    <img src={image5} alt="Image 2" className="img-fluid fixed-image" />
                </div>
                <div className="col mb-3">
                    <img src={image6} alt="Image 3" className="img-fluid fixed-image" />
                </div>
                <div className="col mb-3">
                    <img src={image7} alt="Image 1" className="img-fluid fixed-image" />
                </div>
                <div className="col mb-3">
                    <img src={image8} alt="Image 2" className="img-fluid fixed-image" />
                </div>
                <div className="col mb-3">
                    <img src={image9} alt="Image 3" className="img-fluid fixed-image" />
                </div>
            </div>
        </div>
    );
};

export default FixedGridLayout;
