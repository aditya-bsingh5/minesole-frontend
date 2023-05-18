import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Reset = () => {
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title="Reset Password" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-30">
                <div className="mt-1">
                  <input
                    name="password"
                    type="password"
                    placeholder="New Password"
                    className="form-control"
                  />
                </div>
                <div className="mt-1">
                  <input
                    name="confpassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                  />
                </div>

                <div>
                  <div className="tm-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Complete</button>
                    <Link to="/login">Go Back</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Reset;
