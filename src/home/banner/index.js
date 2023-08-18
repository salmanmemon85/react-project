import "../../index.css";
import secImg from "../../images/sec-img.png";
import cube1 from "../../images/cube1.png";
import cube2 from "../../images/cube2.png";
import cube3 from "../../images/cube3.png";
import cube4 from "../../images/cube4.png";
import cube5 from "../../images/cube5.png";
import cube6 from "../../images/cube6.png";
import cube7 from "../../images/cube7.png";

import { useState } from "react";

function Banner() {
  const [active, setActive] = useState(false);
  const openDropDown = () => {
    setActive(!active);
  };
  return (
    <>
      <section className="banner">
        <img src={cube1} alt="" className="cube1" />
        <img src={cube2} alt="" className="cube2" />
        <img src={cube3} alt="" className="cube3" />
        <img src={cube4} alt="" className="cube4" />
        <img src={cube5} alt="" className="cube5" />
        <img src={cube6} alt="" className="cube6" />
        <img src={cube7} alt="" className="cube7" />

        <div className="container mx-auto">
          <div className="grid grid-col-12 justify-center items-center banner-row">
            <div className="col-span-12 ">
              <div className="text-center relative z-[999] banner-section-content-area">
                <h1 className="primary-hd space-bottom">
                  Unleash the <span className="yello-text">Potential</span>{" "}
                  Within!
                </h1>
                <h2 className="primary-hd light-hd space-bottom">
                  Empowering Young Minds with <br />
                  <span className="yello-text">
                    {" "}
                    Math, Physics, Biology <span className="and-text">
                      &
                    </span>{" "}
                    Chemistry
                  </span>
                </h2>
                <h4 className="primary-hd small-size space-bottom banner-hd-classes">
                  classes for Grades 6th to 10th
                </h4>
                <h5 className="primary-hd small-size ">
                 Login
                </h5>
                <div className="main-banner-login-area">
                  <div className="login-banner-btn flex justify-between items-center">
                    <div>
                      <span> As a Student</span>
                    </div>
                    <div className="arrow-icon-area">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                  <div className="banner-btn-area flex justify-between">
                    <div className="inner-btn-area">
                      <div className="inner-text-btn"> As a Parent</div>
                      <div className="arrow-icon-area">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                    <div className="inner-btn-area">
                      <div className="inner-text-btn">
                         As an Institution
                      </div>
                      <div className="arrow-icon-area">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="img-sec">
        <div className="sec-img-area">
          <img src={secImg} alt="" className="sec-img" />
        </div>
      </section>
    </>
  );
}

export default Banner;
