import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import CarImg1 from "../images/cars-big/box.png";
import CarImg2 from "../images/cars-big/box1.png";
import CarImg3 from "../images/cars-big/box3.png";
// import CarImg4 from "../images/cars-big/box.png";
// import CarImg5 from "../images/cars-big/box.png";
// import CarImg6 from "../images/cars-big/box.png";
import { Link } from "react-router-dom";

function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Business Solution" />
        <div className="container">
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg1} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Android Mini Smart POS K5</p>
                      <h1>Professional code scanning & fast payment capability</h1>
                      
                    </div>
                     </div>
                  
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Request Sample
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg2} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Android Centerm K9</p>
                      <p>All in One POS</p>
                      <h1>One Device, Meet All Payment Scenarios</h1>
                      
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                     
                    </div>
                  </div>
                  
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Request Sample
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg3} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Android  Smart POS K10</p>
                      <h1>High Speed Thermal Printers</h1>
                      
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                     
                    </div>
                  </div>
                  
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Request Sample
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            

            

            
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Buy Airtime & Pay Bills Via Paybill Or Online</h2>
              <span>
                {/* <i className="fa-solid fa-phone"></i> */}
                <h3>8889900</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Models;
