import SectionTitle from "../Common/SectionTitle";
import aboutImg from "../../assets/images/about.png";
import dotSvg from '../../assets/images/dots.svg';
import ButtonLink from "../Common/ButtonLink";

const About = () => {
  return (
  <section id="about" className="about_area pt-30 pb-80">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-6 col-md-9">
                      <div className="about_image mt-50" style={{visibility: "visible", animationDuration: "1.3s", animationDelay: "0.5s", animationName: "fadeInRightBig"}}>
                          <img className="image" src={aboutImg} alt="about" />
                          <img className="dots" src={dotSvg} alt="dots" />
                      </div> {/* about image */}
                  </div>
                  <div className="col-lg-6">
                      <div className="about_content mt-45" style={{visibility: "visible", animationDuration: "1.3s", animationDelay: "0.5s", animationName: "fadeInRightBig"}}>
                          <div className="section_title">
                            <h4 className="title">Discover New Experience!</h4>
                            <p>Our Booking Management App is designed to simplify the way businesses handle reservations, schedules, and customer bookings—all in one powerful, easy-to-use platform.</p>
                            <p>We understand that managing bookings manually or across multiple tools can be time-consuming and error-prone. That’s why our app brings everything together, helping you save time, reduce cancellations, and deliver a seamless booking experience to your customers.</p>
                            <p>With real-time availability, automated confirmations, and flexible booking options, businesses can stay organized while customers enjoy a smooth and hassle-free reservation process. Whether you manage appointments, services, events, or facilities, our system adapts to your needs.</p>
                            <p>The app is built with scalability and reliability in mind, making it suitable for startups, small businesses, and growing enterprises alike. From tracking bookings and managing customers to generating insights and reports, everything is designed to help you make smarter business decisions.</p>
                            <p>Our goal is simple: make booking management effortless, efficient, and customer-friendly—so you can focus on growing your business instead of managing schedules.</p>
                        </div>
                          <ButtonLink myClass="" text="Discover" href="#" />
                          
                      </div> {/* about image */}
                  </div>
              </div> {/* row */}
          </div> {/* container */}
      </section>    
  );
};

export default About;