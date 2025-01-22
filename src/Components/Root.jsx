import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbr from "./Navbr";
const Root = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Navbr />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
