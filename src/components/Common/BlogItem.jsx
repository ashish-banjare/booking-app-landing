import ButtonLink from "../Common/ButtonLink";
const BlogItem = ({ blogImg, blogTitle, blogDate, comments, likes }) => {
    return (
        <div className="col-lg-4 col-md-8">
            <div className="single_blog blog_1 mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s" style={{visibility: "visible", animationDuration: "1.3s", animationDelay: "0.2s", animationName: "fadeInUp"}}>
                <div className="blog_image">
                    <img src={blogImg} alt="blog" />
                </div>
                <div className="blog_content">
                    <div className="blog_meta d-flex justify-content-between">
                        <div className="meta_date">
                            <span>{blogDate}</span>
                        </div>
                        <div className="meta_like">
                            <ul>
                                <li><a href="#"><i className="lni lni-comments-alt"></i> {comments}</a></li>
                                <li><a href="#"><i className="lni lni-heart"></i> {likes}</a></li>
                            </ul>
                        </div>
                    </div>
                    <h4 className="blog_title"><a href="#">{blogTitle}</a></h4>
                    <ButtonLink myClass="" text="Read More" href="#" />
                </div>
            </div> {/* single blog */}
        </div>
    );
}

export default BlogItem;