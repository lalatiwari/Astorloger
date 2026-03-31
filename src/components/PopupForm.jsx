// components/PopupForm.jsx
import React, { useState } from "react";

const PopupForm = () => {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      
      <div className="bg-red-600 w-96 p-6 rounded-xl relative text-center">

        <button 
          onClick={() => setOpen(false)}
          className="absolute right-3 top-2 text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-white text-2xl font-bold">
          Get Expert Advice
        </h2>

        <p className="text-white text-sm mb-4">
          One of the famous astrologers of Varanasi
        </p>

        <input className="w-full mb-2 p-2 rounded" placeholder="Name*" />
        <input className="w-full mb-2 p-2 rounded" placeholder="Phone*" />
        <input className="w-full mb-4 p-2 rounded" placeholder="Email" />

        <button className="w-full bg-black text-white py-2 rounded">
          Submit Now
        </button>

      </div>
    </div>
  );
};

export default PopupForm;