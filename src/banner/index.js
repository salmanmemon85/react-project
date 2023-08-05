import '../index.css';
import secImg from "../images/sec-img.png"
import { useState } from 'react';
function Banner() {
    const [active, setActive] = useState(false)
    const openDropDown = () => {
        setActive(!active)
    }
  return (
    <>
     <section className="banner">
      <div className="container mx-auto">
         <div className="grid grid-col-10 justify-center items-center">
            <div className="col-span-10 ">
               <div className="text-center relative z-[999]">
                  <h1 className="primary-hd space-bottom">Unleash the <span className="yello-text">Potential</span>  Within!</h1>
                  <h2 className="primary-hd light-hd space-bottom">Empowering Young Minds with <br/>
                  <span  className="yello-text"> Math, Physics, Biology & Physics</span></h2>
                  <h4 className="primary-hd small-size space-bottom">classes for Grades 6th to 10th</h4>
                  <div className="main-banner-login-area">
                  <div className="login-banner-btn flex justify-between items-center">
                     <div>
                        <span>Login as a Student</span>
                     </div>
                     <div className="arrow-icon-area">
                        <i className="fa-solid fa-arrow-right"></i>
                     </div>
                  </div>
                  <div className="banner-btn-area flex justify-between">
                     <div className="inner-btn-area">
                        <div className='inner-text-btn'>
                           For School
                        </div>
                        <div className="arrow-icon-area">
                           <i className="fa-solid fa-arrow-right"></i>
                        </div>

                     </div>
                     <div className="inner-btn-area">
                        <div className='inner-text-btn'>
                           For Parents
                        </div>
                        <div className="arrow-icon-area">
                           <i className="fa-solid fa-arrow-right"></i>
                        </div>

                     </div>
                  </div>
                 
         </div>
               </div>
            </div>
         </div>

      </div>

   </section>
<section className='img-sec'>
<div className='sec-img-area'>
    <img src={secImg} alt="" className='sec-img'/>
    </div>
</section>
</>
  );
}

export default Banner;
