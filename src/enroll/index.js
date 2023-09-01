import React from "react";
import login from "../images/login.png";
import { Link } from "react-router-dom";
import cube2 from "../images/cube2.png";
import cube3 from "../images/cube3.png";
import cube4 from "../images/cube4.png";
import cube5 from "../images/cube5.png";
import cube7 from "../images/cube7.png";
import { Helmet } from "react-helmet";
export default function Enroll() {
  return (
    <>
     <Helmet>
      <title>SkillCompute-Enroll</title>
    </Helmet>
      <section className="enroll-sec banner">
        <img src={cube2} alt="" className="cube2" />
        <img src={cube3} alt="" className="cube3" />
        <img src={cube4} alt="" className="cube4" />
        <img src={cube5} alt="" className="cube5" />
        <img src={cube7} alt="" className="cube7" />

        <div className="container">
          <div className="grid grid-cols-12 flex justify-center">
            <div className="col-span-12">
              <form className="login-form mx-auto enroll-form">
                <h4>Enroll</h4>
                <div className="flex enroll-input-area">
                  <div className="login-input-area mt-5  flex items-center bg-white">
                    <div className="icon-contact-area">
                      <i class="fa-regular fa-user"></i>
                    </div>
                    <div className="input-area">
                      <input placeholder="Username" />
                    </div>
                  </div>
                  <div className="login-input-area mt-5  flex items-center bg-white">
                  <div className="icon-contact-area">
                    <i class="fa-regular fa-user"></i>
                  </div>
                  <div className="input-area">
                   <select>
                   <option selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                   </select>
                  </div>
                </div>
                </div>
                <div className="flex enroll-input-area">
                <div className="login-input-area mt-5  flex items-center bg-white">
                  <div className="icon-contact-area">
                  <i class="fa-regular fa-envelope"></i>
                  </div>
                  <div className="input-area">
                    <input placeholder="Parent Email" />
                  </div>
                </div>
                  <div className="login-input-area mt-5  flex items-center bg-white">
                    <div className="icon-contact-area">
                    <i class="fa-regular fa-envelope"></i>
                    </div>
                    <div className="input-area">
                      <input placeholder="Email" />
                    </div>
                  </div>
                </div>
                <div className="login-input-area mt-5  flex items-center bg-white">
                  <div className="icon-contact-area">
                    <i class="fa-regular fa-user"></i>
                  </div>
                  <div className="input-area">
                   <select >
                        <option selected>Grade</option>
                        <option value="6">6</option>
                        <option value="6">7</option>
                        <option value="6">8</option>
                        <option value="6">9</option>
                        <option value="6">10</option>
                   </select>
                  </div>
                </div>
                <div className="login-input-area mt-5  flex items-center bg-white">
                  <div className="icon-contact-area">
                  <i class="fa-regular fa-envelope"></i>
                  </div>
                  <div className="input-area">
                    <input placeholder="Address" />
                  </div>
                </div>
                <div class="inner-btn-area skil-btn">
                  <div class="inner-text-btn">Submit</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
