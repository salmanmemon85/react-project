import React, { useState } from 'react';
import '../../index.css';
import img3 from "../../images/img3.png"
import Accordion from '../../accordian';

const accordionData = [
  {
    id: 1,
    title: "Lorem Ipsum Dummy Text?",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
  },
  {
    id: 2,
    title: "Lorem Ipsum Dummy Text?",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
  },
  {
    id: 3,
    title: "Lorem Ipsum Dummy Text?",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
  },
  {
    id: 4,
    title: "Lorem Ipsum Dummy Text?",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
  },
];
function Contact() {
       const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionClick = (id) => {
    setOpenAccordion((prevId) => (prevId === id ? null : id));
  };
return (
<>
<section className="contact" >
   <div className="container mx-auto">
      <div className='grid grid-cols-12 flex justify-between  relative contact-row'>
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
                  {accordionData.map(item => (
                     <Accordion
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        content={item.content}
                        isOpen={openAccordion === item.id}
                        onClick={() => handleAccordionClick(item.id)}
                     />
                     ))}
            </div>
            <div className='col-span-6'>
            <div className='contact-hd-area form-area'>
                <h3>Having Trouble Finding
                  What You Need?
               </h3>
                </div>
                <form className='contact-form'>
                   <div className='input-area'>
                    <div>
                    <div className='icon-contact-area'>
                      <i class="fa-regular fa-user"></i>
                      </div>
                    <div className='contact-input'>
                      <input placeholder='First Name'/>
                    </div>
                    </div>
                    <div>
                    <div className='icon-contact-area'>
                      <i class="fa-regular fa-user"></i>
                      </div>
                    <div className='contact-input'>
                      <input placeholder='Last Name'/>
                    </div>
                    </div>
                    </div> 
                    <div className='input-area'>
                    <div>
                    <div className='icon-contact-area'>
                    <i class="fa-regular fa-envelope"></i>
                      </div>
                    <div className='contact-input'>
                      <input placeholder='Email'/>
                    </div>
                    </div>
                    <div>
                    <div className='icon-contact-area'>
                    <i class="fa-solid fa-phone"></i>
                      </div>
                    <div className='contact-input'>
                      <input placeholder='Phone'/>
                    </div>
                    </div>
                    </div>
                    <div className='input-area message'>
                    <div>
                    <div className='icon-contact-area'>
                    <i class="fa-regular fa-envelope"></i>
                      </div>
                    <div className='contact-input'>
                      <textarea placeholder='Message'/>
                    </div>
                    </div>
                    </div> 
                    <div class="inner-btn-area skil-btn"><div class="inner-text-btn">Send Now</div><div class="arrow-icon-area"><i class="fa-solid fa-arrow-right"></i></div></div>
                </form>
            </div>
      </div>
   </div>
</section>
</>
);
}
export default Contact;