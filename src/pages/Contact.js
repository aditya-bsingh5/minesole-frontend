import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { BiHome, BiMailSend, BiPhoneCall, BiInfoCircle } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9726840106464!2d72.9926362739438!3d19.064938582137337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c14ce47c9a5b%3A0x1f27c388cc78551f!2sVashi%20Infotech%20Park%2C%20Sector%2030%2C%20Vashi%2C%20Navi%20Mumbai%2C%20Maharashtra%20400703!5e0!3m2!1sen!2sin!4v1683561188059!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact Us</h3>
                  <form action="" className="d-flex gap-15 flex-column">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
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
                    <div>
                      <button className="button border-0"> Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiHome className="contact-logos fs-5" />
                        <address className="mb-0">
                          811, vashi infotech park, vashi, Navi mumbai,
                          Maharashtra
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="contact-logos fs-5" />
                        <a href="tel:+91 9820820067">+91-9820820067</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiMailSend className="contact-logos fs-5" />
                        <a href="mailto:sales@minesole.com">
                          sales@minesole.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="contact-logos fs-5" />
                        <p>
                          Monday - Saturday <br /> 10AM - 8PM
                        </p>
                      </li>
                    </ul>
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

export default Contact;
