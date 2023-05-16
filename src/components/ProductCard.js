import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-01.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={` ${
          location.pathname == "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlish-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product card img" />
            <img src={watch2} className="img-fluid" alt="product card img" />
          </div>
          <div className="product-details">
            <h6 className="brand">XYZ</h6>
            <h4 className="product-title">Sandal for comfort and rejuve.</h4>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={` description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo non
              sit inventore rem numquam laborum voluptatem quia iste. Qui
              accusamus totam sit ab sapiente quibusdam architecto. Corporis,
              expedita! Numquam, architecto.
            </p>
            <p className="price">₹19,000</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodcompare} alt="compare" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addcart} alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
