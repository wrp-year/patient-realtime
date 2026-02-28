export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 items-center px-10 py-16">
      <div>
        <h2 className="text-4xl font-bold text-gray-700 mb-4">
          REAL-TIME PATIENT SYSTEM
        </h2>

        <p className="text-gray-500 mb-6">
          Modern healthcare registration system with live staff monitoring.
        </p>

        <button className="bg-teal-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-teal-600">
          Enter Info..
        </button>
      </div>

      <div className="flex justify-center">
        <div className="w-80 h-80 bg-teal-100 rounded-full"></div>
      </div>
    </div>
  );
}