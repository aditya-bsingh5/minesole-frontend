import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Marquee from "react-fast-marquee";
import Color from "../components/Color";
import { TbGitCompare, TbHeartPlus } from "react-icons/tb";
import { BsTruck, BsShare, BsBalloonHeart } from "react-icons/bs";
import Container from "../components/Container";

const Product = () => {
  const props = {
    width: 600,
    height: 500,
    zoomWidth: 600,
    offset: { vertical: 0, horizontal: 10 },
    // scale: 0.5,
    // zoomPosition: "original",
    img: "https://cdn.fcglcdn.com/brainbees/images/products/zoom/13182798b.jpg",
  };
  const [orderedProduct] = useState(true); //setorderedProduct
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title="Dynamic Product Name" />
      <BreadCrumb title="Dynamic Product Name" />
      <Container class1="main-product-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image d-flex justify-content-center">
              <ReactImageZoom {...props} />
            </div>
            <div className="other-product-images d-flex justify-content-center flex-wrap gap-15 mt-2">
              <div>
                <img
                  src="https://cdn.fcglcdn.com/brainbees/images/products/zoom/13182798c.jpg"
                  alt="alt-img"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://cdn.fcglcdn.com/brainbees/images/products/zoom/13182798d.jpg"
                  alt="alt-img"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://cdn.fcglcdn.com/brainbees/images/products/zoom/13182798e.jpg"
                  alt="alt-img"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://cdn.fcglcdn.com/brainbees/images/products/zoom/13182798sz.jpg"
                  alt="alt-img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Mine Sole Gloss Finish Party Ballerinas - Gold
                </h3>
              </div>
              <div className="border-bottom py-4">
                <p className="price">₹ 2800</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 2 reviews )</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className="specification border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type:</h3>
                  <p className="product-data">Ballerinas</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability:</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Size Basis:</h3>
                  <p className="product-data">AGE</p>
                </div>
                <div className="d-flex gap-10 flex-columns mt-2 mb-3">
                  <h3 className="product-heading">Size:</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      2.5-3.5YRS
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      2.5-3.5YRS
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      2.5-3.5YRS
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      2.5-3.5YRS
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      2.5-3.5YRS
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-columns mt-2 mb-3">
                  <h3 className="product-heading">Color:</h3>
                  <Color />
                </div>
                <div className="d-flex gap-15 flex-row align-items-center mt-2 mb-3">
                  <h3 className="product-heading">Quantity:</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "100px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0" type="submit">
                      ADD TO CART
                    </button>
                    <button to="/signup" className="button buy-now-btn">
                      BUY NOW
                    </button>
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <a href="/">
                      <TbGitCompare className="fs-5 me-2" /> Add To Compare
                    </a>
                    <br />
                    <a href="/">
                      <TbHeartPlus className="fs-5 me-2" />
                      Add To Wishlist
                    </a>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="product-marquee border-bottom">
                <Marquee className="d-flex">
                  <div className="coupon-marquee">
                    <span>USE COUPON HOLI10 FOR 10% DISCOUNT</span>
                  </div>
                </Marquee>
              </div>
              <div className="specification py-3">
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">
                    <BsTruck className="fs-5 me-2" />
                    Shipping & Returns:
                  </h3>
                  <p className="product-data">
                    Free Shipping on all orders! <br />
                    Currently working on return policy.
                  </p>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">
                    <BsShare className="fs-5 me-2" />
                    Share Product Link:
                  </h3>
                  <button
                    href=""
                    onClick={() => {
                      copyToClipboard(
                        "https://cdn.fcglcdn.com/brainbees/images/products/zoom/13182798b.jpg"
                      );
                    }}
                  >
                    COPY TO CLIPBOARD
                  </button>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">
                    <BsBalloonHeart className="fs-5 me-2" />
                    Care Instructions
                  </h3>
                  <p className="product-data">
                    Use a soft cloth and drop of mild soap. <br />
                    Gently polish. Air dry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat voluptatem atque qui voluptas ipsa molestiae facilis,
                unde corporis quos praesentium maxime nisi cupiditate libero a
                ipsam quis commodi ex consequuntur!
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container id="review" class1="reviews-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3>Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="/">
                      {/* Write a Review */}
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>
                <form action="" className="d-flex gap-15 flex-column">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value="0"
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="form-control w-100"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-3">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Rahul Sharma</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                </div>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur ab deserunt molestias qui rem omnis porro, assumenda
                  dolor dolore commodi. Ducimus sequi repudiandae eligendi quas
                  neque aliquam velit explicabo numquam.
                </p>
              </div>
            </div>
          </div>
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
    </>
  );
};

export default Product;
