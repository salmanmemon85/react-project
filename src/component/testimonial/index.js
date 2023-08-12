import React from 'react'
export default function Testimonial({name, para, img}) {
  return (
    <>
       <div className='testimonial-area '>
            <img src={img} className='mx-auto mb-[40px]'/>
                <p className='mb-8 text-xl leading-1 mb-[40px]'>{para}</p>
                <h4 className=' text-[22px] leading-1 relative z-[999]'>{name}</h4>
       </div>
       </>
  )
}
