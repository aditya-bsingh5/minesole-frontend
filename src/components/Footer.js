import React from "react";
import { Link } from "react-router-dom";
import {
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsPinterest,
  BsLinkedin,
} from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter"></img>
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-3">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  811, Infotech Park, <br />
                  Sector - 30, Vashi, <br />
                  Navi Mumbai, <br />
                  Maharashtra - 400708. <br />
                </address>
                <a
                  href="tel: +91 9820820567"
                  className="mt-3 d-block mb-2 text-white"
                >
                  +91 9820820567
                </a>
                <a
                  href="mailto: sales@minesole.com"
                  className="mt-3 d-block mb-2 text-white"
                >
                  sales@minesole.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30">
                  <a href="">
                    <BsInstagram className="text-white fs-6" />
                  </a>
                  <a href="">
                    <BsFacebook className="text-white fs-6" />
                  </a>
                  <a href="">
                    <BsPinterest className="text-white fs-6" />
                  </a>
                  <a href="">
                    <BsTwitter className="text-white fs-6" />
                  </a>
                  <a href="">
                    <BsLinkedin className="text-white fs-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-3">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms Of Service</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-3">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-3">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Ballerina</Link>
                <Link className="text-white py-2 mb-1">Shoes</Link>
                <Link className="text-white py-2 mb-1">Sandals</Link>
                <Link className="text-white py-2 mb-1">Boots</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Broccoli Org.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
