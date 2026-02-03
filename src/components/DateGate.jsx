import { useState } from "react";

export default function DateGate({ onSuccess }) {
  const [date, setDate] = useState("");

  // 🔴 IMPORTANT: must be YYYY-MM-DD
  const correctDate = "2023-05-16"; // CHANGE THIS

  const handleSubmit = () => {
    if (date === correctDate) {
      localStorage.setItem("dateUnlocked", "true");
      onSuccess();
    } else {
      alert("Wrong date 💔");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center px-4">
      <div className="bg-zinc-900 w-full max-w-sm rounded-2xl p-6 text-center">
        <p className="text-sm text-gray-300 leading-relaxed">
          Do you remember…<br />
          the day we first met?
          Please enter the date.
        </p>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-4 w-full p-3 rounded-lg bg-black border border-gray-600 text-white"
        />

        <button
          onClick={handleSubmit}
          className="mt-6 w-full py-2.5 rounded-full border border-gray-500 text-gray-300
                     active:scale-95 transition hover:border-gray-300 hover:text-white"
        >
          Enter 💛
        </button>
      </div>
    </div>
  );
}
