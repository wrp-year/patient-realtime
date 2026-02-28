"use client";

import { useState } from "react";
import { socket } from "@/lib/socket";

export default function PatientForm() {
  type PatientData = {
    firstName: string;
    lastName: string;
    phone: string;
  };
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    language: "",
    nationality: "",
    emergencyName: "",
    emergencyRelation: "",
    religion: "",
    status: "Typing",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const updated = {
      ...form,
      [e.target.name]: e.target.value,
      status: "Typing",
    };
    setForm(updated);
    socket.emit("patient-update", updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submitted = { ...form, status: "Submitted" };
    socket.emit("patient-update", submitted);
  };

  const inputStyle =
    "border border-gray-200 p-3 w-full rounded-lg outline-none text-gray-800 placeholder-gray-400 focus:border-teal-400 transition";

  const labelStyle = "block text-sm font-medium text-gray-600 mb-1";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-8 max-w-4xl mx-auto space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-700">
        Patient Information
      </h2>

      {/* Name Section */}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className={labelStyle}>First Name *</label>
          <input
            name="firstName"
            required
            placeholder="Enter first name"
            onChange={handleChange}
            className={inputStyle}
          />
        </div>

        <div>
          <label className={labelStyle}>
            Middle Name (optional)
          </label>
          <input
            name="middleName"
            placeholder="Enter middle name (if any)"
            onChange={handleChange}
            className={inputStyle}
          />
        </div>

        <div>
          <label className={labelStyle}>Last Name *</label>
          <input
            name="lastName"
            required
            placeholder="Enter last name"
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
      </div>

      {/* DOB & Gender */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={labelStyle}>Date of Birth *</label>
          <input
            type="date"
            name="dob"
            required
            onChange={handleChange}
            className={inputStyle}
          />
        </div>

        <div>
          <label className={labelStyle}>Gender *</label>
          <select
            name="gender"
            required
            onChange={handleChange}
            className={inputStyle}
          >
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      {/* Contact */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={labelStyle}>Phone Number *</label>
          <input
            name="phone"
            type="tel"
            pattern="[0-9]{9,10}"
            required
            placeholder="e.g. 0812345678"
            onChange={handleChange}
            className={inputStyle}
          />
        </div>

        <div>
          <label className={labelStyle}>Email *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="example@email.com"
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
      </div>

      {/* Address */}
      <div>
        <label className={labelStyle}>Address *</label>
        <textarea
          name="address"
          required
          placeholder="Enter full address"
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      {/* Language & Nationality */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={labelStyle}>Preferred Language *</label>
          <input
            name="language"
            required
            placeholder="e.g. Thai, English"
            onChange={handleChange}
            className={inputStyle}
          />
        </div>

        <div>
          <label className={labelStyle}>Nationality *</label>
          <input
            name="nationality"
            required
            placeholder="e.g. Thai"
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
      </div>

      {/* Emergency */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={labelStyle}>
            Emergency Contact Name (optional)
          </label>
          <input
            name="emergencyName"
            placeholder="Enter emergency contact name"
            onChange={handleChange}
            className={inputStyle}
          />
        </div>

        <div>
          <label className={labelStyle}>
            Relationship (optional)
          </label>
          <input
            name="emergencyRelation"
            placeholder="e.g. Father, Sister"
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
      </div>

      {/* Religion */}
      <div>
        <label className={labelStyle}>
          Religion (optional)
        </label>
        <input
          name="religion"
          placeholder="Enter religion (if any)"
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      <button className="bg-teal-500 hover:bg-teal-600 text-white p-3 w-full rounded-xl shadow-md transition">
        Submit
      </button>
    </form>
  );
}