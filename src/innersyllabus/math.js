import React, { useState } from "react";
import Design from "../component/design";
import cube6 from "../images/contact1.png";
import cube1 from "../images/cube1.png";
export default function MathData({ data }) {
  const [openTopic, setOpenTopic] = useState(false);
  const handleAccordionClick = (id) => {
    setOpenTopic((prevId) => (prevId === id ? null : id));
  };
  return (
    <>
      <section className="syllabus-banner">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 text-center">
              <h2>{data.mainhd}</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="relative syllabus">
        <img src={cube6} alt="" className="cube6" />
        <img src={cube1} alt="" className="cube1" />
        <Design
          title={
            <>
              Digital Learning <span className="yello-text"> Design </span> is
              Our Thing
            </>
          }
          subTitle={
            <>
              Empowering Young Minds with
              <br />
              <span className="yello-text">
                Math, Physics, Biology <span className="and-text">&</span>{" "}
                Physics
              </span>
            </>
          }
          innerTitle="classes for Grades 6th to 10th"
          para={
            <>
              As part of our commitment to providing an exceptional learning
              experience, we are thrilled to <br /> introduce our latest
              offering: AI-Powered Mock Tests. With this innovative feature, you
              can take <br /> your learning journey to new heights and achieve
              your goals with confidence.
              <br />
              <br />
              This advanced system is designed to closely replicate the format
              and difficulty level of actual <br /> exams, enabling you to build
              familiarity and boost your confidence.
            </>
          }
        />
      </section>
      <section className="chapter-sec">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              {data.grads.map((item) => {
                return (
                  <>
                    <h2 className="primary-hd">{item.gradehd}</h2>
                    <div className="grid grid-cols-12 flex">
                      {item.subTopics.map((topic) => {
                        return (
                          <>
                            <div className="col-span-4">
                              <div
                                className="accordion-chapter"
                                key={topic.key}
                              >
                                <div
                                  className="inner-btn-area w-100 mx-auto"
                                  onClick={() => handleAccordionClick(topic.id)}
                                >
                                  <div className="inner-text-btn ">
                                    <strong>{topic.chaptarHd}:</strong>{" "}
                                    {topic.chaptartitle}
                                  </div>
                                  {topic.subTopicList.length > 0 && (
                                    <div className="arrow-icon-area">
                                      <i class="fa-solid fa-arrow-down"></i>
                                    </div>
                                  )}
                                </div>
                                {topic.subTopicList.length > 0 && (
                                  <div
                                    className={
                                      openTopic === topic.id
                                        ? "accordion-chapter-content active"
                                        : "accordion-chapter-content"
                                    }
                                  >
                                    <ul>
                                      {topic.subTopicList.map(
                                        (itemList, index) =>
                                          itemList !== "" && (
                                            <li key={index}>{itemList}</li>
                                          )
                                      )}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
