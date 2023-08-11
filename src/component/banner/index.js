import React from 'react'
// import about1 from "../../images/about1.png" 
export default function Banner({img, heading, span, heading2, span2, heading3}) {
  return (
    <section className='banner'>
    <div className='container mx-auto'>
        <div className='grid grid-cols-12 flex justify-between'>
            <div className='col-span-6'>
            <div className=" relative z-[999] ">
              <h1 className="primary-hd space-bottom">{heading} <span className="yello-text">{span}</span></h1>
              <h2 className="primary-hd light-hd space-bottom">{heading2} <br/>
              <span  className="yello-text">{span2}</span></h2>
              <h2 className="primary-hd light-hd space-bottom">
             {heading3}</h2>
           </div>
            </div>
            <div className='col-span-6'>
                <div className='about-banner-area'>
                    <img src={img} alt=''/>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}
