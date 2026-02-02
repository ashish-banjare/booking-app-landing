import SectionTitle from "../Common/SectionTitle";
import shape5Img from "../../assets/images/shape-5.svg";
import shape6Img from "../../assets/images/shape-6.png";
import downloadImg from "../../assets/images/download.png";
const DownloadApp = () => {
  return (
    <section id="download" className="download_app_area pt-80 mb-80">
        <div className="container">
            <div className="download_app">
                <div className="download_shape">
                    <img src={shape5Img} alt="shape " />
                </div>
                <div className="download_shape_2">
                    <img src={shape6Img} alt="shape" />
                </div>
                <div className="download_app_content">
                    <h3 className="download_title">Download The App</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod.</p>
                    <ul>
                        <li>
                            <a className="d-flex align-items-center" href="#">
                                <span className="icon">
                                    <i className="lni lni-play-store"></i>
                                </span>
                                <span className="content media-body">
                                    <h6 className="title">Play Store</h6>
                                    <p>Download Now</p>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a className="d-flex align-items-center" href="#">
                                <span className="icon">
                                    <i className="lni lni-apple"></i>
                                </span>
                                <span className="content">
                                    <h6 className="title">App Store</h6>
                                    <p>Download Now</p>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>  {/* download app content */}
            </div> {/* download app */}
        </div> {/* container */}
        <div className="download_app_image d-none d-lg-flex align-items-end">
            <div className="image wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.5s" style={{visibility: "visible", animationDuration: "1.3s", animationDelay: "0.5s", animationName: "fadeInRightBig"}}>
                <img src={downloadImg} alt="download" />
            </div> {/* image */}
        </div> {/* download app image */}
    </section>
  );
};

export default DownloadApp;