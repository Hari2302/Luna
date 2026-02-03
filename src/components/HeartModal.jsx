import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeartModal({ close }) {
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const correctDate = "2023-06-04";

  const submit = () => {
    if (date === correctDate) {
      setIsError(false);
      setMessage("You still remember… 💚");
      setTimeout(() => {
        navigate("/still-love");
      }, 800);
    } else {
      setIsError(true);
      setMessage(
        "You entered the wrong date 💔 Please message Chandru to get the correct one."
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-zinc-900 rounded-2xl p-6 text-center">
        
        {/* Title */}
            <p className="text-sm text-gray-300 leading-relaxed">
        Do you remember<br />
        when we met for the first time?🫂<br />
        Please enter the date.
      </p>


        {/* Date input */}
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            setMessage("");
          }}
          className="mt-5 w-full rounded-lg bg-black border border-gray-600 p-3 text-white"
        />

        {/* MESSAGE BELOW DATE */}
        {message && (
          <p
            className={`mt-3 text-xs ${
              isError ? "text-red-400" : "text-green-400"
            }`}
          >
            {message}
          </p>
        )}

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button onClick={close} className="text-xs text-gray-400">
            Close
          </button>
          <button onClick={submit} className="text-xs text-white">
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}
