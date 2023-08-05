import React, { useState } from 'react';
import '../index.css';
import img3 from "../images/img3.png"


function Contact() {
        const [activeButton, setActiveButton] = useState(null);
      
        const handleButtonClick = (buttonIndex) => {
          setActiveButton((prevActiveButton) =>
            prevActiveButton === buttonIndex ? null : buttonIndex
          );
        }
return (
<>
<section className="contact" >
   <div className="container mx-auto">
      <div className='grid grid-cols-12 flex justify-between  relative'>
          <div className='col-span-6'>
            
            <div className='contact-hd-area'>
                <h3>Unlock the door <br/>
                to boundless </h3>
                <h4>knowledge with our <span className='yello-text'>FAQ's</span> </h4>
                <p className='para white'>
                Where we address your most burning questions, <br/>
                illuminate the path to learning mastery, and turn  <br/>
                curiosity into expertise!"
                </p>
                </div>
                <div className="inner-btn-area w-100 mb-4">
                        <div className='inner-text-btn '>
                        Lorem Ipsum Dummy Text?
                        </div>
                        <div className="arrow-icon-area">
                        <i class="fa-solid fa-arrow-down"></i>
                        </div>
                     </div>
                     <div className="inner-btn-area w-100  mb-4">
                        <div className='inner-text-btn '>
                        Lorem Ipsum Dummy Text?
                        </div>
                        <div className="arrow-icon-area">
                        <i class="fa-solid fa-arrow-down"></i>
                        </div>

                     </div>
                     <div className="inner-btn-area w-100  mb-4">
                        <div className='inner-text-btn '>
                        Lorem Ipsum Dummy Text?
                        </div>
                        <div className="arrow-icon-area">
                        <i class="fa-solid fa-arrow-down"></i>
                        </div>

                     </div>
                     <div className="inner-btn-area w-100  mb-4">
                        <div className='inner-text-btn '>
                        Lorem Ipsum Dummy Text?
                        </div>
                        <div className="arrow-icon-area">
                        <i class="fa-solid fa-arrow-down"></i>
                        </div>

                     </div>
            </div>  
            <div className='col-span-6'>
                <form action>
                <div className='contact-hd-area form-area'>
                <h3>Having Trouble Finding 
What You Need? 
               </h3>
                </div>
                </form>
            </div>
      </div>
   </div>
</section>
</>
);
}
export default Contact;