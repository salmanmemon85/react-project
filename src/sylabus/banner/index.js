import React from "react";
import Contact from "../../home/contact";
import syllbus1 from "../../images/syllabus1.png"
import syllbus2 from "../../images/syllabus2.png"
import syllbus3 from "../../images/syllabus3.png"
import syllbus4 from "../../images/sylllabus3.png"
import Design from "../../component/design"
export default function SyllabusBanner() {
  return (
    <>
      <section className="syllabus-banner">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 text-center">
              <h2>Syllabus</h2>
            </div>
          </div>
        </div>
      </section>
           <Design
            title={<>Digital Learning <span className="yello-text"> Design </span> is Our Thing</>}
            subTitle={<>
            Empowering Young Minds with<br/>
            <span className="yello-text">
                Math, Physics, Biology & Physics
            </span>
            </>}
            innerTitle="classes for Grades 6th to 10th"
            para={<>
              As part of our commitment to providing an exceptional learning experience, we are thrilled  to <br/> introduce our latest offering: AI-Powered Mock Tests. With this innovative feature, you can take <br/> your learning journey to new heights and achieve your goals with confidence.
                            <br/><br/>
                            This advanced system is designed to closely replicate the format and difficulty level of actual <br/> exams, enabling you to build familiarity and boost your confidence.
            </>}
            />
        <section className="syllabus-sec-2">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 flex items-center justify-center mb-5">
                    <div className="col-span-6">
                        <div className="text-center syllbus-content-area">
                            <img src={syllbus2} alt=""/>
                            <div className="mt-5  syllbus-hd-area">
                            <h3 className="primary-hd light-hd"><span className="yello-text">PHYSICS</span> </h3>
                            <p className="para black">
                                An engaging and detailed physics eLearning curriculum that uses compelling multimedia content and real-time simulations to simplify complicated ideas.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className="text-center syllbus-content-area">
                            <img src={syllbus4} alt=""/>
                            <div className="mt-5 syllbus-hd-area">
                            <h3 className="primary-hd light-hd"><span className="yello-text">MATHS</span> </h3>
                            <p className="para black">
                            Lessons designed to teach core arithmetic skills and problem-solving abilities through interactive and interesting eLearning.                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 flex items-center justify-center">
                    <div className="col-span-6">
                        <div className="text-center syllbus-content-area">
                            <img src={syllbus3} alt=""/>
                            <div className="mt-5  syllbus-hd-area">
                            <h3 className="primary-hd light-hd"><span className="yello-text">BIOLOGY</span> </h3>
                            <p className="para black">
                            Explore the amazing world of living beings and their interactions with our eLearning application's interactive courses and compelling multimedia.                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className="text-center syllbus-content-area">
                            <img src={syllbus1} alt=""/>
                            <div className="mt-5 syllbus-hd-area">
                            <h3 className="primary-hd light-hd"><span className="yello-text">CHEMISTRY</span> </h3>
                            <p className="para black">
                            Discover the fascinating realm of atoms, reactions, and molecules with our eLearning application's interactive courses and simulations.                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <Contact />
    </>
  );
}
