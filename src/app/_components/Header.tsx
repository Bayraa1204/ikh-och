"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../_components/LanguageContext";

const Header = () => {
  const [pathName, setPathName] = useState("");
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      setPathName(url.pathname);
    }
  }, []);

  return (
    <header className="bg-[#2D1E3C] h-[100px] flex items-center justify-between p-5 drop-shadow-lg">
      <button
        onClick={() => (window.location.href = "/")}
        className="hover:cursor-pointer pt-2"
      >
        <img
          className="h-[50px]"
          src="https://live.staticflickr.com/65535/54377010981_d1792a4b59.jpg"
          alt="Ikh Och Logo"
        />
      </button>
      <div className="flex items-center text-white">
        {["/", "/about", "/services", "/contact"].map((route) => (
          <button
            key={route}
            onClick={() => (window.location.href = route)}
            className={`p-2 transition-colors duration-300 ease-out ${
              pathName === route
                ? "text-[#F7941D] border-b-2 border-[#F7941D]"
                : "hover:text-[#F7941D] hover:border-b-2 hover:border-[#F7941D]"
            }`}
          >
            {language === "en"
              ? route === "/"
                ? "Home"
                : route.substring(1).charAt(0).toUpperCase() +
                  route.substring(2)
              : route === "/"
              ? "Нүүр"
              : route === "/about"
              ? "Бидний тухай"
              : route === "/services"
              ? "Үйлчилгээ"
              : "Холбоо барих"}
          </button>
        ))}
        <button
          onClick={toggleLanguage}
          className="ml-4 p-2 bg-[#F7941D] text-white rounded-lg hover:bg-[#D87A14]"
        >
          {language === "en" ? "Монгол" : "English"}
        </button>
      </div>
    </header>
  );
};

export default Header;
