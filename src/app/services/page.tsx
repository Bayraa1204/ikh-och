// pages/services.js
"use client";

import { useLanguage } from "../_components/LanguageContext";

const ServicesPage = () => {
  const { language } = useLanguage();

  return (
    <div>
      <section
        className="h-[60vh] bg-cover bg-center text-white flex flex-col items-center justify-center text-center p-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1719411321415-acfbe793c0aa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h1 className="text-5xl font-bold mb-4">
          {language === "en" ? "Our Expertise" : "Бидний туршлага"}
        </h1>
        <p className="text-lg max-w-3xl mb-6">
          {language === "en"
            ? "IKH OCH specializes in drilling and blasting services for mining, construction, and infrastructure projects. Our commitment to safety, efficiency, and environmental responsibility sets us apart as industry leaders."
            : "Их Оч нь уул уурхай, барилга, дэд бүтцийн төслүүдэд зориулсан өрөмдлөг, тэсэлгээний үйлчилгээний чиглэлээр мэргэшсэн. Аюулгүй байдал, үр ашиг, байгаль орчны хариуцлагыг эрхэмлэдэг нь биднийг салбартаа тэргүүлэгч болгодог."}
        </p>
      </section>
      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-[#2D1E3C] mb-6">
          {language === "en" ? "Our Services" : "Манай Үйлчилгээ"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
            <div className="flex justify-center mb-4">
              <img
                src="/icons/drilling-icon.png"
                alt="Drilling"
                className="h-16 w-16"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#2D1E3C] mb-2">
              {language === "en"
                ? "Drilling Services"
                : "Өрөмдлөгийн үйлчилгээ"}
            </h3>
            <p className="text-gray-700">
              {language === "en"
                ? "We provide professional drilling services for a wide range of industries, including mining, construction, and infrastructure."
                : "Бид уул уурхай, барилга, дэд бүтцийн салбаруудад зориулсан өрөмдлөгийн үйлчилгээ үзүүлдэг."}
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
            <div className="flex justify-center mb-4">
              <img
                src="/icons/blasting-icon.png"
                alt="Blasting"
                className="h-16 w-16"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#2D1E3C] mb-2">
              {language === "en"
                ? "Blasting Services"
                : "Тэсэлгээний үйлчилгээ"}
            </h3>
            <p className="text-gray-700">
              {language === "en"
                ? "We specialize in blasting techniques for construction and mining projects, ensuring safety and precision."
                : "Бид барилга, уул уурхайн төслүүдэд зориулсан тэсэлгээний техникийн үйлчилгээ үзүүлдэг."}
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
            <div className="flex justify-center mb-4">
              <img
                src="/icons/consultation-icon.png"
                alt="Consultation"
                className="h-16 w-16"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#2D1E3C] mb-2">
              {language === "en"
                ? "Consultation & Support"
                : "Зөвлөх үйлчилгээ"}
            </h3>
            <p className="text-gray-700">
              {language === "en"
                ? "We offer consultation services for project planning and execution to ensure safety and efficiency."
                : "Бид төслийг төлөвлөх, хэрэгжүүлэхэд зориулсан зөвлөх үйлчилгээ үзүүлдэг."}
            </p>
          </div>
        </div>
      </section>

      <section className="p-10 bg-[#F5F5F5] text-center">
        <h2 className="text-3xl font-bold text-[#2D1E3C] mb-6">
          {language === "en"
            ? "Our Commitment to Safety"
            : "Аюулгүй байдалд бидний хариуцлага"}
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          {language === "en"
            ? "At IKH OCH, safety and efficiency are our top priorities. We adhere to the highest standards in the industry to ensure the well-being of our teams and the success of our projects."
            : "Их Оч компанид аюулгүй байдал, үр ашиг нь хамгийн тэргүүнд тавигддаг. Бид салбарын хамгийн өндөр стандартуудыг мөрдөж, манай багуудын аюулгүй байдал болон төслүүдийн амжилттай хэрэгжилтийг хангадаг."}
        </p>
      </section>
    </div>
  );
};

export default ServicesPage;
