import { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import axios from 'axios';
import "./css/module.Footer.css";
import {
  FaWhatsapp,
  FaPinterestP,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { GrYoga } from "react-icons/gr";

const Footer = ({ selectedTab, setSelectedTab, setId }) => {
  const [wpIsHovered, setWpIsHovered] = useState(false);
  const [piIsHovered, setPiIsHovered] = useState(false);
  const [fbIsHovered, setFbIsHovered] = useState(false);
  const [inIsHovered, setInIsHovered] = useState(false);
  const [classes, setClasses] = useState([]);

  const handleWhatsAppClick = () => {
    // Open WhatsApp in a new tab with the provided number
    window.open('https://api.whatsapp.com/send?phone=9824180759', '_blank');
  };

  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get('http://localhost/TheArtZone/beckend/calssess.php')
      .then(response => {
        // Update image paths
        const updatedClasses = response.data.map(cls => ({
          ...cls,
          // Replace escape sequences in image URLs and adjust path
          image: cls.image.replace(/\\|\//g, '') // Replace '\' and '/' with ''
        }));
        // Set the classes data
        setClasses(updatedClasses);
      })
      .catch(error => {
        console.error('Error fetching classes:', error);
      });
  }, []);

  const handleNavItemClickArt = (tab, id) => {
    setSelectedTab(tab);
    setId(id);
    console.log(id);
  }

  const handelInstagramClick = () => {
    window.open('https://www.instagram.com/art_classes.surat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
  }

  const handelFacebookClick = () => {
    window.open('https://www.facebook.com/artclassessurat', '_blank');
  }

  return (
    <div className="Mjcontainer">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h3 className="brand-text"
              onClick={() => {
                setSelectedTab("Home");
              }}>
              {/* <GrYoga className="logo" /> */}
              <img className="art-img" src={`/src/assets/ArtLogo.png`}/>
              THE ART ZONE
            </h3>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-body-secondary Mjli ${selectedTab === "Home" ? "active" : ""
                    }`}
                  onClick={() => {
                    setSelectedTab("Home");
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-body-secondary Mjli ${selectedTab === "Classes" || selectedTab === "ArtShowcase" ? "active" : ""}`}
                  onClick={() => {
                    setSelectedTab("Classes");
                  }}
                >
                  Classes
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-body-secondary Mjli ${selectedTab === "AboutUs" ? "active" : ""
                    }`}
                  onClick={() => {
                    setSelectedTab("AboutUs");
                  }}
                >
                  AboutUs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-body-secondary Mjli ${selectedTab === "ContactUs" ? "active" : ""
                    }`}
                  onClick={() => {
                    setSelectedTab("ContactUs");
                  }}
                >
                  ContactUs
                </a>
              </li>{" "}
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h3>Services</h3>
            <ul className="nav flex-column">
              {Array.isArray(classes) && classes.length > 0 ? (
                classes.map(cls => (
                  <li className="nav-item mb-2" key={cls.id} >
                    <a href="#" className="nav-link p-0 text-body-secondary Mjli" onClick={() => handleNavItemClickArt("ArtShowcase", cls.id)}>
                      {cls.class}
                    </a>
                  </li>
                ))
              ) : (
                <p>No classes found</p>
              )}
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h3>Support</h3>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-body-secondary Mjli ${selectedTab === "ContactUs" ? "active" : ""
                    }`}
                  onClick={() => {
                    setSelectedTab("ContactUs");
                  }}
                >
                  ContactUs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary Mjli">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-body-secondary Mjli ${selectedTab === "AboutUs" ? "active" : ""
                    }`}
                  onClick={() => {
                    setSelectedTab("AboutUs");
                  }}
                >
                  AboutUs
                </a>
              </li>
              <div className="MjSocialmedia">
                <FaWhatsapp
                  onClick={handleWhatsAppClick}
                  onMouseEnter={() => setWpIsHovered(true)}
                  onMouseLeave={() => setWpIsHovered(false)}
                  style={{ fill: wpIsHovered ? "#d24539" : "#343a40" }}
                />
                <FaFacebookF
                  onClick={handelFacebookClick}
                  onMouseEnter={() => setFbIsHovered(true)}
                  onMouseLeave={() => setFbIsHovered(false)}
                  style={{ fill: fbIsHovered ? "#d24539" : "#343a40" }}
                />
                <FaInstagram
                  onClick={handelInstagramClick}
                  onMouseEnter={() => setInIsHovered(true)}
                  onMouseLeave={() => setInIsHovered(false)}
                  style={{ fill: inIsHovered ? "#d24539" : "#343a40" }}
                />
              </div>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary MjsubscribeBtn" type="button">
                  Subscribe
                </button>
              </div>
              <div className="contact-info">
                <IoLogoWhatsapp className="icons" onClick={handleWhatsAppClick} />
                9824180759 &nbsp;&nbsp;
                <IoCallOutline />
                8866465508
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2024 ART CLASSES, Inc. All rights reserved.</p>
          {/* <p>Designed By Mihir Jariwala</p> */}
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#twitter"></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#instagram"></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#facebook"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
