import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";

const Main = () => {
  return (
    <>
      <main className="min-h-[100vh] flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Main;
