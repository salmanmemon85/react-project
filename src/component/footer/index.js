import React from "react";
import footerLogo from "../../images/footer-logo.png";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container mx-auto">
          <div className="grid grid-cols-10 flex justify-center items-center ">
            <div className="col-span-10 mx-auto">
              <div className="footer-logo-area">
                <img src={footerLogo} alt="" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 flex justify-between">
            <div className="col-span-4">
              <div className="footer-phone-area">
                <a href="#">
                  <i class="fa-solid fa-phone"></i>
                  <span>+919966436693</span>{" "}
                </a>
              </div>
              <div className="footer-phone-area">
                <a href="#">
                  <i class="fa-regular fa-envelope"></i>
                  <span>admin@skillcompute.com</span>{" "}
                </a>
              </div>
              <ul className="social-list">
                <li>
                  <a href="#">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-4">
              <div className="footer-address-area">
                <div>
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p>
                    <strong>HEAD OFFICE - VISAKHAPATNAM</strong>D No :27-R,
                    B-196, Tarakarama layout, Rushikonda, ITZ , Visakhapatnam,
                    Andhra Pradesh 530045, India.{" "}
                  </p>
                </div>
              </div>
              <div className="footer-address-area">
                <div>
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p>
                    <strong>BRANCH OFFICE - KUWAIT</strong>
                    Jaber AI Mubarak, Street Block 04 Sharq district Nouf Tower
                    16th floor, Kuwait.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-3">
              <div className="footer-phone-area">
                <p>Get Directions</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d121559.06165070858!2d83.379979!3d17.80482!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395bd1e81ecb3f%3A0xc69c28d799cb3b68!2sVectority%20Solutions!5e0!3m2!1sen!2sin!4v1692982745826!5m2!1sen!2sin"
                  width="390"
                  height="200"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright-sec">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 flex">
            <div className="col-span-6 text-start">
              <p>
                Copyright 2023. <strong>SKILLCOMPUTE.</strong> All Right
                Reserved
              </p>
            </div>
            <div className="col-span-6 text-end">
              <p>
                Power By <strong>Vectority Solutions</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
