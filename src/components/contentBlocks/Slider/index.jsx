import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="section-slide relative">
      <div className="w-full">
        <Slider {...settings}>
          <div className="h-100 relative">
            <img
              src="../image/helen.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div>
                <h2 className="text-4xl text-white font-bold mb-4">
                  Women Collection 2024
                </h2>
                <p className="text-lg text-white mb-8">Bộ Sưu Tập Xuân Hè</p>
                <button className="bg-white text-black py-3 px-8 rounded-none hover:bg-gray-200 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="h-100 relative">
            <img
              src="../image/img2.png"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div>
                <h2 className="text-4xl text-red-600 font-bold mb-4">
                  Men Collection 2024
                </h2>
                <p className="text-lg text-white mb-8">Bộ Sưu tập Xuân Hè</p>
                <button className="bg-white text-black py-3 px-8 rounded-none hover:bg-gray-200 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="h-100 relative">
            <img
              src="/image/rajab.png"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div>
                <h2 className="text-4xl text-white font-bold mb-4">
                  Summer Collection 2024
                </h2>
                <p className="text-lg text-white mb-8">Bộ Sưu Tập Thu Đông</p>
                <button className="bg-white text-black py-3 px-8 rounded-none hover:bg-gray-200 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Slide;
