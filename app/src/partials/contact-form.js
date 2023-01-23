import React, { useRef } from "react";
import FadeInSection from "../components/fade-in-section";

import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <FadeInSection>
      <div className="mx-10 lg:mx-auto lg:w-[600px]">
        <p className="text-white font-semibold text-center text-[40px] pt-[100px]">Contact</p>
        <p className="text-[#797979] font-semibold text-center text-[20px] pb-[50px]">Got a technical issue? Want to schedule a call? Let me know.</p>
      </div>
      <section
        id="contact-form"
        className="px-5 pb-[100px]"
      >
        <form ref={form} onSubmit={sendEmail} className="space-y-8 w-full lg:w-[600px] mx-auto">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-[#111] border pl-5 border-white text-white ring-none text-sm rounded-[100px] block w-full p-2.5 hover:shadow-[0_0px_20px_0px_rgba(248,6,204,0.5)]"
              placeholder="email@mail.com"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              id="subject"
              className="bg-[#111] border pl-5 border-white text-white ring-none text-sm rounded-[100px] block w-full p-2.5 hover:shadow-[0_0px_20px_0px_rgba(248,6,204,0.5)]"
              placeholder="Business Enquiry"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <textarea
              id="message"
              name="message"
              rows="13"
              className="bg-[#111] border pl-5 border-white text-white ring-none text-sm rounded-2xl block w-full p-2.5 hover:shadow-[0_0px_20px_0px_rgba(248,6,204,0.5)]"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-[50px] text-sm font-medium border-2 rounded-full text-center text-white bg-[#A241FF] hover:shadow-[0_0px_20px_0px_rgba(248,6,204,0.5)]"
            >
              Send message
            </button>
          </div>
        </form>
      </section>
    </FadeInSection>
  );
};

export default ContactForm;
