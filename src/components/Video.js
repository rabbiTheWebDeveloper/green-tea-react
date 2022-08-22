import React from "react";

const Video = () => {
  return (
    <section id="video">
      <div className="container">
        <div className="text">
          <h2>গ্রিন টি কি ?</h2>
          <p>
            গ্রিন টি হল এক ধরনের চা যা ক্যামেলিয়া সিনেনসিস পাতা এবং কুঁড়ি থেকে
            তৈরি করা হয় চীনের বিখ্যাত বাগান থেকে নির্বাচিত কোমল পাতা দিয়ে
            তৈরি, এই সবুজ চা হাজার হাজার বছর ধরে চীনারা তাদের ত্বক এবং তারুণ্য
            ধরে রাখতে খেয়ে আসছে।
          </p>
        </div>
        <div className="row">
          <div className="col-lg-10 m-auto mt-5">
            <div className="video_item">
              <iframe
                width="100%"
                height={600}
                src="https://www.youtube.com/embed/-fh3WbfnX5Y"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div className="text mt-5">
          <h2>গ্রিন টি উপকারীতার সম্পর্কে আর বিস্তারিত আলোচনা করা হল নীচে</h2>
        </div>
      </div>
    </section>
  );
};

export default Video;
