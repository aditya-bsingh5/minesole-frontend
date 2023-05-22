import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>Shoes for Kids</h4>
                <h5>By the $$$$$$$$$$$</h5>
                <p>Starting From ₹499</p>
                <Link className="button"> BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative p-3">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>By the $$$$$$$$$$$$</h5>
                  <p>Starting From ₹599</p>
                </div>
              </div>
              <div className="small-banner position-relative p-3">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival</h4>
                  <h5>The Way It Is</h5>
                  <p>Starting From ₹1499</p>
                </div>
              </div>
              <div className="small-banner position-relative p-3">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>15% OFF</h4>
                  <h5>Use code HOLI420</h5>
                  <p>Starting From ₹1299</p>
                </div>
              </div>
              <div className="small-banner position-relative p-3">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Free Engraving</h4>
                  <h5>EXPENSIVE!!!</h5>
                  <p>
                    High-fidelity traction
                    <br />
                    shoes for your tots.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex justify-content-evenly align-items-center">
                <div>
                  <h6>Sandals</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="sandals" />
              </div>
              <div className="d-flex justify-content-evenly align-items-center">
                <div>
                  <h6>Chapal</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="sandals" />
              </div>
              <div className="d-flex justify-content-evenly align-items-center">
                <div>
                  <h6>Ballerinas</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="sandals" />
              </div>
              <div className="d-flex justify-content-evenly align-items-center">
                <div>
                  <h6>Shoes</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="sandals" />
              </div>
              <div className="d-flex justify-content-evenly align-items-center">
                <div>
                  <h6>Sandals</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="sandals" />
              </div>
              <div className="d-flex justify-content-evenly align-items-center">
                <div>
                  <h6>Chapal</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="sandals" />
              </div>
              <div className="d-flex justify-content-evenly align-items-center">
                <div>
                  <h6>Ballerinas</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="sandals" />
              </div>
              <div className="d-flex justify-content-evenly align-items-center">
                <div>
                  <h6>Shoes</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="sandals" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrappper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="popular-wrappper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="blog-wrappper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Blogs</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>
      <Container class1="marquee-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
