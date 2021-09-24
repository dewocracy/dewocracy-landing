import React, { useState } from "react";
import { useTranslations } from 'next-intl';


export const ContactForm = () => {
  const [state, setState] = useState({});
  const t = useTranslations("Default");

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
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
            {t('Name:')}
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
            {t('Email:')}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder={t("FORM_SAMPLE_EMAIL")}
            className="rounded-lg py-6 px-4 h-10  bg-white bg-opacity-25 placeholder-primary-800 placeholder-opacity-30"
            onChange={handleChange}
          />
        </div>
        <div className="grid">
          <label htmlFor="company" className="font-bold pr-4 pb-4">
            {t('Company:')}
          </label>
          <input
            id="company"
            type="text"
            name="company"
            required
            placeholder={t("FORM_SAMPLE_COMPANY")}
            className="rounded-lg py-6 px-4 h-10  bg-white bg-opacity-25 placeholder-primary-800 placeholder-opacity-30"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 justify-center mt-md:mr-16 mt-10 gap-y-4">
        <label htmlFor="message" className="font-bold">
          {t('Message:')}
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
          className="shadow-2xl  h-16 bg-primary-800 hover:bg-primary-400 text-white px-6   text-2xl  transition-colors duration-150  rounded-lg focus:shadow-outlinet cursor-pointer w-full md:w-auto my-10"
        >
          {t('Send message')}
        </button>
      </div>
    </form>
  );
};
