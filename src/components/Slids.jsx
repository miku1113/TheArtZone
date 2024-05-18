import { Carousel } from "react-bootstrap";
import { MdOutlineContactSupport } from "react-icons/md";
import backgroung1 from "../assets/background1.jpg";
import character1 from "../assets/karate.png";
import backgroung2 from "../assets/background2.jpg";
import character2 from "../assets/garba.png";
import backgroung3 from "../assets/background3.jpg";
import character3 from "../assets/dance.png";
import backgroung4 from "../assets/background4.jpg";
import fitness from "../assets/fitness.png";
import "./css/module.Slide.css";

const Slids = () => {
  const handleWhatsAppClick = () => {
    // Open WhatsApp in a new tab with the provided number
    window.open('https://api.whatsapp.com/send?phone=9824180759', '_blank');
};

  return (
    <Carousel>
            <Carousel.Item
        style={{
          backgroundImage: `url(${backgroung3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="d-flex justify-content-between align-items-center position-relative">
          <div
            className="text-start w-50"
            style={{
              height: "100vh",
            }}
          >
            <div className="slides-text text-black p-5 slowest-slide-animation">
              <h1>DANCE CLASS</h1>
              <p>
              Dance is a form of creative expression through physical movement that includes rhythmic movements that accompany music.
              </p>
              <button className="contectus-btn" onClick={handleWhatsAppClick}>
                <MdOutlineContactSupport /> Contact us for dance classes
              </button>
            </div>
          </div>
          <img
            src={character3}
            alt="Character"
            className="slids position-absolute align-items-center end-0 bottom-0 slower-slide-animation"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item
        style={{
          backgroundImage: `url(${backgroung1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="d-flex justify-content-between align-items-center position-relative">
          <div
            className="text-start w-50"
            style={{
              height: "100vh",
            }}>
            <div className="slides-text text-black p-5 slowest-slide-animation">
              <h1>KARATE CLASS</h1>
              <p>
              Karate is a Japanese martial art whose physical aspects seek the development of defensive and counterattacking body movements
              </p>
              <button className="contectus-btn" onClick={handleWhatsAppClick}>
                <MdOutlineContactSupport /> Contact us for karate classes
              </button>
            </div>
          </div>
          <img
            src={character1}
            alt="Character"
            className="slids position-absolute end-0 bottom-0 slower-slide-animation"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item
        style={{
          backgroundImage: `url(${backgroung2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="d-flex justify-content-between align-items-center position-relative">
          <div
            className="text-start w-50"
            style={{
              height: "100vh",
            }}
          >
            <div className="slides-text text-black p-5 slowest-slide-animation">
              <h1>GARBA CLASS</h1>
              <p>
              Garba is a dance that honors, worships, and celebrates the feminine form of divinity.
              </p>
              <button className="contectus-btn" onClick={handleWhatsAppClick}>
                <MdOutlineContactSupport /> Contact us for garba classes
              </button>
            </div>
          </div>
          <img
            src={character2}
            alt="Character"
            className="slids position-absolute align-items-center end-0 bottom-0 slower-slide-animation"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item
        style={{
          backgroundImage: `url(${backgroung4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="d-flex justify-content-between align-items-center position-relative">
          <div
            className="text-start w-50"
            style={{
              height: "100vh",
            }}
          >
            <div className="slides-text text-black p-5 slowest-slide-animation">
              <h1>BODY FITNESS</h1>
              <p>
              Physical fitness refers to the ability of your body systems to work together efficiently to allow you to be healthy and perform activities of daily living.
              </p>
              <button className="contectus-btn" onClick={handleWhatsAppClick}>
                <MdOutlineContactSupport /> Contact us for body fitness
              </button>
            </div>
          </div>
          <img
            src={fitness}
            alt="Character"
            className="slids position-absolute align-items-center end-0 bottom-0 slower-slide-animation"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slids;
