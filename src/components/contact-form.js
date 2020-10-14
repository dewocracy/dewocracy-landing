import React, { useState } from "react";
import { navigate } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export const ContactForm = () => {
  const [state, setState] = useState({});

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
      <div className="w-1/2 grid gap-4">
        <div className="grid gap-4 w-1/2">
          <label htmlFor="name" className="font-bold pr-4">
            Nombre:
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Gustav Mahler"
            className="rounded-sm text-black p-2 h-10"
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-4 w-1/2">
          <label htmlFor="email" className="font-bold pr-4">
            Email:
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="name@domain.com"
            className="rounded-sm text-black p-2 h-10"
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 justify-center mt-md:mr-16 mt-4 gap-y-4">
          <label htmlFor="message" className="font-bold">
            Mensaje:
          </label>
          <textarea
            className="h-40 rounded-sm text-black p-2 md:m-0"
            required
            maxLength="500"
            name="message"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn text-greyBlue cursor-pointer w-full md:w-auto "
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};
