import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
