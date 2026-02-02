import { useEffect } from "react";

const Screenshots = () => {
  useEffect(() => {
    // Bootstrap carousel requires JS import globally
  }, []);

  return (
    <section className="screenshot-area">
      <div className="container">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* <img src="../../assets/images/hero-image-2.jpg" className="d-block w-100" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
