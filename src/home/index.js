import React from "react";
import Banner from "./banner";
import Section from "./section";
import Section2 from "./section-2";
import Section4 from "./section-4";
import Contact from "../component/contact";

export default function Home() {
  return (
    <>
      <Banner />
      <Section />
      <Section2 />
      <Section4 />
      <Contact />
    </>
  );
}
