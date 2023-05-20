import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Signup = () => {
  return (
    <>
      <Meta title="Sign Up" />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-30">
                <CustomInput name="name" type="text" placeholder="Name" />
                <CustomInput name="email" type="text" placeholder="Email" />
                <CustomInput
                  name="mobile"
                  type="tel"
                  placeholder="Mobile Number"
                />
                <CustomInput
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <div>
                  <div className="tm-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Register</button>
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

export default Signup;
