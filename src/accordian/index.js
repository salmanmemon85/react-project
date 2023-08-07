import React, { useState } from 'react';
import "../index.css"

const Accordion = ({ id, title, content, isOpen, onClick }) => {
  return (

    <div className="accordion">
      <div className="inner-btn-area w-100 mb-4" onClick={onClick}>
                        <div className='inner-text-btn ' >
                       {title}
                        </div>
                        <div className="arrow-icon-area">
                        <i class="fa-solid fa-arrow-down"></i>
                        </div>
                     </div>
                       {isOpen && <div className="accordion-content">{content}</div>}
                     </div>
  );
};


export default Accordion