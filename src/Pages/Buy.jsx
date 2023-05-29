import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import afr

// // Set your app credentials
// const credentials = {
//   apiKey: 'MyAppAPIkey',
//   username: 'MyAppUsername',
// }


// // Initialize the SDK
// const AfricasTalking = require('africastalking')(credentials);

// // Get the airtime service
// const airtime = AfricasTalking.AIRTIME;

// function sendAirtime() {
//     const options = {
//         maxNumRetry: 3, // Will retry the transaction every 60seconds for the next 3 hours.
//         recipients: [{
//             phoneNumber: "MyPhoneNumber",
//             currencyCode: "KES",
//             amount: "100"
//         }]
//     };

//     // That’s it hit send and we’ll take care of the rest
//     airtime.send(options)
//         .then(response => {
//             console.log(response);
//         }).catch(error => {
//             console.log(error);
//         });
// }

// sendAirtime();



function Buy() {
  return (
    <>
      <section className="Buy-page">
        <HeroPages name="Buy Airtime" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Buy Airtime Across All Networks</h2>
              <p>
              We make it easy and safe for you to buy airtime and pay your bills online or with Mpesa Paybill 8889900!
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
                  Phone To Top up <b>*</b>
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

export default Buy;
