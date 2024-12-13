import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-zinc-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-zinc-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full border-2 border-black bg-black text-white py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;