import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from "./components/pages/01_HomePage";
import { AboutUs } from "./components/pages/02_AboutUs";
import { Projects } from "./components/pages/03_Projects";
import { ContactUs } from "./components/pages/05_ContactUs";
import { LatestNews } from "./components/pages/06_LatestNews";
import { PageNotFound } from "./components/pages/07_PageNotFound";

function App() {
  return (
    // định tuyến menu
    <BrowserRouter>
      <Routes>
        {/* trang chủ */}
        <Route path="/" element={<HomePage />} />
        {/* giới thiệu */}
        <Route path="/about" element={<AboutUs />} />
        {/* cửa hàng */}
        <Route path="/projects" element={<Projects />} />
        {/* liên hệ */}
        <Route path="/contact" element={<ContactUs />} />
        {/* Tin tức */}
        <Route path="/news" element={<LatestNews />} />
        {/* trang thông báo không tồn tại page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
