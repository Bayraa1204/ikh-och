// Services.js
import { useLanguage } from "./LanguageContext";

const Services = () => {
  const { language } = useLanguage();

  return (
    <section className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-[#2D1E3C] mb-6">
        {language === "en" ? "Our Expertise" : "Бидний туршлага"}
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto mb-6">
        {language === "en"
          ? "IKH OCH specializes in drilling and blasting services for mining, construction, and infrastructure projects. Our commitment to safety, efficiency, and environmental responsibility sets us apart as industry leaders."
          : "Их Оч нь уул уурхай, барилга, дэд бүтцийн төслүүдэд зориулсан өрөмдлөг, тэсэлгээний үйлчилгээний чиглэлээр мэргэшсэн. Аюулгүй байдал, үр ашиг, байгаль орчны хариуцлагыг эрхэмлэдэг нь биднийг салбартаа тэргүүлэгч болгодог."}
      </p>
    </section>
  );
};

export default Services;
