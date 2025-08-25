import Button from "@components/Buttons/Button";

const HeroSection = () => {
  return (
    <div className="home-7_hero-section" id="hero">
      <div className="container">
        <div className="row row--custom">
          <div
            className="col-xxl-auto col-xl-5 col-lg-5 col-md-5 col-sm-6 col-xs-8 col-8"
            data-aos-duration={1000}
            data-aos="fade-left"
            data-aos-delay={300}
          >
            <div className="home-7_hero-image">
              <img
                className="hero-image"
                src="/image/home-7/hero.png"
                alt="hero image"
              />
            </div>
          </div>
          <div
            className="col-xxl-auto col-xl-7 col-lg-7 col-md-10"
            data-aos-duration={1000}
            data-aos="fade-right"
            data-aos-delay={300}
          >
            <div className="home-7_hero-content">
              <div className="home-7_hero-content-text">
                <span className="badge badge--white">
                  Your Partner in Tech & Education
                </span>
                <h1 className="hero-content__title heading-xxl fw-700">
                  Technology and 
                  Education Consulting 
                </h1>
                <p>
                 Learn, Build, Deploy, Perform — with Confidence!
                </p>
              </div>
              <div className="home-7_hero-content-button">
                <Button
                  href="#"
                  animation={false}
                  className="btn-masco btn-primary-l07 rounded-pill btn-shadow"
                >
                  Start your journey today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
