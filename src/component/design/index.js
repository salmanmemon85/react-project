import React from 'react'

export default function Design({title, subTitle, innerTitle, para}) {
  return (
    <>
       <section className='syllabus-sec'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-10 flex justify-center'>
                    <div className='col-span-10'>
                        <div className="text-center relative z-[999] ">
                        <h1 className="primary-hd space-bottom">{title}</h1>
                        <h2 className="primary-hd light-hd space-bottom">{subTitle} </h2>
                        <h4 className="primary-hd small-size space-bottom banner-hd-classes">{innerTitle}</h4>
                        <p className='para black'>
                          {para}
                        </p>
                     </div>
                    </div>
                </div>
            </div>
            </section>
    </>
  )
}
