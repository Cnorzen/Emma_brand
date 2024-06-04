import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

// Phần Home  
const WeHelpSurface = () => {


    return (
        <div className="container we_help_surface">
            <div className="row d-flex align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="d-flex align-items-center title">
                        <img src="/image/page1_we_help_surface_panel.svg" alt="" />
                        <h4 className="text-success mx-3">Bộ Sưu Tập Xuân / Hè 2024</h4>
                    </div>
                    <div className='title-title'>
                        <h1 className="mt-3">Bộ Sưu Tập Xuân Hè 2024 Emma</h1>
                        <br />
                        <h3 className="mt-1">ĐƯỢC RA MẮT Ở PARIS, BỘ SƯU TẬP  XUÂN HÈ 2024 DO EMMA LÊN Ý TƯỞNG ĐÃ ĐƯA CHIẾC CÚC ÁO, MỘT ĐỒ VẬT ĐƯỢC SỬ DỤNG ĐỂ TRANG TRÍ, VÀO THẾ GIỚI MỚI VÀ NHỮNG ĐIỆU MÚA.</h3>
                        <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</p>
                    </div>
                    <div className="d-flex row pb-5">
                        <div className='col-lg-4 col-md-12 btn-center mt-2'>
                            <button className="mt-2 button-bg-pink-text-white">
                                {/* image */}
                                <div className="d-flex">
                                    <div style={{ paddingRight: '15px' }}>Tìm Hiểu Thêm</div>
                                    <img src="/image/page1_we_help_surface_arrow.svg" alt="" />
                                </div>
                            </button>
                        </div>
                        <div className='col-lg-8 col-md-12 d-flex btn-center'>
                            <button className="mt-2 button-bg-white-text-gray">Mua Ngay Bây Giờ</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 d-flex justify-content-end">
                        <div>
                            <img src="./image/helen.jpg" className="img-fluid mt-5 help-panel" alt="" />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default WeHelpSurface;
