import BlogItem from "../Common/BlogItem";
import blogImg1 from "../../assets/images/blog-1.jpg";
import blogImg2 from "../../assets/images/blog-2.jpg";
import blogImg3 from "../../assets/images/blog-3.jpg";

const Blog = () => {
  return (
    <section id="blog" className="blog_area pt-80 pb-80">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section_title text-center pb-25">
                        <h4 className="title">From The Blog</h4>
                        <p>Tips, updates, and poolside inspiration to help you make the most of every swim and booking experience.</p>
                    </div> {/* section title */}
                </div>
            </div> {/* row */}
            <div className="row justify-content-center">
               <BlogItem 
                  blogImg={blogImg1} 
                  blogTitle="Unlimited featrues with free updates."
                  blogDate="20 December, 2023"
                  comments={20}
                  likes={15}
               />
               <BlogItem 
                  blogImg={blogImg2} 
                  blogTitle="Easy to use and customize the App."
                  blogDate="25 January, 2025"
                  comments={20}
                  likes={15}
               />
               <BlogItem 
                  blogImg={blogImg3} 
                  blogTitle="Super fast and strong security."
                  blogDate="01 February, 2026"
                  comments={5}
                  likes={55}
               />
            </div> {/* row */}
        </div> {/* container */}
    </section>
  );
};

export default Blog;