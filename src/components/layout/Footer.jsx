const Footer = () => {
   var currentYear = new Date().getFullYear();
  return (
    <section id="footer" className="footer_area pt-75 pb-80">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="footer_subscribe text-center">
                        <h3 className="subscribe_title">Subscribe our newsletter</h3>
                        <p>Join thousands of users who believe this is the one app.</p>
                        
                        <div className="subscribe_form">
                            <form action="#">
                                <input type="text" placeholder="Enter Email..." />
                                <button className="main-btn">Subscribe</button>
                            </form>
                        </div>  {/* subscribe form */}
                    </div> {/* footer subscribe */}
                    <div className="footer_social text-center mt-60">
                        <ul>
                            <li><a href="#"><span className="lni lni-facebook-filled"></span></a></li>
                            <li><a href="#"><span className="lni lni-twitter-original"></span></a></li>
                            <li><a href="#"><span className="lni lni-instagram-filled"></span></a></li>
                            <li><a href="#"><span className="lni lni-linkedin-original"></span></a></li>
                        </ul>
                    </div> {/* footer social */}
                    <div className="footer_copyright text-center mt-55">
                        <p>Copyright © {currentYear}. Designed and Developed by <a href="#" target="_blank" rel="nofollow">Ashish Banjare</a> Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a></p>
                    </div> {/* footer copyright */}
                </div>
            </div> {/* row */}
        </div> {/* container */}
    </section>
  );
};

export default Footer;