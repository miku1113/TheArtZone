import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { GoHome } from "react-icons/go";
import { GrYoga } from "react-icons/gr";
import { MdOutlineClass, MdOutlineContactSupport, MdConnectWithoutContact } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "./css/module.NavBar.css";
import { FaWhatsapp } from "react-icons/fa";

const NavBar = ({ setSelectedTab, selectedTab }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavItemClick = (tab) => {
    setSelectedTab(tab);
    setExpanded(false); // Close the navbar when a nav item is clicked
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar-custom ${isSticky ? "sticky" : ""}`}
      expanded={expanded}
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#" className="brand-text"
          onClick={() => {
            setSelectedTab("Home");
          }}>
          {/* <GrYoga className="logo" /> */}
          <img className="art-img" src={`/src/assets/ArtLogo.png`}/>
          THE ART ZONE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle} />
        <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-center ${expanded ? 'bg-white' : ''}`}>
          <Nav className="ml-auto">
            <a href="#" className={`nav-link navmj ${selectedTab === "Home" && "active"}`} onClick={() => handleNavItemClick("Home")}><GoHome />Home</a>
            <a href="#" className={`nav-link ${selectedTab === "Classes" || selectedTab === "ArtShowcase" ? "active" : ""} navmj`} onClick={() => handleNavItemClick("Classes")}><MdOutlineClass />Classes</a>
            <a href="#" className={`nav-link ${selectedTab === "AboutUs" && "active"} navmj`} onClick={() => handleNavItemClick("AboutUs")}><MdOutlineContactSupport />AboutUs</a>
            <a href="#" className={`nav-link ${selectedTab === "ContactUs" && "active"} navmj`} onClick={() => handleNavItemClick("ContactUs")}><MdConnectWithoutContact />ContactUs</a>
          </Nav>
          <div className="ml-0">
            <button className="MjsubscribeBtn-outline py-2 btn-lg px-3"><FaWhatsapp />CHAT NOW</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
