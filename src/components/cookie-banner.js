import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie } from "@fortawesome/free-solid-svg-icons";
import CookieConsent from "react-cookie-consent";
import React from "react";

const onAccept = () => {
  window?.amplitude?.getInstance()?.enableTracking();
};
export function CookieBanner() {
  return (
    <CookieConsent
      onAccept={onAccept}
      buttonClasses="btn bg-primary text-white w-full md:w-48"
      contentClasses="container bg-white text-primary flex justify-center content-center items-center pr-4"
      containerClasses="bg-white fixed w-full z-50 py-4 grid md:flex gap-y-4 p-6 border border-primary"
      disableStyles
    >
      <FontAwesomeIcon icon={faCookie} className="text-primary" size="2x" />
      <p className="mx-4">
        We use cookies and similar technologies to operate and improve our site,
        measurement and analytics.{" "}
        <a href="/cookies" className="underline">
          Learn more
        </a>
      </p>
    </CookieConsent>
  );
}
