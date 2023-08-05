import '../index.css';
import img3 from "../images/img3.png"


function SectionPower() {
return (
<>
<section className="power-section" >
   <div className="container mx-auto">
      <div className='grid grid-cols-12 flex justify-end items-center relative'>
        <div className='col-span-6'>
            <div className='ai-power-img'>
                <img src={img3}/>
            </div>
        </div>
        <div className='col-span-6'>
                <div className="power-content-area relative z-[999]">
                <h2 className="primary-hd light-hd space-bottom">AI Powered <br/> Mock Test </h2> 
                  <p className='para black'>As part of our commitment to providing an exceptional learning experience, we are thrilled to introduce our latest offering: AI-Powered Mock Tests. With this innovative feature, you can take your learning journey to new heights and achieve your goals with confidence.
                <br/><br/>
                This advanced system is designed to closely replicate the format and difficulty level of actual exams, enabling you to build familiarity and boost your confidence.</p>
                    <div className="inner-btn-area skil-btn enrol-btn power">
                     <div className='inner-text-btn '>
                        Read More
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
</>
);
}
export default SectionPower;