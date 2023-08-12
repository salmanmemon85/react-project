import React from 'react'
import Banner from '../../component/banner'
import Design from '../../component/design'
import testimg from "../../images/test1.png"
import Testimonial from '../../component/testimonial'
import testimg1 from "../../images/testiimg.png"
const testimonials = [
  {
    img: testimg1,
    para: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.",
    name: "John Doe / New York"
  },
  {
    img: testimg1,
    para: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.",
    name: "John Doe / New York"
  },
  {
    img: testimg1,
    para: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.",
    name: "John Doe / New York"
  },
  {
    img: testimg1,
    para: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.",
    name: "John Doe / New York"
  },
  {
    img: testimg1,
    para: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.",
    name: "John Doe / New York"
  },
  {
    img: testimg1,
    para: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.",
    name: "John Doe / New York"
  },
  {
    img: testimg1,
    para: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.",
    name: "John Doe / New York"
  },
  {
    img: testimg1,
    para: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.",
    name: "John Doe / New York"
  },
  {
    img: testimg1,
    para: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author.",
    name: "John Doe / New York"
  }

]

export default function TestimonialBanner() {
  return (
    <>
    <div className='testimonial'>
      <Banner img={testimg}
      heading="Testimonials"
      span2="Math, Physics, Biology & Physics"
      heading2="Empowering Young Minds with" 
      heading3="Classes for Grades 6th to 10th"/>
      </div>
    <div className='testimonial-sec'>
  
    <Design
    title={<>Digital Learning <span className="yello-text"> Design </span> is Our Thing</>}
    subTitle={<>
    Empowering Young Minds with<br/>
    <span className="yello-text">
        Math, Physics, Biology & Chemistry
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
    <section className='testimonial-section'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-12 flex justify-between'>
                  {testimonials.map((item) => {
                    return (
                      <div className='col-span-4'>
                        <div className='test-parent-area text-center relative  rounded-[30px] flex items-center justify-center h-[430px]  shadow-lg shadow-[#00000026] px-16 pt-4 pb-12 mr-4 mb-5'>
                      <Testimonial name={item.name} para={item.para} img={item.img} />
                      </div>
                     </div>
                    )
                  })}

                </div>
            </div>
        </section>
    
    </>
  )
}
