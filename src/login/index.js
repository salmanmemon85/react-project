import React, { useState } from "react";

import login1 from "../images/login1.png";
import login2 from "../images/contact1.png";
import cube3 from "../images/cube3.png";
import cube1 from "../images/cube1.png";
import Student from "./component/student";
import Parents from "./component/parents";
import Institution from "./component/institution";
import { Link, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Login() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    if (activeComponent === "student") {
      return <Student />;
    }
   else if (activeComponent === "institution") {
      return <Institution />;
    }
    return <Student />;
  };
  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };
  return (
    <>
     <Helmet>
      <title>SkillCompute-Login</title>
      </Helmet>
      <section className="login-sec">
        <img src={login2} alt="" className="login2" />
        <img src={cube3} alt="" className="login3" />
        <img src={cube1} alt="" className="login4" />
        <div className="container mx-auto">
          <img src={login1} alt="" className="login1" />
          <div className="grid grid-cols-12 flex justify-center">
            <div className="col-span-4">
              <h2>welcome to</h2>
              <h3>SkillCompute</h3>
              <div className="login-area">
        <div
          className={`contact-btn flex items-center justify-between ${activeComponent === "student" ? "active" : ""}`}
          onClick={() => handleButtonClick("student")}
        >
          <div className="inner-text-btn">Student</div>
          <div className="arrow-icon-area">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div
          className={`contact-btn parent flex items-center justify-between ${activeComponent === "institution" ? "active" : ""}`}
          onClick={() => handleButtonClick("institution")}
        >
          <div className="inner-text-btn">Institution</div>
          <div className="arrow-icon-area">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
            </div>
            <div className="col-span-6">{renderComponent()}</div>
          </div>
        </div>
      </section>
    </>
  );
}
