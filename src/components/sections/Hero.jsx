import { useEffect } from 'react';

import shape1  from '../../assets/images/shape-1.svg';
import shape2  from '../../assets/images/shape-2.svg';
import shape3  from '../../assets/images/shape-3.svg';
import headerApp from '../../assets/images/header_app.png';
import dotSvg from '../../assets/images/dots.svg';
import ButtonLink from '../Common/ButtonLink';

export default function Hero() {

    useEffect(() => {
        // Disable WOW animation dependency safely
        const animated = document.querySelectorAll('.wow');
        animated.forEach(el => el.style.visibility = 'visible');
    }, []);

    return (
       <div id="home" className="header_hero d-lg-flex align-items-center">
            <img className="shape shape-1" src={shape1} alt="shape" />
            <img className="shape shape-2" src={shape2} alt="shape" />
            <img className="shape shape-3" src={shape3} alt="shape" />
            
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="header_hero_content mt-45">
                            <h2 className="header_title">Booking Management app</h2>
                            <p>Book, manage, and enjoy seamless reservations with our smart booking management app designed for speed, clarity, and total control everywhere.</p>
                            <ul>
                                <li><ButtonLink myClass="" text="Discover More" href="#" /></li>
                                <li><ButtonLink myClass="main-btn-2" text="Download App" href="#" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_image d-flex align-items-end">
                <div className="image wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="1.8s">
                    <img src={headerApp} alt="header App" />
                    <img src={dotSvg} alt="dots" className="dots" />
                </div>
            </div>
        </div>
    );
}