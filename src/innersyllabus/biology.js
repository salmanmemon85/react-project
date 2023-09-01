import React, { useState } from "react";
import { Helmet } from "react-helmet";
export default function ChemistryData({ biology }) {
  const [openTopic, setOpenTopic] = useState(false);
  const handleAccordionClick = (id) => {
    setOpenTopic((prevId) => (prevId === id ? null : id));
  };
  return (
    <>
      <Helmet>
        <title>SkillCompute-Syllabus-Biology</title>
      </Helmet>
      <section className="inner-banner">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 text-center">
              <h2 className="primary-hd">{biology.mainhd}</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="chapter-sec">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              {biology.grads.map((item) => {
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
                                  {topic.subTopicList.some(
                                    (subTopic) =>
                                      subTopic.innerSubTopic.length > 0
                                  ) ? (
                                    <div className="arrow-icon-area">
                                      <i className="fa-solid fa-arrow-down"></i>
                                    </div>
                                  ) : (
                                    <>
                                      {topic.subTopicList.map((total) => {
                                        return (
                                          <>
                                            {total.totalMinutes > 0
                                              ? total.totalMinutes
                                              : 0}{" "}
                                            min.
                                          </>
                                        );
                                      })}
                                    </>
                                  )}
                                </div>
                                {topic.subTopicList.some(
                                  (subTopic) =>
                                    subTopic.innerSubTopic.length > 0
                                ) && (
                                  <div
                                    className={
                                      openTopic === topic.id
                                        ? "accordion-chapter-content active"
                                        : "accordion-chapter-content"
                                    }
                                  >
                                    {topic.subTopicList.map((itemList) => {
                                      return (
                                        <>
                                          <h4>
                                            <strong>{itemList.innerHd}</strong>
                                          </h4>

                                          <ul>
                                            <div className="inner-topic-area mb-2">
                                              <h5>
                                                <strong>Topic</strong>{" "}
                                              </h5>
                                              <h5>
                                                <strong>Duration</strong>
                                              </h5>
                                            </div>
                                            {itemList.innerSubTopic.map(
                                              (innerTopic) => {
                                                return (
                                                  <>
                                                    <div className="inner-topic-area">
                                                      <li>
                                                        {innerTopic.subTitle}
                                                      </li>
                                                      <li>
                                                        {innerTopic.duration}{" "}
                                                        min
                                                      </li>
                                                    </div>
                                                  </>
                                                );
                                              }
                                            )}
                                          </ul>
                                          <div className="inner-topic-area-total flex justify-end mb-2">
                                            <h5>
                                              <strong>
                                                Total mints{" "}
                                                {itemList.totalMinutes}
                                              </strong>{" "}
                                            </h5>
                                          </div>
                                        </>
                                      );
                                    })}
                                    <div className="inner-topic-area-total flex justify-start mb-2">
                                      <h5>{topic.totalTopicmin} </h5>
                                    </div>
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
