import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const TermsAndCond = () => {
  return (
    <>
      <Meta title="Terms & Conditions" />
      <BreadCrumb title="Terms & Conditions" />
      <sections className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </sections>
    </>
  );
};

export default TermsAndCond;
