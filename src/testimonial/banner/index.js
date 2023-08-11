import React from 'react'
import Banner from '../../component/banner'
import Design from '../../component/design'
import testimg from "../../images/test1.png"
export default function TestimonialBanner() {
  return (
    <>
    <Banner img={testimg}
    heading="Testimonials"
    span2="Math, Physics, Biology & Physics"
    heading2="Empowering Young Minds with" 
    heading3="Classes for Grades 6th to 10th"/>
    <div className='testimonial-sec'>
    <Design
    title={<>Digital Learning <span className="yello-text"> Design </span> is Our Thing</>}
    subTitle={<>
    Empowering Young Minds with<br/>
    <span className="yello-text">
        Math, Physics, Biology & Physics
    </span>
    </>}
    innerTitle="classes for Grades 6th to 10th"
    para={<>
      As part of our commitment to providing an exceptional learning experience, we are thrilled  to <br/> introduce our latest offering: AI-Powered Mock Tests. With this innovative feature, you can take <br/> your learning journey to new heights and achieve your goals with confidence.
                    <br/><br/>
                    This advanced system is designed to closely replicate the format and difficulty level of actual <br/> exams, enabling you to build familiarity and boost your confidence.
    </>}
    />
    </div>
    </>
  )
}
