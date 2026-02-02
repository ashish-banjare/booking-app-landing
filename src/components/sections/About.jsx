import SectionTitle from "../Common/SectionTitle";
import aboutImg from "../../assets/images/about.png";
import dotSvg from '../../assets/images/dots.svg';

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
                          <SectionTitle 
                            title="Discover New Experience!"
                            subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod tempor invidunt ut labore et dolore malquyam erat, sed diam voluptua. At vero eos et accusam et justo doloes et ea rebum. Stet clita kasd gubergren, nod sea takmaa santus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sitdse ametr consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore." 
                          />
                          <a className="main-btn" href="#">Discover</a>
                          
                      </div> {/* about image */}
                  </div>
              </div> {/* row */}
          </div> {/* container */}
      </section>    
  );
};

export default About;