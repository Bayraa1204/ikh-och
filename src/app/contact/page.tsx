// pages/contact.js
"use client";

import { useLanguage } from "../_components/LanguageContext";

const ContactPage = () => {
  const { language } = useLanguage();

  return (
    <>
      <section
        className="h-[60vh] bg-cover bg-center text-white flex flex-col items-center justify-center text-center p-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1719411321415-acfbe793c0aa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h1 className="text-5xl font-bold mb-4">
          {language === "en" ? "Contact Us" : "Холбоо барих"}
        </h1>
        <p className="text-lg max-w-3xl mb-6">
          {language === "en"
            ? "Get in touch with IKH OCH today. We're here to answer your questions and provide the best solutions for your drilling and blasting needs."
            : "Их Оч компанитай холбоо барина уу. Бид таны асуултанд хариу өгөх бөгөөд өрөмдлөг, тэсэлгээний шаардлагад хамгийн сайн шийдлийг санал болгох болно."}
        </p>
      </section>

      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-[#2D1E3C] mb-6">
          {language === "en" ? "Send Us a Message" : "Мэдээлэл илгээх"}
        </h2>
        <form
          action="#"
          method="POST"
          className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-[#2D1E3C] mb-2"
              >
                {language === "en" ? "Your Name" : "Таны нэр"}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder={
                  language === "en" ? "Enter your name" : "Нэрээ оруулна уу"
                }
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-[#2D1E3C] mb-2"
              >
                {language === "en" ? "Your Email" : "Таны имэйл"}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder={
                  language === "en" ? "Enter your email" : "Имэйлээ оруулна уу"
                }
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-[#2D1E3C] mb-2"
            >
              {language === "en" ? "Your Message" : "Таны мэдэгдэл"}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder={
                language === "en"
                  ? "Enter your message"
                  : "Мэдээллээ оруулна уу"
              }
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full p-3 bg-[#F7941D] text-white rounded-lg hover:bg-[#D87A14]"
          >
            {language === "en" ? "Send Message" : "Мэдээлэл илгээх"}
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactPage;
