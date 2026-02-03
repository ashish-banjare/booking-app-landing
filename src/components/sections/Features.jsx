import React from "react";
import SectionTitle from "../Common/SectionTitle.jsx";

import FeaturesContent from "../Common/FeaturesContent.jsx";
import FeaturesIcon from "../Common/FeaturesIcon.jsx";

import { Lineicons } from "@lineiconshq/react-lineicons";
import {
  AirbnbOutlined,
  BurgerDrinkSolid,
  BusketBallBulk,
  Code1Outlined,
  Layers1Bulk,
  Download1Bulk
} from "@lineiconshq/free-icons";



const Features = () => {
    return(
        // <section id="features" className="features-area">
        //     <div className="container">
        //         <SectionTitle
        //             title="App Features"
        //             subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        //         />

        //         <div className="row">
        //             <div className="col-lg-4">
        //                 <div className="single-features">
        //                 <i className="lni lni-cog"></i>
        //                 <h4>Easy Setup</h4>
        //                 <p>Quick and easy installation</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section id="features" className="features_area pt-35 pb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-7 col-sm-8">
                        <div className="single_features mt-30 features_1 text-center wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
                            <FeaturesIcon icon={BurgerDrinkSolid} size={50} color="white" width={1.5} />
                            <FeaturesContent title="Private Pools" subtitle="Swim, float, tan, or host a pool party" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-7 col-sm-8">
                        <div className="single_features mt-30 features_2 text-center wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">
                            <FeaturesIcon icon={AirbnbOutlined} size={50} color="white" width={1.5} />
                            <FeaturesContent title="Hot Tubs & Saunas" subtitle="Relax and unwind in our premium hot tubs and saunas" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-7 col-sm-8">
                        <div className="single_features mt-30 features_3 text-center wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.9s">
                            <FeaturesIcon icon={BusketBallBulk} size={50} color="white" width={1.5} />
                            <FeaturesContent title="Pickleball, Tennis & Sport Courts" subtitle="Pickleball, Tennis & Sport Courts – Play your game, your way" />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-7 col-sm-8">
                        <div className="single_features mt-30 features_1 text-center wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
                            <FeaturesIcon icon={Code1Outlined} size={50} color="white" width={1.5} />
                            <FeaturesContent title="Backyards & Patios" subtitle="Great for BBQs, birthdays, or gatherings" />

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-7 col-sm-8">
                        <div className="single_features mt-30 features_2 text-center wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">
                            <FeaturesIcon icon={Layers1Bulk} size={50} color="white" width={1.5} />
                            <FeaturesContent title="Photo-Ready Spaces" subtitle="Beautifully designed spaces perfect for capturing stunning photos" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-7 col-sm-8">
                        <div className="single_features mt-30 features_3 text-center wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.9s">
                            <FeaturesIcon icon={Download1Bulk} size={50} color="white" width={1.5} />
                            <FeaturesContent title="Pet-Friendly Rentals" subtitle="Enjoy pet-friendly rentals that are perfect for your furry friends" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Features;