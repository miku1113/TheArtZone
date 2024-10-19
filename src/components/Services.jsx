import "./css/module.Services.css";
import art_tracher from "../assets/art-teacher.jpg";
import mahendi from "../assets/mehendi-bannar.jpg";
import event from "../assets/event.jpg";
import art from '../assets/art-icon.jpg'
import mahendi_icon from '../assets/mahendi.jpg'
import event_icon from '../assets/event-icon.jpg'
import { useEffect, useRef } from "react";

const AnimatedHeading = ({ children }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            headingRef.current.classList.add('in-view');
          } else {
            headingRef.current.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(headingRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <h3 ref={headingRef} className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold MjAnimated-heading">
      {children}
    </h3>
  );
};

const Services = () => {
  return (
    <section className="W-100 bg-white">
      <div className="container  bg-white py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">TRANING</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              style={{
                backgroundImage: `url(${art_tracher})`,
                backgroundSize: "cover", // Make the background cover the entire element
                backgroundPosition: "center", // Center the background image
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="d-flex flex-column h-100 px-5 p-5 pb-3 text-white text-shadow-1">
                  <AnimatedHeading>ART TEACHER TRAINING</AnimatedHeading>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={art}
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill"></use>
                    </svg>
                    <small>INDIA</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3"></use>
                    </svg>
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              style={{
                backgroundImage: `url(${mahendi})`,
                backgroundSize: "cover", // Make the background cover the entire element
                backgroundPosition: "center", // Center the background image
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="d-flex flex-column h-100 px-5 p-5 pb-3 text-white text-shadow-1">
                  <AnimatedHeading>MAHENDI ART</AnimatedHeading>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={mahendi_icon}
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill"></use>
                    </svg>
                    <small>INDIA</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3"></use>
                    </svg>
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              style={{
                background: `url(${event})`,
                backgroundSize: "cover", // Make the background cover the entire element
                backgroundPosition: "center", // Center the background image
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="d-flex flex-column h-100 px-5 p-5 pb-3 text-shadow-1">
                  <AnimatedHeading>EVENT PLANNING</AnimatedHeading>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={event_icon}
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill"></use>
                    </svg>
                    <small>INDIA</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3"></use>
                    </svg>
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
