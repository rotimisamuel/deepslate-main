const FactSection = () => {
  return (
    <div className="home-7_fact-section">
      <div className="container">
        <div className="row row--custom  fact-widget-divider">
          <div className="col-xxl-auto  col-lg-3 col-md-6 col-sm-8 col-xs-9">
            <div className="fact-widget">
              <div>
                <img src="/image/home-7/fact-icon-1.svg" alt="image alt" />
              </div>
              <div>
                <h3 className="fact-widget_title">Innovative mindset</h3>
                <p>We challenge limits and create the future, in education and Tech.</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-auto col-lg-3 col-md-6 col-sm-8 col-xs-9">
            <div className="fact-widget">
              <div>
                <img src="/image/home-7/fact-icon-2.svg" alt="image alt" />
              </div>
              <div>
                <h3 className="fact-widget_title">Service Quality</h3>
                <p>
                  We go beyond limits to < br/> create scalable, future-ready solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-auto  col-lg-3 col-md-6 col-sm-8 col-xs-9">
            <div className="fact-widget last-child">
              <div>
                <img src="/image/home-7/fact-icon-3.svg" alt="image alt" />
              </div>
              <div>
                <h3 className="fact-widget_title">Global Relevance</h3>
                <p> We provide tailored solutions for business needs, built to scale globally.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-3 col-sm-5 col-xs-6 col-auto">
            <div className="home-7_fact-navigation-image">
              <div className="fact-round-image">
                <img src="/image/home-7/text-circle.png" alt="image alt" />
              </div>
              <img src="/image/home-7/fact-arrow-icon.png" alt="image alt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactSection;
