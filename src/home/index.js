import React from "react";
import Banner from "./banner";
import Section from "./skillCompute";
import Section2 from "./learningDesign";
import Section4 from "./alPower";
import Contact from "../component/contact";
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
    <div>
      <Helmet>
        <title>SkillCompute-Home</title>
      </Helmet>
    </div>
      <Banner />
      <Section />
      <Section2 />
      <Section4 />
      <Contact />
    </>
  );
}
