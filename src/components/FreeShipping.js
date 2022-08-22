import React from "react";

const FreeShipping = () => {
  return (
    <section id="free_shipping">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 d-flex shipping_item justify-content-center align-items-center">
            <div className="icon">
              <i className="fas fa-shipping-fast" />
            </div>
            <div>
              <h5>Free Shipping</h5>
              <p>For all orders from 100tk</p>
            </div>
          </div>
          <div className="col-lg-3 d-flex shipping_item justify-content-center align-items-center">
            <div className="icon">
              <i className="fas fa-sensor-smoke" />
            </div>
            <div>
              <h5>Order Online</h5>
              <p>Order bouquet Via mobile</p>
            </div>
          </div>
          <div className="col-lg-3 d-flex shipping_item justify-content-center align-items-center">
            <div className="icon">
              <i className="fas fa-shipping-fast" />
            </div>
            <div>
              <h5>More Freshness</h5>
              <p>Bouquet are fresh &amp; blooms</p>
            </div>
          </div>
          <div className="col-lg-3 d-flex shipping_item justify-content-center align-items-center">
            <div className="icon">
              <i className="fas fa-money-bill" />
            </div>
            <div>
              <h5>Secure Payment</h5>
              <p>Potect online payment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeShipping;
