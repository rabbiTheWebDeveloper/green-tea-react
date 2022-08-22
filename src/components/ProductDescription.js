import React from "react";

const ProductDescription = () => {
  return (
    <section id="product_disciption">
      <div className="container">
        {/* text  */}
        <div className="text">
          <h4>আমাদের থেকে কেন নিবেন চা?</h4>
          <p>
            আমাদের থেকে চা কেন নিবেন? কারন আমরা আপনাদের জন্য এমন একটি চা সরবরাহ
            করবো যা বাগানের বাছাইকৃত ফ্রেশ তাজা পাতা থেকে তৈরি। আমরা আপনাকে
            কেমিক্যাল প্রসেস বিহীন সতেজ চা যা আমরা সরাসরি গ্রাহকদের হাতে পৌছে
            দিয়ে থাকি। আমরা হোম ডেলিভারি দিয়ে থাকি।{" "}
          </p>
        </div>
      </div>
      <img className="img_fram3" src="frontend_asset/images/Frame.png" alt="" />
      <img
        className="img_fram4"
        src="frontend_asset/images/Frame (1).png"
        alt=""
      />
    </section>
  );
};

export default ProductDescription;
