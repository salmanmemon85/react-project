import React from "react";
import footerLogo from "../../images/footer-logo.png";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container mx-auto">
          <div className="grid grid-cols-10 flex justify-center items-center ">
            <div className="col-span-10 mx-auto">
              <img src={footerLogo} />
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
            <div className="col-span-3">
              <div className="footer-address-area">
                <div>
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p>
                    <strong>HEAD OFFICE - VISAKHAPATNAM</strong>D No :27-R,
                    B-196, Tarakarama layout, Rushikonda, IT Surge,
                    Visakhapatnam, Andhra Pradesh 530045, India.{" "}
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
            <div className="col-span-2"></div>
            <div className="col-span-3">
              <div className="footer-phone-area">
                <p>Get Directions</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13026967.38926922!2d-106.25428513633595!3d37.142902825634486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1691191688164!5m2!1sen!2s"
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
        <p>Copyright 2023. SKILLCOMPUTE. All Right Reserved</p>
      </div>
    </>
  );
}
