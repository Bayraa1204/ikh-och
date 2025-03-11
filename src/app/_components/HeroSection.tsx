// HeroSection.js
import { useLanguage } from "../_components/LanguageContext";

const HeroSection = () => {
  const { language } = useLanguage();

  return (
    <section
      className="h-screen bg-cover bg-center text-white flex flex-col items-center justify-center text-center p-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1719411321415-acfbe793c0aa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <h1 className="text-5xl font-bold mb-4">
        {language === "en"
          ? "IKH OCH Drilling & Blasting Service"
          : "Их Оч өрөмдлөг, тэсэлгээний үйлчилгээ"}
      </h1>
      <p className="text-lg mb-6 max-w-3xl">
        {language === "en"
          ? "IKH OCH is a leading provider of drilling and blasting services. With a strong commitment to safety, efficiency, and environmental responsibility, we offer high-quality solutions for mining, construction, and infrastructure projects."
          : "Их Оч нь өрөмдлөг, тэсэлгээний үйлчилгээний тэргүүлэгч компани юм. Бид аюулгүй байдал, үр ашиг, байгаль орчны хариуцлагыг эрхэмлэн, уул уурхай, барилга, дэд бүтцийн төслүүдэд чанартай шийдлүүдийг санал болгодог."}
      </p>
    </section>
  );
};

export default HeroSection;
