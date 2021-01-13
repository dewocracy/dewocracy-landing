import React, { useState } from "react";
import { navigate } from "gatsby-link";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export const ContactForm = () => {
  const [state, setState] = useState({});
  const { t } = useTranslation();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => console.error(error));
  };
  return (
    <form
      name="contact"
      method="post"
      action="/contact-thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
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
            <Trans>Name:</Trans>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Mike Wazowski"
            className="rounded-lg text-black py-6 px-4 h-10 border border-grey bg-white bg-opacity-25 placeholder-white"
            onChange={handleChange}
          />
        </div>
        <div className="grid">
          <label htmlFor="email" className="font-bold pr-4 pb-4">
            <Trans>Email:</Trans>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder={t("michaelwazowski@monstersinc.com")}
            className="rounded-lg text-black py-6 px-4 h-10 border border-grey bg-white bg-opacity-25 placeholder-white"
            onChange={handleChange}
          />
        </div>
        <div className="grid">
          <label htmlFor="company" className="font-bold pr-4 pb-4">
            <Trans>Company:</Trans>
          </label>
          <input
            id="company"
            type="text"
            name="company"
            required
            placeholder={t("Monsters, Inc.")}
            className="rounded-lg text-black py-6 px-4 h-10 border border-grey bg-white bg-opacity-25 placeholder-white"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 justify-center mt-md:mr-16 mt-10 gap-y-4">
        <label htmlFor="message" className="font-bold">
          <Trans>Message:</Trans>
        </label>
        <textarea
          id="message"
          className="h-40 p-2 rounded-lg text-black py-6 px-4 h-10 border border-grey bg-white bg-opacity-25 placeholder-white"
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
          className="btn text-white border border-4 border-white bg-transparent cursor-pointer w-full md:w-auto mt-10"
        >
          <Trans>Send message</Trans>
        </button>
      </div>
    </form>
  );
};
