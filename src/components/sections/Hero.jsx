import { useEffect } from 'react';

import shape1  from '../../assets/images/shape-1.svg';
import shape2  from '../../assets/images/shape-2.svg';
import shape3  from '../../assets/images/shape-3.svg';
import headerApp from '../../assets/images/header_app.png';
import dotSvg from '../../assets/images/dots.svg';

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
                            <h2 className="header_title">HTML App Landing Page Template</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                            <ul>
                                <li><a className="main-btn" href="#">Discover More</a></li>
                                <li><a className="main-btn main-btn-2" href="#">Download App</a></li>
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