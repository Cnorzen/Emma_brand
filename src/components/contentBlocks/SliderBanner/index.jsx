import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderBanner.css"; // Custom CSS for additional styling

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
};

const SliderBanner = () => {
  return (
    <section className="section-slide relative mt-0">
      <div className="w-full max-w-4xl mx-auto mt-4">
        <Slider {...settings}>
          <div className="relative h-56 md:h-64 lg:h-72">
            <img
              src="../image/helen.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover rounded-md shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Women Collection 2024
                </h2>
                <p className="text-sm md:text-lg mb-4">
                  Discover the latest trends
                </p>
                <button className="px-5 py-2 bg-white text-black hover:bg-gray-200 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="relative h-56 md:h-64 lg:h-72">
            <img
             src="../image/helen.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover rounded-md shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Men Collection 2024
                </h2>
                <p className="text-sm md:text-lg mb-4">
                  Check out our new arrivals
                </p>
                <button className="px-5 py-2 bg-white text-black hover:bg-gray-200 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="relative h-56 md:h-64 lg:h-72">
            <img
             src="../image/helen.jpg"
              alt="Slide 3"
              className="w-full h-full object-cover rounded-md shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Summer Collection
                </h2>
                <p className="text-sm md:text-lg mb-4">
                  Get ready for the heat
                </p>
                <button className="px-5 py-2 bg-white text-black hover:bg-gray-200 transition duration-300">
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

export default SliderBanner;
