import React from "react";

const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        {/* logo  */}
        <div className="log text-center">
          <img src="frontend_asset/images/logo.png" alt="" />
        </div>
        <div className="row d-flex">
          {/* text  */}
          <div className="col-lg-6">
            <div className="banner_content">
              <div className="text">
                <h2>
                  নিয়মিত শরীরকে সতেজ রাখতে স্বাস্থ্য সচেতন প্রতিদিন গ্রীন টি পান
                  করুন সুস্থ থাকুন{" "}
                </h2>
                <h4>মূল্য ঃ ২০০০টাকা</h4>
                <div className="discount_price">
                  <h3>ডিস্কাউন্ট মূল্যঃ ১৬৫০ টাকা</h3>
                </div>
                <h5>+8801799733234</h5>
                <p>অর্ডার পেতে কল করুন এই নাম্বারে</p>
              </div>
              <a href className="bg">
                {" "}
                <i className="fas fa-cart-plus" /> অর্ডার করুন
              </a>
            </div>
          </div>
          <div className="col-lg-3 m-auto ml-5 ">
            <img src="frontend_asset/images/Group 10641.png" alt="" />
          </div>
        </div>
      </div>
      <img
        className="banner_leap1"
        src="frontend_asset/images/banner_leap/Group.png"
        alt=""
      />
      <img
        className="banner_leap2"
        src="frontend_asset/images/banner_leap/Group (1).png"
        alt=""
      />
      <img
        className="banner_leap3"
        src="frontend_asset/images/banner_leap/Group (2).png"
        alt=""
      />
      <img
        className="banner_leap4"
        src="frontend_asset/images/banner_leap/Group (3).png"
        alt=""
      />
      <img
        className="banner_leap5"
        src="frontend_asset/images/banner_leap/Group (4).png"
        alt=""
      />
      <img
        className="banner_leap6"
        src="frontend_asset/images/banner_leap/Group (5).png"
        alt=""
      />
    </section>
  );
};

export default Banner;
