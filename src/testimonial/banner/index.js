import React from "react";
import Banner from "../../component/banner";
import Design from "../../component/design";
import testimg from "../../images/test1.png";
import Contact from "../../component/contact";
import Testimonial from "../../component/testimonial";
import testimg1 from "../../images/testiimg.png";
import cube5 from "../../images/cube5.png";
import cube1 from "../../images/cube1.png";
import cube6 from "../../images/contact1.png";

import cube4 from "../../images/cube4.png";
import cube10 from "../../images/cube10.png";
import cube8 from "../../images/cube8.png";
import cube15 from "../../images/cube15.png";
import cube16 from "../../images/cube16.png";
import cube12 from "../../images/cube12.png";
import cube3 from "../../images/cube3.png";
const testimonials = [
  {
    img: testimg1,
    para: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.",
    name: "John Doe / New York",
  },
  {
    img: testimg1,
    para: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.",
    name: "John Doe / New York",
  },
  {
    img: testimg1,
    para: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.",
    name: "John Doe / New York",
  },
  {
    img: testimg1,
    para: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.",
    name: "John Doe / New York",
  },
  {
    img: testimg1,
    para: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.",
    name: "John Doe / New York",
  },
  {
    img: testimg1,
    para: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.",
    name: "John Doe / New York",
  },
  {
    img: testimg1,
    para: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.",
    name: "John Doe / New York",
  },
  {
    img: testimg1,
    para: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.",
    name: "John Doe / New York",
  },
  {
    img: testimg1,
    para: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.",
    name: "John Doe / New York",
  },
];

export default function TestimonialBanner() {
  return (
    <>
      <div className="testimonial relative">
        <img src={cube5} alt="" className="cube5" />
        <img src={cube3} alt="" className="cube3" />
        <Banner
          img={testimg}
          heading="Testimonials"
          span2={
            <>
              Math, Physics, Biology <span className="and-text">&</span> Physics
            </>
          }
          heading2="Empowering Young Minds with"
          heading3="Classes for Grades 6th to 10th"
        />
      </div>
      <div className="testimonial-sec relative">
        <img src={cube6} alt="" className="cube6" />
        <img src={cube1} alt="" className="cube1" />
        <Design
          title={
            <>
              Digital Learning <span className="yello-text"> Design </span> is
              Our Thing
            </>
          }
          subTitle={
            <>
              Empowering Young Minds with
              <br />
              <span className="yello-text">
                Math, Physics, Biology <span className="and-text">&</span>{" "}
                Chemistry
              </span>
            </>
          }
          innerTitle="classes for Grades 6th to 10th"
          para={
            <>
              As part of our commitment to providing an exceptional learning
              experience, we are thrilled to <br /> introduce our latest
              offering: AI-Powered Mock Tests. With this innovative feature, you
              can take <br /> your learning journey to new heights and achieve
              your goals with confidence.
              <br />
              <br />
              This advanced system is designed to closely replicate the format
              and difficulty level of actual <br /> exams, enabling you to build
              familiarity and boost your confidence.
            </>
          }
        />
      </div>
      <section className="testimonial-section syllabus-sec-2">
        <img src={cube12} alt="" className="cube12" />
        <img src={cube10} alt="" className="cube10" />
        <img src={cube8} className="test-cube-15" />
        <img src={cube15} alt="" className="cube15" />
        <img src={cube16} alt="" className="cube16" />
        <img src={cube3} alt="" className="cube3" />
        <div className="container mx-auto">
          <div className="grid grid-cols-12 flex justify-between">
            {testimonials.map((item) => {
              return (
                <div className="col-span-4">
                  <div className="test-parent-area text-center relative  rounded-[30px] flex items-center justify-center h-[430px]  shadow-lg shadow-[#00000026] px-16 pt-4 pb-12 mr-4 mb-5">
                    <Testimonial
                      name={item.name}
                      para={item.para}
                      img={item.img}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
