import React, { useState } from 'react';
import "../index.css"

const Accordion = ({ id, title, content, isOpen, onClick }) => {
  return (

    <div className="accordion  mb-4">
      <div className="inner-btn-area w-100" onClick={onClick}>
                        <div className='inner-text-btn ' >
                       {title}
                        </div>
                        <div className="arrow-icon-area">
                        <i class="fa-solid fa-arrow-down"></i>
                        </div>
                     </div>
                       <div className={isOpen ? "accordion-content active" : "accordion-content"}>
                        <p className='para'>
                          {content}
                        </p>
                        </div>
                     </div>
  );
};


export default Accordion