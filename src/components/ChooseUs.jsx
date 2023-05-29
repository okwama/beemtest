import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us</h4>
                <h2>How BeeMa Pay Works</h2>
                <p>
                BeeMaPay is a company offering payment solutions for customer convenience as a one stop shop to empower communities across Africa and beyond.
                </p>
                <p>One digital payment application for multiple services</p>
                <a href="#home">
                  Find Details &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>BUSINESS SOLUTIONS</h4>
                    <p>
                    BeeMa Pay solutions work on the internet and at point of sale with BeeMa Pay POS. We provide a simple, 
                    safe and secure way for businesses to accept payments in Kenya. We have partnered with Banks, 
                    Mobile Network Operators and Credit Card companies to give businesses a wide variety of payment solutions
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>PERSONAL PAYMENTS</h4>
                    <p>
                    We make it easy and safe for you to Buy Airtime, Pay Bills, Shop online and on your mobile in Kenya. 
                    We have security features in place to protect all your information, with notifications sent for activities. Simplify your payments today!
                    </p>
                  </div>
                </div>
                {/* <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>No Hidden Charges</h4>
                    <p>
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
