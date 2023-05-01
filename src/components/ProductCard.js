import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlish-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img
            src="images/watch.jpg"
            className="img-fluid"
            alt="product card img"
          />
          <img
            src="images/watch-01.jpg"
            className="img-fluid"
            alt="product card img"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">Minesole</h6>
          <h4 className="product-title">Sandal for comfort and rejuve.</h4>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">₹19,000</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="compare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="addcart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
