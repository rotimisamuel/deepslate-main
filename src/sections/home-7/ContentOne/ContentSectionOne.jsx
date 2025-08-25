import ContentBlock from "@components/Layout/Content/ContentBlock";

const settingProps = {
  contentBlock: {
    title: "Digital Transformation",
    titleClass: "content-title heading-lg heading-lg--cabin text-l7-primary",
    text: [
      "At Deepslate, we help organizations embrace digital transformation with strategies, tools, and training that unlock growth and resilience. Our approach combines deep industry knowledge with practical innovation — ensuring every transformation delivers measurable results."
    ],
    lists: {
      items: [
        "Assess and align business needs and goals",
        "Innovate and implement tailored technology solutions",
        "Educate and empower upskill teams for lasting impact",
        "Scale and sustain resilient, future-ready systems"
      ],
      bullet_image: "icon-check-black.svg",
    },

    badge: {
      text: "Transform your business",
      class: "badge badge--yellow",
    },
  },
};

const ContentSectionOne = () => {
  return (
    <div className="home-7_content-section-1 padding-top-120 padding-bottom-150 bg-light-2">
      <div className="container">
        <div className="row row--custom ">
          <div
            className=" col-xl-6 col-lg-5 col-auto"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="home-7_content-image-1 content-image--mobile-width">
              <img
                src="/image/home-7/content-image-1.png"
                alt="alternative text"
              />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-7 col-md-9 col-auto"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <ContentBlock {...settingProps.contentBlock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionOne;
