import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import { Footer } from "./footer";
import ScrollArrow from "./scroll-arrow";
import { CookieBanner } from "./cookie-banner";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <ScrollArrow />
      <Header />
      <main>{children}</main>
      <CookieBanner />
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
