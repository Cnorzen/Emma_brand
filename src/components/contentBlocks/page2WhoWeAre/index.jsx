import "./index.css";

const WhoWeAre = () => {
  return (
    <div className="container who_we_are">
      <div className="row">
      {/* <section
            className="bg-img1 text-center px-6 py-24 sm:px-24"
            style={{
              backgroundImage: `url('../image/helen.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-5xl font-light text-white">Contact</h2>
          </section> */}
        <div className="col-lg-3.5 col-md-16 d-flex align-items-center">
          <img
            alt="#"
            src="../image/helen.jpg"
            className="img-fluid who-panel"
          />
        </div>

        <div className="col-lg-8 col-md-12">
          <div className="mt-3 mb-3 d-flex title">
            <img alt="#" src="../image/page2_who_we_are_line.svg" />
            <h4 className="text-dark mx-3 fw-bold display-4 custom-shadow">
              WHAT IS EMMA
            </h4>
          </div>

          <div className="title-title" style={{ maxWidth: "669px" }}>
            <h2 className="mb-4 who-we-are-title">Chúng tôi là EMMA </h2>

            <p className="mb-5">
              Được thành lập năm 2024, EMMA là thương hiệu Việt Nam về phong
              cách sống, cung cấp đa dạng các loại sản phẩm chất lượng và hữu
              dụng từ quần áo.
            </p>

            <p className="mb-5">
              EMMA được thành lập vào năm 2024, bắt đầu bằng việc tối ưu hóa quy
              trình sản xuất nhằm tạo ra các sản phẩm đơn giản, chi phí hợp lý
              nhưng chất lượng tốt. Cụ thể, EMMA đã kiểm soát chất lượng các sản
              phẩm thông qua ba yếu tố: tuyển chọn nguyên vật liệu, tối ưu hóa
              quy trình sản xuất và đơn giản hóa ..
            </p>

            <p className="mb-5">
              Với tinh thần hợp tác và sự đoàn kết, chúng tôi hy vọng tạo ra một
              thế giới Emma, phồn thịnh và nhân văn hơn. Hãy cùng nhau khám phá
              và xây dựng tương lai tươi sáng qua Emma!
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-16 d-flex align-items-center">
          <img
            alt="#"
            src="../image/logoemma.png"
            className="img-fluid who-panel"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
