"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/app/_components/LanguageContext";

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
}

const AdminDashboard: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      title: language === "en" ? "Drilling" : "Бурилт",
      description: "Description for drilling service",
    },
    {
      id: 2,
      title: language === "en" ? "Blasting" : "Тэсэлгээ",
      description: "Description for blasting service",
    },
  ]);
  const [about, setAbout] = useState<string>(
    "We are a leading drilling and blasting service provider."
  );
  const [contact, setContact] = useState<ContactInfo>({
    phone: "123-456-789",
    email: "info@company.com",
    address: "123 Street Name",
  });
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  useEffect(() => {
    if (sessionStorage.getItem("isAdmin") !== "true") {
      router.push("/admin/login");
    } else {
      setIsAdmin(true);
    }
  }, [router]);

  const handleEditService = (id: number) => {
    setEditingField("service");
    setEditMode(true);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleEditAbout = () => {
    setEditingField("about");
    setEditMode(true);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleEditContact = (field: keyof ContactInfo) => {
    setEditingField(field);
    setEditMode(true);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleSaveChanges = async (field: string | null, newValue: string) => {
    if (!field) return;
    try {
      const response = await fetch("/api/updateField", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ field, value: newValue }),
      });

      if (response.ok) {
        setSuccessMessage(`${field} has been updated successfully!`);
        setEditMode(false);
        setEditingField(null);

        if (field === "about") {
          setAbout(newValue);
        } else if (field === "service") {
          setServices((prevServices) =>
            prevServices.map((service) =>
              service.id === 1 ? { ...service, title: newValue } : service
            )
          );
        } else if (field === "contact") {
          setContact((prevContact) => ({
            ...prevContact,
            [field]: newValue,
          }));
        }
      } else {
        setErrorMessage("Failed to update field.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while updating the field.");
    }
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditingField(null);
  };

  return isAdmin ? (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        {language === "en" ? "Admin Dashboard" : "Админ Панел"}
      </h1>

      {errorMessage && (
        <div className="text-red-500 mb-4 p-3 border border-red-500">
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div className="text-green-500 mb-4 p-3 border border-green-500">
          {successMessage}
        </div>
      )}

      <section className="mb-6">
        <h2 className="text-3xl font-bold text-[#2D1E3C] mb-4">
          {language === "en" ? "Services" : "Үйлчилгээнүүд"}
        </h2>
        <ul>
          {services.map((service) => (
            <li key={service.id} className="mb-4">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p>{service.description}</p>
              <button
                onClick={() => handleEditService(service.id)}
                className="mt-2 p-2 bg-[#F7941D] text-white rounded-lg"
              >
                {language === "en" ? "Edit" : "Өөрчлөх"}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold text-[#2D1E3C] mb-4">
          {language === "en" ? "About Section" : "Тухай хэсэг"}
        </h2>
        <p>{about}</p>
        <button
          onClick={handleEditAbout}
          className="mt-2 p-2 bg-[#F7941D] text-white rounded-lg"
        >
          {language === "en" ? "Edit About" : "Өөрийн тухай өөрчлөх"}
        </button>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-[#2D1E3C] mb-4">
          {language === "en" ? "Contact Information" : "Холбоо барих мэдээлэл"}
        </h2>
        <p>
          <strong>{language === "en" ? "Phone:" : "Утас:"}</strong>{" "}
          {contact.phone}
        </p>
        <p>
          <strong>{language === "en" ? "Email:" : "И-мэйл:"}</strong>{" "}
          {contact.email}
        </p>
        <p>
          <strong>{language === "en" ? "Address:" : "Хаяг:"}</strong>{" "}
          {contact.address}
        </p>
        <button
          onClick={() => handleEditContact("phone")}
          className="mt-2 p-2 bg-[#F7941D] text-white rounded-lg"
        >
          {language === "en" ? "Edit Phone" : "Дугаар өөрчлөх"}
        </button>
        <button
          onClick={() => handleEditContact("email")}
          className="mt-2 p-2 bg-[#F7941D] text-white rounded-lg"
        >
          {language === "en" ? "Edit Email" : "Email өөрчлөх"}
        </button>
        <button
          onClick={() => handleEditContact("address")}
          className="mt-2 p-2 bg-[#F7941D] text-white rounded-lg"
        >
          {language === "en" ? "Edit Address" : "Хаяг өөрчлөх"}
        </button>
      </section>

      {editMode && (
        <div className="mt-6">
          <h3 className="text-xl mb-4">
            {language === "en"
              ? `Editing: ${editingField}`
              : `Засаж буй хэсэг: ${editingField}`}
          </h3>
          <input
            type="text"
            placeholder={
              language === "en" ? "Enter new value" : "Шинэ утга оруулна уу"
            }
            className="w-full p-3 border border-gray-300 rounded-lg"
            onChange={(e) => setErrorMessage("")}
          />
          <div className="mt-4">
            <button
              onClick={() => handleSaveChanges(editingField, "New Value")}
              className="p-2 bg-green-500 text-white rounded-lg"
            >
              {language === "en" ? "Save Changes" : "Өөрчлөлт хадгалах"}
            </button>
            <button
              onClick={handleCancelEdit}
              className="ml-2 p-2 bg-red-500 text-white rounded-lg"
            >
              {language === "en" ? "Cancel" : "Цуцлах"}
            </button>
          </div>
        </div>
      )}
    </div>
  ) : null;
};

export default AdminDashboard;
