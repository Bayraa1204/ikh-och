// Footer.js
"use client";

import { useLanguage } from "./LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#2D1E3C] text-white text-center p-5">
      <p>
        &copy; 2024 IKH OCH.{" "}
        {language === "en"
          ? "All Rights Reserved."
          : "Бүх эрх хуулиар хамгаалагдсан."}
      </p>
    </footer>
  );
};

export default Footer;
