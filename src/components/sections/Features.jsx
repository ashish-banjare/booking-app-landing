import SectionTitle from "../Common/SectionTitle.jsx";

const Features = () => {
    return(
        <section id="features" className="features-area">
            <div className="container">
                <SectionTitle
                    title="App Features"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />

                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-features">
                        <i className="lni lni-cog"></i>
                        <h4>Easy Setup</h4>
                        <p>Quick and easy installation</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;