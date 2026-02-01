import heroImg from '../../assets/images/hero-image-1.jpg';

export default function Hero() {
    return (
    <section id="home" className="header-hero bg_cover">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-6">
                <h1>Advanced App Landing Page</h1>
                <p>Best app for your daily productivity</p>
                <a href="#" className="main-btn">Download Now</a>
            </div>
            <div className="col-lg-6">
                <img src={heroImg} alt="app" />
            </div>
            </div>
        </div>
        </section>
    );
}