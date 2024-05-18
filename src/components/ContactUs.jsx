import React from 'react';
import './css/module.ContectUs.css'

const ContactUs = () => {
    return (
        <div>
            <section>
                <div className="contectus_container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="contact-us-container">
                                <h1 className="pb-2 border-bottom">CONTACT US</h1>
                                <p className="lead">
                                    If you have any questions, feedback, or inquiries, feel free to reach out to us using the form below.
                                </p>
                                <form className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name:</label>
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Your Email:</label>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message:</label>
                                        <textarea className="form-control" id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>
                                    </div>
                                    <button className="contectus-btn">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
            <div className="location_container">
                <div className="row">
                    <div className="col-lg-6">
                        {/* Map container */}
                        <div className="map-container">
                            {/* Google Maps iframe */}
                            <iframe
                                title="company-map"
                                width="100%"
                                height="450"
                                frameBorder="0"
                                style={{ border: 0 }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.7747726345885!2d72.83121631539298!3d21.18203888694608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e417988ac67%3A0x7f6a307738e7be7f!2sReliance%20Mall!5e0!3m2!1sen!2sin!4v1619455732172!5m2!1sen!2sin"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {/* Contact details */}
                        <div className="contact-details">
                            <h1 className="pb-2 border-bottom">OUR LOCATION</h1>
                            <p className="lead">
                                If you have any questions, feedback, or inquiries, feel free to reach out to us using the location below.
                            </p>
                            {/* Your additional contact details */}
                            <p>Address: Reliance Mall, [Your Address]</p>
                            <p>Phone: 9824180759, 8866465508</p>
                            <p>Email: [Your Email]</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default ContactUs;
