import React, { useState, useEffect } from "react";
import { useTranslation } from 'next-i18next';
import { OutboundLink } from "../utils/OutboundLink";
import mailgo from "mailgo";
import { useRouter } from 'next/router'



export const ContactForm = () => {
  const [state, setState] = useState({});
  const { t } = useTranslation("contact");
  const { locale } = useRouter()

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };



  useEffect(() => {
    mailgo({
      showFooter: false,
    });
  }, [locale]);

  return (
    <>
      <h2 className="font-bold text-primary-800 text-4xl lg:text-6xl text-center py-16 lg:pt-24">
        {t('title')}
      </h2>
      {/* <p key="leading-8 description" className="md:px-24 pb-5 mb-12 text-center text-2xl text-primary-800">
         {t.rich('description', {
          link: <OutboundLink
            eventProperties={{ location: "form description" }}
            rel="noreferrer noopener"
            target="_blank"
            href="https://calendly.com/dewocracylabs/dewocracy-demo"
            className="border-b-2  hover:border-black leading-8">
            {t('videocall_link')}
          </OutboundLink>,
          'contact': <OutboundLink eventProperties={{ location: "home-contactform" }} className="border-b-2  hover:border-black leading-8 " href='#mailgo' data-address='info' data-domain='dewocracy.com'>{t('contact')}</OutboundLink>
        },
        )}



      </p> */}
    <form
      name="contact"
      method="POST"
      action="/contact-thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"

    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out if you are a human: <input name="bot-field" />
        </label>
      </p>
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="grid">
          <label htmlFor="name" className="font-bold pr-4 pb-4">
              {t('name_label')}
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Mike Wazowski"
              className="rounded-lg py-6 px-4 h-10 text-primary-800  bg-lightBlue bg-opacity-10 placeholder-primary-800 placeholder-opacity-30 "
            onChange={handleChange}
          />
        </div>
        <div className="grid">
          <label htmlFor="email" className="font-bold pr-4 pb-4">
              {t('email_label')}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
              placeholder={t("email_placeholder")}
              className="rounded-lg py-6 px-4 h-10  bg-lightBlue bg-opacity-10 placeholder-primary-800 placeholder-opacity-30"
            onChange={handleChange}
          />
        </div>
        <div className="grid">
          <label htmlFor="company" className="font-bold pr-4 pb-4">
              {t('company_label')}
          </label>
          <input
            id="company"
            type="text"
            name="company"
            required
              placeholder={t("company_placeholder")}
              className="rounded-lg py-6 px-4 h-10  bg-lightBlue bg-opacity-10 placeholder-primary-800 placeholder-opacity-30"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 justify-center mt-md:mr-16 mt-10 gap-y-4">
          <label htmlFor="message" className="font-bold text-primary-800">
            {t('message')}
        </label>
        <textarea
          id="message"
            className="h-40 p-2 rounded-lg py-6 px-4 bg-lightBlue bg-opacity-10 placeholder-primary-800 placeholder-opacity-30"
          required
          maxLength="500"
          name="message"
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-center">
        <button
          aria-label="Send"
          type="submit"
            className="shadow-2xl  bg-primary-400 hover:bg-primary-800 text-white  text-xl  transition-colors duration-150   focus:shadow-outlinet cursor-pointer w-full md:w-auto my-10 rounded-full py-4 px-4 xl:px-16"
        >
            {t('submit_button')}
        </button>
      </div>
    </form>
    </>
  );
};
