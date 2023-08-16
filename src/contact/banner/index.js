import React from 'react'
import Contact from '../../home/contact'
import cube5 from "../../images/cube5.png"
import cube3 from "../../images/cube3.png"
import cube6 from "../../images/contact1.png"
import cube1 from "../../images/cube1.png"
import cube7 from "../../images/cube7.png"
import cube10 from "../../images/cube10.png"
import cube12 from "../../images/cube12.png"

export default function ContactBanner() {
  return (
    <>
    <section className="syllabus-banner contact-banner">
    <img src={cube5} alt='' className='cube5'/>
    <img src={cube3} alt='' className='cube3'/>
   

        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 text-center">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
      </section>
      <section className='contact-sec relative'>
      <img src={cube6} alt='' className='cube6'/>
      <img src={cube1} alt='' className='cube1'/>
      <img src={cube7} alt='' className='cube7'/>
      <img src={cube10} className='cube10'/>
      <img src={cube12} alt="" className="cube12" />
          <div className='container mx-auto'>
            <div className=' flex justify-center items-center'>
              <div className='col-spna-12 text-center'>
                 <h1 className="primary-hd space-bottom">Get <span className="yello-text">Help</span>  as a</h1>
                 <div className='flex justify-center'>
                    <div className='contact-btn flex items-center justify-between bg-blue '>
                      <div className="inner-text-btn ">Student</div>
                      <div className="arrow-icon-area">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                    <div className='contact-btn parent flex items-center justify-between'>
                      <div className="inner-text-btn ">Parent</div>
                      <div className="arrow-icon-area">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                 </div>
                 <div className='contact-btn instituion flex items-center justify-between'>
                      <div className="inner-text-btn ">Institution</div>
                      <div className="arrow-icon-area">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
              </div>
            </div>
          </div>
      </section>
      <div className='contact-sec-area'>
      <Contact/>
      </div>
      </>
  )
}
