"use client";

import HeroSection from "./_components/HeroSection";
import Services from "./_components/Services";
import { useLanguage } from "@/app/_components/LanguageContext"; // Assuming Language Context exists
import { useState } from "react";

const HomePage = () => {
  const { language } = useLanguage();
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const handleServiceHover = (id: number) => {
    setHoveredService(id);
  };

  const handleServiceLeave = () => {
    setHoveredService(null);
  };

  return (
    <div>
      <HeroSection /> 
      <section className="py-16 bg-[#f9f9f9]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            {language === "en" ? "Our Services" : "Манай Үйлчилгээ"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className={`service-card p-6 bg-white rounded-lg shadow-lg transition-all ${
                hoveredService === 1 ? "scale-105" : ""
              }`}
              onMouseEnter={() => handleServiceHover(1)}
              onMouseLeave={handleServiceLeave}
            >
              <h3 className="text-2xl font-semibold mb-4">
                {language === "en" ? "Drilling" : "Бурилт"}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === "en"
                  ? "We provide high-quality drilling services for various needs."
                  : "Бид олон төрлийн хэрэгцээний тулд өндөр чанартай бурилтын үйлчилгээ үзүүлдэг."}
              </p>
              <button className="px-6 py-2 bg-[#F7941D] text-white rounded-lg hover:bg-[#F27A10] transition-all">
                {language === "en" ? "Learn More" : "Дэлгэрэнгүй"}
              </button>
            </div>

            <div
              className={`service-card p-6 bg-white rounded-lg shadow-lg transition-all ${
                hoveredService === 2 ? "scale-105" : ""
              }`}
              onMouseEnter={() => handleServiceHover(2)}
              onMouseLeave={handleServiceLeave}
            >
              <h3 className="text-2xl font-semibold mb-4">
                {language === "en" ? "Blasting" : "Тэсэлгээ"}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === "en"
                  ? "Our blasting services are safe, effective, and reliable."
                  : "Манай тэсэлгээний үйлчилгээ нь аюулгүй, үр дүнтэй, найдвартай."}
              </p>
              <button className="px-6 py-2 bg-[#F7941D] text-white rounded-lg hover:bg-[#F27A10] transition-all">
                {language === "en" ? "Learn More" : "Дэлгэрэнгүй"}
              </button>
            </div> 
          </div>
        </div>
      </section> 
      <section className="py-16 bg-[#2D1E3C] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            {language === "en"
              ? "What Our Clients Say"
              : "Манай Үйлчлүүлэгчдийн Сэтгэгдэл"}
          </h2>
          <div className="flex justify-center space-x-8">
            <div className="testimonial-card max-w-sm p-6 bg-white text-black rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">
                "The team did a fantastic job with our drilling project. Highly
                recommended!"
              </p>
              <h4 className="text-xl font-semibold">John Doe</h4>
              <p className="text-gray-500">CEO, XYZ Corporation</p>
            </div>
            <div className="testimonial-card max-w-sm p-6 bg-white text-black rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">
                "Excellent blasting services. They were timely, professional,
                and safe."
              </p>
              <h4 className="text-xl font-semibold">Jane Smith</h4>
              <p className="text-gray-500">Project Manager, ABC Ltd.</p>
            </div>
          </div>
        </div>
      </section>
 
    </div>
  );
};

export default HomePage;
