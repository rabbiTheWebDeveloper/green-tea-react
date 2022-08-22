import React from "react";

const Discount = () => {
  return (
    <section id="discount_price">
      <div className="text">
        <h3>পূর্বের মূল্য ঃ ২০০০টাকা</h3>
        <h2>ডিস্কাউন্ট মূল্যঃ ১৬৫০ টাকা</h2>
      </div>
      <div className="container">
        <div className="discount_contain">
          <img
            className="img_fram1"
            src="frontend_asset/images/icon_discount.png"
            alt=""
          />
          <div className="delevery_banner">
            <h3>সারাদেশে ফ্রি ডেলিভারি পেতে এখনি</h3>
            <a className="bg" href>
              অর্ডার করুন
            </a>
          </div>
          <img
            className="img_fram2"
            src="frontend_asset/images/icon_discount.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Discount;
