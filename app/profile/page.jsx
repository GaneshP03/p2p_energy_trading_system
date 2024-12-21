"use client";
import axios from "axios";
import Wallet from "@/components/Wallet";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md w-full flex justify-between px-8 py-4 items-center">
        <button
          onClick={logout}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
        >
          Log Out
        </button>
        <Wallet />
      </nav>

      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Profile Page
          </h1>

          <h3 className="text-lg font-semibold text-center text-gray-700 mt-4 mb-6">
            {" "}
          </h3>

          <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition mb-4">
            Buy Energy
          </button>

          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Sell Energy
          </button>
        </div>
      </div>
    </div>
  );
}
