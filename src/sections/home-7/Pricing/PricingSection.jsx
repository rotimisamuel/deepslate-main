import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";

const settingProps = {
  sectionHeading: {
    title: "Contact us today for your Technology and Education Consultation",
    column: "col-xxl-6 col-xl-7 col-lg-8 col-md-9",
    badge: {
      text: "Start Consultation",
      class: "badge badge--blue",
    },
    classes: {
      title: "heading-lg heading-lg--cabin text-white",
      row: "text-center justify-content-center",
    },
  },
};

const PricingSection = () => {
  return (
    <div className="home-7_pricing-section section-padding-120" id="pricing">
      <div className="container">
        <SectionHeading {...settingProps.sectionHeading} />
      </div>
    </div>
  );
};

export default PricingSection;
