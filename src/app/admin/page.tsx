"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "admin123") {
      sessionStorage.setItem("isAdmin", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full p-3 bg-[#F7941D] text-white rounded-lg hover:bg-[#D87A14]"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
