import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import watch from "../images/watch-01.jpg";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name"> Minesole</h3>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">First Name (Email Adress)</p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex flex-wrap gap-10 justify-content-around"
              >
                <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    placeholder="First Name"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    placeholder="First Name"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    placeholder="Address Line 1"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    placeholder="Address Line 2"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select
                    placeholder="City"
                    name=""
                    className="form-control form-select"
                    id=""
                  >
                    <option value="" selected disabled>
                      Select City
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    placeholder="Zip Code"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex gap-30 justify-content-between align-items-center mt-4">
                    <Link className="text-danger" to="/cart">
                      <BsFillArrowLeftCircleFill className="fs-5 me-2" />
                      RETURN TO CART
                    </Link>
                    <Link className="button text-success" to="/shipping">
                      CONTINUE TO SHIPPING
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-5px", right: "2px" }}
                      className="badge bg-secondary text-white  position-absolute p-2"
                    >
                      1
                    </span>
                    <img className="img-fluid" src={watch} alt="prod-img" />
                  </div>
                  <div>
                    <p className="total-price">
                      Mine Sole Gloss Finish Party Ballerinas - Gold
                    </p>
                    <p className="total-price">Size: 2.5-3.5YRS</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">₹ 2800</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Subtotal</p>
                <p className="mb-0 total-price">₹ 2800</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">₹ 28</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">₹ 2828</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
