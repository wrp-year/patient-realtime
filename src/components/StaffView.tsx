"use client";

import { useEffect, useState } from "react";
import { socket } from "@/lib/socket";

type PatientData = {
  firstName: string;
  middleName?: string;
  lastName: string;
  dob?: string;
  gender?: string;
  phone?: string;
  email?: string;
  address?: string;
  language?: string;
  nationality?: string;
  emergencyName?: string;
  emergencyRelation?: string;
  religion?: string;
  status?: string;
};

export default function StaffView() {
  const [data, setData] = useState<PatientData>({
    firstName: "",
    lastName: "",
  });

  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => setConnected(true));
    socket.on("disconnect", () => setConnected(false));

    socket.on("patient-data", (incoming: PatientData) => {
      setData(incoming);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("patient-data");
    };
  }, []);

  const inputStyle =
    "border border-gray-200 p-3 w-full rounded-lg bg-gray-50 text-gray-800";

  const labelStyle = "block text-sm font-medium text-gray-600 mb-1";

  const getStatusColor = () => {
    if (data.status === "Submitted") return "bg-green-500";
    if (data.status === "Typing") return "bg-yellow-500";
    return "bg-gray-400";
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 to-emerald-50 p-6">
      <form className="bg-white shadow-xl rounded-2xl p-8 max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-700">
            Staff Monitor
          </h2>

          <div className="flex gap-3">
            <span
              className={`px-3 py-1 rounded-full text-white text-sm ${
                connected ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {connected ? "Connected" : "Disconnected"}
            </span>

            <span
              className={`px-3 py-1 rounded-full text-white text-sm ${getStatusColor()}`}
            >
              {data.status || "Waiting"}
            </span>
          </div>
        </div>

        {/* Name Section */}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className={labelStyle}>First Name</label>
            <input value={data.firstName} readOnly className={inputStyle} />
          </div>

          <div>
            <label className={labelStyle}>Middle Name</label>
            <input value={data.middleName ?? ""} readOnly className={inputStyle} />
          </div>

          <div>
            <label className={labelStyle}>Last Name</label>
            <input value={data.lastName} readOnly className={inputStyle} />
          </div>
        </div>

        {/* DOB & Gender */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className={labelStyle}>Date of Birth</label>
            <input value={data.dob ?? ""} readOnly className={inputStyle} />
          </div>

          <div>
            <label className={labelStyle}>Gender</label>
            <input value={data.gender ?? ""} readOnly className={inputStyle} />
          </div>
        </div>

        {/* Contact */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className={labelStyle}>Phone Number</label>
            <input value={data.phone ?? ""} readOnly className={inputStyle} />
          </div>

          <div>
            <label className={labelStyle}>Email</label>
            <input value={data.email ?? ""} readOnly className={inputStyle} />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className={labelStyle}>Address</label>
          <textarea
            value={data.address ?? ""}
            readOnly
            className={inputStyle}
          />
        </div>

        {/* Language & Nationality */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className={labelStyle}>Preferred Language</label>
            <input value={data.language ?? ""} readOnly className={inputStyle} />
          </div>

          <div>
            <label className={labelStyle}>Nationality</label>
            <input value={data.nationality ?? ""} readOnly className={inputStyle} />
          </div>
        </div>

        {/* Emergency */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className={labelStyle}>Emergency Contact Name</label>
            <input value={data.emergencyName ?? ""} readOnly className={inputStyle} />
          </div>

          <div>
            <label className={labelStyle}>Relationship</label>
            <input value={data.emergencyRelation ?? ""} readOnly className={inputStyle} />
          </div>
        </div>

        {/* Religion */}
        <div>
          <label className={labelStyle}>Religion</label>
          <input value={data.religion ?? ""} readOnly className={inputStyle} />
        </div>
      </form>
    </div>
  );
}