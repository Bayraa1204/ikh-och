// pages/about.js
"use client";

import { useLanguage } from "../_components/LanguageContext";

const AboutPage = () => {
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
          {language === "en" ? "About Us" : "Бидний тухай"}
        </h1>
        <p className="text-lg max-w-3xl mb-6">
          {language === "en"
            ? "IKH OCH is a leading provider of drilling and blasting services, specializing in mining, construction, and infrastructure projects. Our dedication to safety, quality, and environmental responsibility sets us apart as industry leaders."
            : "Их Оч нь өрөмдлөг, тэсэлгээний үйлчилгээний тэргүүлэгч компани бөгөөд уул уурхай, барилга, дэд бүтцийн төслүүдэд мэргэшсэн. Аюулгүй байдал, чанар, байгаль орчны хариуцлагад ханддаг нь биднийг салбартаа тэргүүлэгч болгодог."}
        </p>
      </section>
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold text-[#2D1E3C] mb-6">
          {language === "en" ? "Who We Are" : "Бид хэн бэ"}
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          {language === "en"
            ? "At IKH OCH, we are a team of experienced professionals dedicated to providing high-quality drilling and blasting services. Our focus on safety, efficiency, and innovation drives our success in every project we undertake."
            : "Их Оч компани нь өндөр мэргэшилтэй багтай бөгөөд өрөмдлөг, тэсэлгээний үйлчилгээг чанартай үзүүлдэг. Аюулгүй байдал, үр ашиг, шинэчлэлд анхаарах нь бидний бүх төслийг амжилттай хэрэгжүүлэх үндэс юм."}
        </p>
      </section>

      <section className="bg-gray-100 p-10 text-center">
        <h2 className="text-3xl font-bold text-[#2D1E3C] mb-6">
          {language === "en" ? "Our Mission & Vision" : "Манай Үйлс ба Хараа"}
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {/* Mission */}
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto transition transform hover:scale-105 duration-300">
            <h3 className="text-xl font-semibold text-[#2D1E3C] mb-4">
              {language === "en" ? "Mission" : "Үйлс"}
            </h3>
            <p className="text-gray-700">
              {language === "en"
                ? "Our mission is to provide the highest quality drilling and blasting services, while ensuring safety, efficiency, and environmental responsibility in every project."
                : "Манай үйлс нь өрөмдлөг, тэсэлгээний үйлчилгээний хамгийн өндөр чанарыг үзүүлэх бөгөөд төслийн аюулгүй байдал, үр ашиг, байгаль орчны хариуцлагыг хангах зорилготой."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto transition transform hover:scale-105 duration-300">
            <h3 className="text-xl font-semibold text-[#2D1E3C] mb-4">
              {language === "en" ? "Vision" : "Хараа"}
            </h3>
            <p className="text-gray-700">
              {language === "en"
                ? "Our vision is to be the most trusted provider of drilling and blasting services, recognized for our commitment to safety, quality, and environmental sustainability."
                : "Манай хараа нь аюулгүй байдал, чанар, байгаль орчны тогтвортой байдлын хариуцлагад бидний тууштай оролцож, өрөмдлөг, тэсэлгээний үйлчилгээний хамгийн итгэлтэй нийлүүлэгч байх явдал юм."}
            </p>
          </div>
        </div>
      </section>

      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold text-[#2D1E3C] mb-6">
          {language === "en" ? "Our Team" : "Манай Баг"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
            <img
              src="/team/member1.jpg"
              alt="Team Member 1"
              className="h-40 w-40 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#2D1E3C] mb-2">
              John Doe
            </h3>
            <p className="text-gray-700">CEO</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
            <img
              src="/team/member2.jpg"
              alt="Team Member 2"
              className="h-40 w-40 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#2D1E3C] mb-2">
              Jane Smith
            </h3>
            <p className="text-gray-700">Operations Manager</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
            <img
              src="/team/member3.jpg"
              alt="Team Member 3"
              className="h-40 w-40 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#2D1E3C] mb-2">
              Michael Johnson
            </h3>
            <p className="text-gray-700">Project Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
