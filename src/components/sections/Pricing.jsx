import SectionTitle from "../Common/SectionTitle";
import ButtonLink from "../Common/ButtonLink";
import PricingItem from "../Common/PricingItem";

const Pricing = () => {
     const startupPriceList = ["9AM-5PM Support", "No Update", "No download"];
     const standardPriceList = ["24/7 Support", "Free Update", "limited download"];
     const premiumPriceList = ["24/7 Support", "Free Update", "unimited download"];
    return (
        <section id="pricing" className="pricing_area mt-80 pt-75 pb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section_title text-center pb-25">
                            <h4 className="title">Choose a Plan</h4>
                            <p>Flexible plans designed to fit your schedule, preferences, and poolside experience—choose what works best for you.</p>
                        </div> {/* section title */}
                    </div>
                </div> {/* row */}
                <div className="row justify-content-center">
                    <PricingItem title="Startup" price="$9.00" icon="lni-coffee-cup" mainBtn2="main-btn-2" priceList={startupPriceList} pricingColor="pricing_color_1" />
                    <PricingItem title="Standard" price="$15.00" icon="lni-crown" mainBtn2="" priceList={standardPriceList} pricingColor="pricing_color_2" />
                    <PricingItem title="Premium" price="$20.00" icon="lni-diamond-alt" mainBtn2="main-btn-2" priceList={premiumPriceList} pricingColor="pricing_color_3" />
                </div> {/* row */}
            </div> {/* container */}
        </section>
    );
};

export default Pricing;