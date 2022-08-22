import React from "react";

const Footer = () => {
  return (
    <div>
      <section id="footer_item">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4 text_footer">
              <i className="fas fa-phone-alt" /> 01799-733234
            </div>
            <div className="col-lg-4 text_footer">
              <i className="fas fa-envelope" /> contact@softitcare.com
            </div>
            <div className="col-lg-4 text_footer">
              <i className="fas fa-map-marker" /> Level: 5, Road: 07, Block: C,
              Niketan, Gulshan– 1, Dhaka – 1212
            </div>
          </div>
          <div className="social_media_item">
            <ul>
              <li>
                <a href>
                  <img
                    src="frontend_asset/images/dashicons_facebook-alt.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href>
                  <img src="frontend_asset/images/Vector (1).png" alt="" />
                </a>
              </li>
              <li>
                <a href>
                  <img
                    src="frontend_asset/images/akar-icons_twitter-fill.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href>
                  <img src="frontend_asset/images/bxl_instagram.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="condition_list">
            <ul>
              <li>
                <a href>Terms &amp; Conditions</a>
              </li>
              <li>
                <a href>Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <img
          className="footer_farm"
          src="frontend_asset/images/footer_banner.png"
          alt=""
        />
      </section>
      <footer className="text-center">
        Copyright © 2022 FR agrances. All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;
