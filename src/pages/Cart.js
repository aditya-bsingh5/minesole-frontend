import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div class="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1 bg-transparent">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quanity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img src={watch} className="img-fluid" alt="prod-img" />
                  </div>
                  <div className="w-75">
                    <p>Mine Sole Gloss Finish Party Ballerinas - Gold</p>
                    <p>Size: 2.5-3.5YRS</p>
                    <p>Color: Yellow</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">₹ 2800</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center justify-content-between gap-15">
                  <div className="w-75">
                    <input
                      className="form-control"
                      min={1}
                      max={10}
                      type="number"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="w-25">
                    <AiFillDelete className="text-danger fs-10" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">₹ 2800</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <Link to="/store" className="button">
                Continue Shopping
              </Link>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex flex-column align-items-end justify-content-end">
                <h4>SubTotal: ₹ 2800</h4>
                <p>Takes and Shipping calculared at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
