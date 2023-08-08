import '../../index.css';
import img2 from "../../images/img2.png"
import clip1 from "../../images/clip1.png"
import clip2 from "../../images/clip2.png"
import clip3 from "../../images/clip3.png"
import clip4 from "../../images/clip4.png"
import cube12 from "../../images/cube12.png"
import cube13 from "../../images/cube13.png"
import cube14 from "../../images/cube14.png"
import cube15 from "../../images/cube15.png"
import cube16 from "../../images/cube16.png"
import cube17 from "../../images/cube17.png"
import cube18 from "../../images/cube18.png"





function SectionSkil() {
return (
<>
<section className="relative section-2" >
    <img src={cube12} alt='' className='cube12'/>
    <img src={cube13} alt='' className='cube13'/>
    <img src={cube14} alt='' className='cube14'/>
    <img src={cube15} alt='' className='cube15'/>
    <img src={cube16} alt='' className='cube16'/>
   <div className="container mx-auto">
    <div className='rotate-area'></div>
      <div className='grid grid-cols-12 flex justify-end items-center relative'>
        <div className='col-span-9'>
            <div className='main-clip'>
                <div className='clip-path-1'>
                    <img src={clip1} alt=''/>
                </div>
                <div className='clip-path-2'>
                    <img src={clip2} alt=''/>
                </div>
                <div className='clip-path-3'>
                    <img src={clip3} alt=''/>
                </div>
                <div className='clip-path-4'>
                    <img src={clip4} alt=''/>
                </div>
            </div>
        </div>
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-span-5'>
            <div className='sec-content-area'>
                <h2 className="primary-hd  space-bottom">Digital Learning <br/> Services
               </h2>
               <p>The leading e-learning platform designed to help you
                unleash your full potential.</p>
                <div className="inner-btn-area skil-btn enrol-btn">
                     <div className='inner-text-btn '>
                        Enroll Now
                     </div>
                     <div className="arrow-icon-area">
                        <i className="fa-solid fa-arrow-right"></i>
                     </div>
                  </div>
            </div>
        </div>
      </div>
   </div>
</section>
<section className='potential-sec'>
<img src={cube17} alt='' className='cube17'/>
    <img src={cube18} alt='' className='cube18'/>
    <div className='container w-100'>
        <div className='grid grid-cols-12 flex justify-content-between items-center'>
            <div className='col-span-6'>
                <div className=" relative z-[999]">
                <h2 className="primary-hd light-hd space-bottom">Why Choose SkillCompute </h2> <br/>
                    <h1 className="primary-hd space-bottom">Unlock Your Potential with <span className="yello-text">SkillCompute</span></h1>
                  <p className='para black'>As part of our commitment to providing an exceptional learning experience, we are thrilled to introduce our latest offering: AI-Powered Mock Tests. With this innovative feature, you can take your learning journey to new heights and achieve your goals with confidence.
                 <br/><br/>
                 This advanced system is designed to closely replicate the format and difficulty level of actual exams, enabling you to build familiarity and boost your confidence.</p>
               </div>
            </div>
            <div className='col-span-6 sec-2-img'>
                <div className='book-img'>
                    <img src={img2}/>
                </div>
            </div>
        </div>
    </div>
</section>
</>
);
}
export default SectionSkil;