"use client";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white shadow-sm">
      <h1 className="text-xl font-bold text-gray-700">
        HealthRealtime
      </h1>

      <div className="space-x-6 text-gray-600">
        <a href="/" className="hover:text-teal-600">Home</a>
        <a className="hover:text-teal-600">Account</a>
      </div>
    </div>
  );
}