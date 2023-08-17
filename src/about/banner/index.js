import React from "react";
import Contact from "../../component/contact";
import about1 from "../../images/about1.png";
import about2 from "../../images/about2.png";
import about3 from "../../images/about3.png";
import Banner from "../../component/banner";
import cube5 from "../../images/cube5.png";
import cube1 from "../../images/cube1.png";
import cube4 from "../../images/cube4.png";
import cube3 from "../../images/cube3.png";
import cube6 from "../../images/contact1.png";
import cube12 from "../../images/cube12.png";
import cube16 from "../../images/cube16.png";

export default function AboutBanner() {
  return (
    <>
      <div className="about-main-banner relative">
        <img src={cube1} alt="" className="cube1" />
        <img src={cube5} alt="" className="cube5" />
        <img src={cube4} alt="" className="cube4" />
        <img src={cube3} alt="" className="cube3" />

        <Banner
          img={about1}
          heading="About"
          span="Us"
          span2="Every Child"
          heading2="Special Attention For"
        />
      </div>
      <section className="about-sec-1">
        <img src={cube6} alt="" className="cube6" />

        <div className="container mx-auto">
          <div className="grid grid-cols-12 flex justify-between items-center">
            <div className="col-span-6">
              <img src={about2} alt="" />
            </div>
            <div className="col-span-6">
              <div className="about-content-area relative z-[999]">
                <h1 className="primary-hd space-bottom">
                  Unlock Your Potential with
                  <span className="yello-text"> SkillCompute</span>
                </h1>
                <p className="para black">
                  As part of our commitment to providing an exceptional learning
                  experience, we are thrilled to introduce our latest offering:
                  AI-Powered Mock Tests. With this innovative feature, you can
                  take your learning journey to new heights and achieve your
                  goals with confidence.
                  <br />
                  <br />
                  This advanced system is designed to closely replicate the
                  format and difficulty level of actual exams, enabling you to
                  build familiarity and boost your confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-img-sec">
        <img src={about3} alt="" />
      </section>
      <section className="about-sec relative">
        <img src={cube12} alt="" className="cube12" />
        <img src={cube5} alt="" className="cube5" />
        <img src={cube3} alt="" className="cube3" />
        <img src={cube16} alt="" className="cube16" />

        <div className="container mx-auto">
          <div className="grid grid-cols-10 flex justify-center">
            <div className="col-span-10">
              <div className="text-center relative z-[999] ">
                <h1 className="primary-hd space-bottom">
                  Digital Learning <span className="yello-text">Design</span> is
                  Our Thing
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
                <p className="para black">
                  As part of our commitment to providing an exceptional learning
                  experience, we are thrilled to <br /> introduce our latest
                  offering: AI-Powered Mock Tests. With this innovative feature,
                  you can take <br /> your learning journey to new heights and
                  achieve your goals with confidence.
                  <br />
                  <br />
                  This advanced system is designed to closely replicate the
                  format and difficulty level of actual <br /> exams, enabling
                  you to build familiarity and boost your confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
