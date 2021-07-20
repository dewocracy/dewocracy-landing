import PropTypes from "prop-types";
import React from "react";
import CookieBot from "react-cookiebot";
import Header from "./header";
import { Footer } from "./footer";
import ScrollArrow from "./scroll-arrow";

function Layout({ children }) {

  const cookieBotId = process.env.COOKIEBOT_GROUP_ID

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <ScrollArrow />
      <Header />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
      <CookieBot domainGroupId={cookieBotId} />

    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
