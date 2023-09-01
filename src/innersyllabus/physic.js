import React, { useState } from "react";
import { Helmet } from "react-helmet";
export default function ChemistryData({ physicData }) {
  const [openTopic, setOpenTopic] = useState(false);
  const handleAccordionClick = (id) => {
    setOpenTopic((prevId) => (prevId === id ? null : id));
  };
  return (
    <>
     <Helmet>
      <title>SkillCompute-Syllabus-Physics</title>
      </Helmet>
      <section className="inner-banner">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 text-center">
              <h2 className="primary-hd">{physicData.mainhd}</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="chapter-sec">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              {physicData.grads.map((item) => {
                return (
                  <>
                    <h2 className="primary-hd">{item.gradehd}</h2>
                    <div className="grid grid-cols-12 flex chapter-row">
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
                                    <div className="inner-topic-area mb-2">
                                        <h5><strong>Topic</strong> </h5>
                                        </div>
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
