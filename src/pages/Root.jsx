import { Outlet } from "react-router-dom";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
// import classes from "./Root.module.css";
const RootLayout = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-4" style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
