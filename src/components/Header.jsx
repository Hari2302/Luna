import { useState } from "react";
import HeartModal from "./HeartModal";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full max-w-4xl mx-auto px-3 py-3 sm:px-6 sm:py-4 flex items-center justify-between">
        
        {/* LEFT NAME */}
        <span className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">
          Luna 💛 Nihan
        </span>

        {/* CENTER TITLE */}
        {/* <h1 className="flex items-center gap-1 sm:gap-2 text-sm sm:text-lg font-serif text-white tracking-wide text-center">
          Love
          <span className="text-green-400 animate-pulse">And</span>
          Letting Go
        </h1> */}

        {/* HEART BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-1 text-xs sm:text-sm text-white active:scale-90 transition whitespace-nowrap"
        >
          <span className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">Plz touch</span>
          <span className="text-lg sm:text-base">❤️</span>
        </button>
      </header>

      {open && <HeartModal close={() => setOpen(false)} />}
    </>
  );
}
