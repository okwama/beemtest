import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Reach Out</h2>
              <p>
              Send us a message using the contact form or use the information below to reach us
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (254)74-1190-004
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                info@beemapay.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Nairobi, Kenya
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Reliable Online Payments</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(254)741190004</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
