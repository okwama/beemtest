import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
             
              <h2>Our Services</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>E-Commerce Payment Gateway</h3>
                <p>
                Whether you are an eCommerce platform owner or just maintaining your online presence, you want to offer your customers a safe, quick, and easy-to-use payment system.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>BeeMa-Pay POS</h3>
                <p>
                an App that is designed to Integrate and organize mobile money payments (Specifically MPESA Pay Bill & Tills). 
                With MPESA becoming the default mode of payment many businesses have experienced difficulties identifying payments and as a result suffer huge losses from fraudulent and fake MPESA notifications.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Application Program Interface Service (API)</h3>
                <p>
                The BeeMa Pay API offers clients with existing networks and applications access to multiple services on a singles interface. 
                This solution is ideal for institutions that desire to offer airtime and bill payment services to their customers. 
                Avoid the task of establishing and maintaining multiple contracts, 
                separate monitoring, billing and reporting systems by connecting to BeeMa Pay API Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
