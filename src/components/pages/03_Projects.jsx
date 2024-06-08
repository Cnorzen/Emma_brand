import Footer from "../Footer";
import DontMiss from "../contentBlocks/DontMiss";
import Header from "../Header";
import SliderBanner from "../contentBlocks/SliderBanner";


export const Projects = () => {
  // page Sản Phẩm

  return (
    <section>
      <Header />
      <SliderBanner/>
      {/* Phần sản phẩm cần api */}
      <div className="container">
        <div className="row">
          <div className="col-xxl-3 col-md-12">
            <h1>Danh sách sản phẩm </h1>
          </div>
        </div>
      </div>
      <br />
      <DontMiss />
      <Footer />
    </section>
  );
};
