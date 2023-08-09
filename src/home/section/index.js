import '../../index.css';
import img1 from "../../images/img1.png"
import cube8 from "../../images/cube8.png"
import cube9 from "../../images/cube9.png"
import cube10 from "../../images/cube10.png"
import cube11 from "../../images/cube11.png"
import subtraction from "../../images/subtraction.png"


function SectionSkil() {
return (
<>
<section className="skil-sec" >
   <img src={subtraction} className='subtraction'/>
   <img src={cube8} className='cube8'/>
   <img src={cube9} className='cube9'/>
   <img src={cube10} className='cube10'/>
   <img src={cube11} className='cube11'/>

   <div className="container mx-auto">
      <div className="grid grid-cols-10 flex justify-between items-center row-img">
         <div className="col-span-5">
            <div className='section-img-content'>
               <h2 className='hd-secondary small-size'>What is SkillCompute</h2>
               <h3 className='hd-secondary'>Special Attention <br/>
                  For Every Child
               </h3>
               <div className='mt-10'>
                  <p className='para'>
                     At SkillCompute, we believe that learning should be accessible to everyone, anytime, and anywhere. That's why we have curated an extensive collection of courses covering a wide array of subjects. Whether you're passionate about technology, arts and design, business, or personal development, we have the perfect course for you.
                     <br/><br/>
                     Our mission is to make learning accessible and convenient for everyone. Whether you're a beginner looking to explore a new subject or an experienced professional seeking to expand your expertise, we have the perfect learning solutions for you. With our user-friendly platform, you can access our courses anytime, anywhere, and at your own pace.
                  </p>
                  <div className="inner-btn-area skil-btn">
                     <div className='inner-text-btn'>
                        Read More
                     </div>
                     <div className="arrow-icon-area">
                        <i className="fa-solid fa-arrow-right"></i>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-span-5 img1-area">
            <div className=''>
               <img className='img1' src={img1} alt=''/>
            </div>
         </div>

      </div>
     
   </div>
</section>
</>
);
}
export default SectionSkil;