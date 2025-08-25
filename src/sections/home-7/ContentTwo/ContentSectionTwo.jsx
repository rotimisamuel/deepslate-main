import ContentBlock from "@components/Layout/Content/ContentBlock";

const settingProps = {
  contentBlock: {
    title: "Generative AI Strategy & Upskilling",
    titleClass: "heading-lg heading-lg--cabin text-l7-primary",
    text: [
      "At Deepslate, we help organizations unlock the full potential of Generative AI with strategies that are practical, scalable, and tailored to your industry.",
    ],
    lists: {
      items: [
        "Evaluate processes and data maturity",
        "Define a clear AI adoption path",
        "Ensure responsible and ethical AI",
        "Support pilots and enterprise rollout"
      ],
      bullet_image: "icon-check-black.svg",
    },
    badge: {
      text: "Do more with GenAI",
      class: "badge badge--purple",
    },
  },
};
const ContentTwoSection = () => {
  return (
    <>
      <div className="home-7_content-section-2 padding-bottom-120 bg-light-2">
        <div className="container">
          <div className="row row--custom ">
            <div
              className=" col-xl-6 col-lg-5 col-auto"
              data-aos-duration={2000}
              data-aos="fade-right"
            >
              <div className="home-7_content-image-2 content-image--mobile-width">
                <img
                  src="./image/home-7/content-image-2.png"
                  alt="alternative text"
                />
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-7 col-md-9 col-auto"
              data-aos-duration={2000}
              data-aos="fade-left"
            >
              <ContentBlock {...settingProps.contentBlock} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentTwoSection;
