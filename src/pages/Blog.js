import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Blog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="blog-page">
                <h3 className="title pb-4">Rural in Disco</h3>
                <p className="float-left">
                  <img
                    src="/images/blog-1.jpg"
                    className="img-fluid"
                    alt="blogimg"
                  />
                </p>
                <p className="mt-4 pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus sequi vel sunt totam? Ullam, vitae necessitatibus
                  aspernatur quod quos enim nam nisi ratione eius molestiae,
                  modi cupiditate id provident amet consectetur adipisicing
                  elit. Voluptatibus sequi vel sunt totam? Ullam, vitae
                  necessitatibus aspernatur quod quos enim nam nisi ratione eius
                  molestiae, modi cupiditate id provident amet consectetur
                  adipisicing elit. Voluptatibus sequi vel sunt totam? Ullam,
                  vitae necessitatibus aspernatur quod quos enim nam nisi
                  ratione eius molestiae, modi cupiditate id provident amet
                  consectetur adipisicing elit. Voluptatibus sequi vel sunt
                  totam? Ullam, vitae necessitatibus aspernatur quod quos enim
                  nam nisi ratione eius molestiae, modi cupiditate id provident
                  quasi?
                </p>
                <Link className="d-flex align-items-center gap-10" to="/blogs">
                  <BsFillArrowLeftCircleFill />
                  Go Back To Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
