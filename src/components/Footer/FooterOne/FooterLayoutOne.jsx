import { hasClassProps } from "@utils/helpers";

const FooterLayoutOne = ({ className, logo, socialClass }) => {
  return (
    <div className={`footer${hasClassProps(className)}`}>
      <div className="container">
        <div className="row row--footer-main">
          <div className="col-md-8 col-lg-5 col-xl-5 col-xxl-4">
            <div className="footer__content-block">
              <div className="footer__content-text">
                <div className="footer-brand">
                  <img src={`/image/${logo}`} alt="image alt" />
                </div>
                <p>
                  DeepSlate is a reputable technology and consulting firm with great expertise in digital transformation and AI and digital strategy.
                </p>
              </div>

              <a href="#" className="footer-link">
                hello@deepslate.co
              </a>
              <br />
              <ul
                className={`list-social${socialClass ? ` ${socialClass}` : ""}`}
              >
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-lg-7 col-xl-6 col-xxl-7 offset-xl-1">
            <div className="row row--list-block">
              <div className="col-auto col-md-4 col-lg-auto col-xl-auto col-xxl-auto">
                <h3 className="footer-title">Primary Pages</h3>
                <ul className="footer-list">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-auto col-md-4 col-lg-auto col-xl-auto col-xxl-auto">
                <h3 className="footer-title">Services</h3>
                <ul className="footer-list">
                  <li>
                    <a href="#">Cloud Solutions</a>
                  </li>
                  <li>
                    <a href="#">Data Analytics</a>
                  </li>
                  <li>
                    <a href="#">Cybersecurity & <br/> Risk Management</a>
                  </li>
                  <li>
                    <a href="#">Digital Transformation</a>
                  </li>
                </ul>
              </div>
              <div className="col-auto col-md-4 col-lg-auto col-xl-auto col-xxl-auto">
                <h3 className="footer-title">More Services</h3>
                <ul className="footer-list">
                  <li>
                    <a href="#">Process Optimization & Innovation</a>
                  </li>
                  <li>
                    <a href="#">Digital Skills Training</a>
                  </li>
                  <li>
                    <a href="#">Technology Upskilling Programs</a>
                  </li>
                  <li>
                    <a href="#">Leadership & Change Readiness</a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-block">
        <div className="container">
          <div className="copyright-inner text-center  copyright-border">
            <p>© Copyright 2025, All Rights Reserved by DeepSlate Ltd.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLayoutOne;
