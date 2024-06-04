import React from 'react';
import './index.css';

const DontMiss = () => {
  return (
    <div className="container-fluid py-12 bg-gradient-to-r from-blue-500 to-purple-500">
      <h2 className="text-white text-center mt-5 pb-8 mx-auto text-2xl md:text-3xl lg:text-4xl font-semibold">
        Đừng bỏ lỡ thông tin cập nhật hàng tuần của Emma về sản phẩm và khuyến mãi
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 px-4 mt-5">
          <input
            type="email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-300"
            placeholder="Nhập địa chỉ email của bạn"
            maxLength="40"
            minLength="5"
          />
        </div>
        <div className="w-full lg:w-1/2 px-4 mt-5">
          <button className="w-full p-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:text-black transition duration-300">
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
}

export default DontMiss;