import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";

const CompareProduct = () => {
  return (
    <>
      <Meta title="Product Comparison" />
      <BreadCrumb title="Product Comparison" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="cross position-absolute"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">Chapal</h5>
                  <h6 className="price mb-2">₹ 1,550</h6>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <p>S M L</p>
                  </div>
                </div>
              </div>
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="cross position-absolute"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">Chapal</h5>
                  <h6 className="price mb-2">₹ 1,550</h6>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <p>S M L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
