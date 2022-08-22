import React from "react";

const OrderForm = () => {
  return (
    <section id="form_part">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="header text-center">
              <img src="frontend_asset/images/emoji.png" alt="" />
              <h2>তাই আর দেরি না করে আজই অর্ডার করুন </h2>
            </div>
          </div>
        </div>
        {/* form_part_content */}
        <div className="form_part_content">
          <form action method="POST">
            <div className="row">
              <div className="col-lg-6 ">
                <div className="left_part p-4">
                  <h3>Billing details</h3>
                  {/* item */}
                  <div className="custome_input">
                    <input type="text" placeholder="আপনার নাম লিখুন *" />
                  </div>
                  {/* item */}
                  <div className="custome_input">
                    <input
                      type="text"
                      placeholder="আপনার মোবাইল নাম্বার লিখুন * "
                    />
                  </div>
                  {/* item */}
                  <div className="custome_input">
                    <input
                      type="text"
                      placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন *"
                    />
                  </div>
                  <div className="payment">
                    <h4>Paymet</h4>
                    <div className="custome_input checkbox d_flex">
                      <input type="checkbox" id="delivary_input" placeholder />
                      <label htmlFor="delivary_input">
                        {" "}
                        ক্যাশ অন ডেলিভারি{" "}
                      </label>
                    </div>
                    <div className="arrow_bg">
                      <p>Pay with cash on delivery.</p>
                    </div>
                    <div className="custome_input checkbox d_flex mt-3">
                      <input type="checkbox" id="delivary_input1" placeholder />
                      <label htmlFor="delivary_input1"> bKash </label>
                    </div>
                    <div className="custome_input checkbox d_flex mt-3">
                      <input type="checkbox" id="delivary_input2" placeholder />
                      <label htmlFor="delivary_input3"> Nagad </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right_part p-4">
                  <h3>Your order</h3>
                  <div className="product_part">
                    <ul>
                      <li className="d_flex d_justify">
                        <h3>Product</h3>
                        <p>Subtotal</p>
                      </li>
                      <li className="d_flex d_justify">
                        {/* left */}
                        <div className="left d_flex">
                          <div className="img">
                            <img
                              src="frontend_asset/images/form_order_img.png"
                              alt=""
                            />
                          </div>
                          <div className="text">
                            <h4>Flower Of Story Men’s Perfume Set Boss</h4>
                          </div>
                        </div>
                        {/* middle */}
                        <div className="middle">
                          <span> X 1 </span>
                        </div>
                        {/* amount */}
                        <div className="amount">
                          <h3> Tk 1,690.00</h3>
                        </div>
                      </li>
                      <li className="d_flex d_justify">
                        <h5>Subtotal</h5>
                        <h5>1,690.00</h5>
                      </li>
                      <li className="d_flex d_justify">
                        <h5>Shipping</h5>
                        <div className="outside">
                          <div className="item d_flex">
                            <input type="checkbox" id="Dhaka" />
                            <label htmlFor="Dhaka">ঢাকার মধ্যে</label>
                          </div>
                          <div className="item d_flex">
                            <input type="checkbox" id="out_Dhaka" />
                            <label htmlFor="out_Dhaka">ঢাকার বাহিরে</label>
                          </div>
                        </div>
                      </li>
                      <li className="d_flex d_justify">
                        <h3>Total</h3>
                        <h3>1,690.00</h3>
                      </li>
                    </ul>
                  </div>
                  <div className="dexcription">
                    <button className="order_place " type="submit">
                      {" "}
                      <i className="fas fa-lock" /> Place Order ৳ 1,999.00
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
