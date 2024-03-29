import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import { Footer } from "./footer";
import ScrollArrow from "./scroll-arrow";


function Layout({ children }) {


  return (
    <div className="flex flex-col justify-center  min-h-screen font-sans text-gray-900	">
      <Header />

      <div className="2xl:flex 2xl:justify-center" >
        <div className="max-w-screen-2xl 2xl:w-full 2xl:max-w-full">
        <ScrollArrow />
        <main className="overflow-x-hidden -mt-6">{children}</main>
        <Footer />
      </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
