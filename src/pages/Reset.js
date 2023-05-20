import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

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
                <CustomInput
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <CustomInput
                  name="confpassword"
                  type="password"
                  placeholder="Confirm Password"
                />
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
