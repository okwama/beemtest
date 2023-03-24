import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Personalpay from "../components/Personalpay";
import Bullet from "../components/Bullet"

function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Personal Payments" />
        <Personalpay />
        <Bullet/>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Buy Airtime & Pay Bills Via Paybill Or Online</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
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

export default TestimonialsPage;
