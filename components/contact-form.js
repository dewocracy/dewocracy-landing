import React, { useState } from "react";
import { useTranslations } from 'next-intl';
import { OutboundLink } from "../utils/OutboundLink";


export const ContactForm = () => {
  const [state, setState] = useState({});
  const t = useTranslations("contact_form");

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2 className="font-bold text-primary-800 text-2xl md:text-4xl lg:text-6xl text-center py-16 lg:pt-24">
        {t('title')}
      </h2>
      <p key="description" className="md:px-24 pb-5 mb-12 text-center text-2xl text-primary-800">
        {t.rich('description', {
          link: <OutboundLink eventProperties={{ location: "form description" }} href="https://calendly.com/dewocracylabs/dewocracy-demo" className="font-bold">
            {t('videocall_link')}
          </OutboundLink>
        })}





      </p>
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
            className="rounded-lg py-6 px-4 h-10 text-primary-800  bg-white bg-opacity-25 placeholder-primary-800 placeholder-opacity-30 "
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
            className="rounded-lg py-6 px-4 h-10  bg-white bg-opacity-25 placeholder-primary-800 placeholder-opacity-30"
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
            className="rounded-lg py-6 px-4 h-10  bg-white bg-opacity-25 placeholder-primary-800 placeholder-opacity-30"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 justify-center mt-md:mr-16 mt-10 gap-y-4">
        <label htmlFor="message" className="font-bold">
            {t('message')}
        </label>
        <textarea
          id="message"
          className="h-40 p-2 rounded-lg py-6 px-4 h-10 bg-white bg-opacity-25 placeholder-primary-800 placeholder-opacity-30"
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
            className="shadow-2xl  bg-primary-400 hover:bg-primary-800 text-white  text-xl  transition-colors duration-150   focus:shadow-outlinet cursor-pointer w-full md:w-auto my-10 rounded-full py-4 px-16"
        >
            {t('submit_button')}
        </button>
      </div>
    </form>
    </>
  );
};
