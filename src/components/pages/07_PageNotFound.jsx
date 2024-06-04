import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
export const PageNotFound = () => {
  // page dường dẫn trang không tồn tại ( error )
  return (
    <section>
      <Header />
      <div className="container row my-5 mx-auto align-items-center">
        <div className="col-lg-6 col-md-12">
          <h2>Xin Lỗi</h2>
          <h3 className="mt-2">404: Trang không tồn tại....</h3>
        </div>
        <div className="col-lg-6 col-md-12 d-flex btn-col">
          <Link to={"/"}>
            <button className="button-bg-pink-text-white d-flex align-items-center justify-content-center btn-back">
              Trở Về Home
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
};
