import React from 'react'
import AboutBanner from "./banner";
import { Helmet } from 'react-helmet';

export default function About() {
  return (
   <>
     <div>
      <Helmet>
        <title>SkillCompute-About</title>
      </Helmet>
    </div>
   <AboutBanner/>
   </>
  )
}
