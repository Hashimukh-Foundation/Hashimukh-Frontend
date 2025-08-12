import React, { useState } from "react";

export default function DevNoticeModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Modal box */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center transition-all duration-300 ease-in-out">
        <h2 className="text-lg font-semibold text-red-600 mb-2">
          🚧 Under Development 🚧
        </h2>
        <p className="text-gray-700 mb-4">
          This website is still under development. Some features may not work
          yet.
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200 cursor-pointer"
        >
          Ok. I understand.
        </button>
      </div>
    </div>
  );
}
