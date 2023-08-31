import React from "react";
import Contact from "../../component/contact";
import syllbus1 from "../../images/syllabus1.png";
import syllbus2 from "../../images/syllabus2.png";
import syllbus3 from "../../images/syllabus3.png";
import syllbus4 from "../../images/sylllabus3.png";
import cube6 from "../../images/contact1.png";
import cube1 from "../../images/cube1.png";
import cube10 from "../../images/cube10.png";
import cube8 from "../../images/cube8.png";
import cube15 from "../../images/cube15.png";
import cube16 from "../../images/cube16.png";
import cube12 from "../../images/cube12.png";
import cube3 from "../../images/cube3.png";
import { Link } from "react-router-dom";

export default function SyllabusBanner() {
  return (
    <>
      <section className="syllabus-bg relative">
        <img src={cube6} alt="" className="cube6" />
        <img src={cube1} alt="" className="cube1" />
        <div className="container mx-auto">
        <div className="grid grid-cols-12">
            <div className="col-span-12 text-center">
              <h2 className="primary-hd syllabus-hd">Syllabus</h2>
            </div>
          </div>
          <div className="grid grid-cols-10 flex justify-center">
            <div className="col-span-10">
              <div className="text-center relative z-[999] ">
                <h1 className="primary-hd space-bottom">  Digital Learning <span className="yello-text"> Design </span> is
              Our Thing</h1>
                <h2 className="primary-hd light-hd space-bottom">
                Empowering Young Minds with
              <br />
              <span className="yello-text">
                Math, Physics, Biology <span className="and-text">&</span>{" "}
                Physics
              </span>
                </h2>
                <h4 className="primary-hd small-size space-bottom banner-hd-classes">
                classes for Grades 6th to 10th
                </h4>
                <p className="para black">  As part of our commitment to providing an exceptional learning
              experience, we are thrilled to <br /> introduce our latest
              offering: AI-Powered Mock Tests. With this innovative feature, you
              can take <br /> your learning journey to new heights and achieve
              your goals with confidence.
              <br />
              <br />
              This advanced system is designed to closely replicate the format
              and difficulty level of actual <br /> exams, enabling you to build
              familiarity and boost your confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="syllabus-sec-2">
        <img src={cube12} alt="" className="cube12" />
        <img src={cube10} alt="" className="cube10" />
        <img src={cube8} className="cube8" />
        <img src={cube15} alt="" className="cube15" />
        <img src={cube16} alt="" className="cube16" />
        <img src={cube3} alt="" className="cube3" />

        <div className="container mx-auto">
          <div className="grid grid-cols-10 flex items-center justify-center mb-5">
            <div className="col-span-5">
            <Link to="./physic">
              <div className="text-center syllbus-content-area">
              <div className="syllabus-img syllabus-1">
                <img src={syllbus2} alt="" />
                </div>
                <div className="syllbus-hd-area physic">
                  <h3 className="primary-hd light-hd">
                    <span className="yello-text">PHYSICS</span>{" "}
                  </h3>
                  <p className="para black">
                    An engaging and detailed physics eLearning curriculum that
                    uses compelling multimedia content and real-time simulations
                    to simplify complicated ideas.
                  </p>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-span-5">
            <Link to="./math">
              <div className="text-center syllbus-content-area">
              <div className="syllabus-img">
                <img src={syllbus4} alt="" />
                </div>
                <div className=" syllbus-hd-area">
                  <h3 className="primary-hd light-hd">
                    <span className="yello-text">MATHS</span>{" "}
                  </h3>
                  <p className="para black">
                    Lessons designed to teach core arithmetic skills and
                    problem-solving abilities through interactive and
                    interesting eLearning.{" "}
                  </p>
                </div>
              </div>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-10 flex items-center justify-center">
            <div className="col-span-5">
              <Link to="./biology">
              <div className="text-center syllbus-content-area">
              <div className="syllabus-img syllabus-3">
                <img src={syllbus3} alt="" />
                </div>
                <div className="  syllbus-hd-area">
                  <h3 className="primary-hd light-hd">
                    <span className="yello-text">BIOLOGY</span>{" "}
                  </h3>
                  <p className="para black">
                    Explore the amazing world of living beings and their
                    interactions with our eLearning application's interactive
                    courses and compelling multimedia.{" "}
                  </p>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-span-5">
            <Link to="./chemistry">
              <div className="text-center syllbus-content-area">
                <div className="syllabus-img">
                <img src={syllbus1} alt="" />
                </div>
                <div className=" syllbus-hd-area">
                  <h3 className="primary-hd light-hd">
                    <span className="yello-text">CHEMISTRY</span>{" "}
                  </h3>
                  <p className="para black">
                    Discover the fascinating realm of atoms, reactions, and
                    molecules with our eLearning application's interactive
                    courses and simulations.{" "}
                  </p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
