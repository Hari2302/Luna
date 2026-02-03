import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HeartRain from "../components/HeartRain";

export default function StillLove() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState(null);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: "url('/Background.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65 pointer-events-none"></div>

      {/* Heart rain */}
      <HeartRain />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col text-white">

        {/* HEADER */}
        <header className="flex items-center justify-between px-4 py-4 sm:px-10">
          <img
            src="/Chan.jpg"
            alt="Me"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border border-white/30"
          />

          <h1 className="text-[22px] sm:text-base font-serif tracking-wider text-amber-400 opacity-90">
            A Realisation
          </h1>

          <img
            src="/Priya.jpg"
            alt="She"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border border-white/30"
          />
        </header>

        {/* MAIN CONTENT */}
        <section className="flex-1 flex items-center justify-center px-4 sm:px-10">
          <div className="w-full max-w-lg mx-auto text-center">
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed space-y-6">
              <span className="block">
                Namma romba kadhal pannom 💛  
                aana adhe alavukku  
                romba sanda pottom.
              </span>

              <span className="block">
                Naan pala nerangal-la  
                unna romba hurt pannirukken.  
                Romba azha vachirukken.
              </span>

              <span className="block">
                Andha nerangal-la  
                un feelings  
                evvalavu important nu  
                naan purinjikala.
              </span>

              <span className="block">
                Aana ippo…  
                naan adha  
                unmaiya  
                realize pannren 💛
              </span>
            </p>
          </div>
        </section>

        {/* PROMISE SECTION */}
        <section className="px-4 sm:px-10 pb-6 text-center">
          <div className="w-full max-w-md mx-auto">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed space-y-5">
              <span className="block">
                En future-la  
                nee irundhaa,  
                inime naan  
                apdi irukka maatten.
              </span>

              <span className="block">
                Un feelings-ku  
                full value kuduppen.  
                Unna purinjikittu,  
                calm-aa care pannuvaen.
              </span>

              <span className="block">
                Idhu oru promise illa…  
                idhu en manasoda  
                unmaiyaana maatram 💛
              </span>
            </p>
          </div>
        </section>

        {/* FINAL QUESTION */}
<section className="relative px-4 sm:px-6 pb-12 text-center">
  <div className="relative w-full max-w-md mx-auto">

    {/* HEART BORDER */}
    <svg
      viewBox="0 0 512 512"
      className="w-full h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M256 464s-176-104-176-240c0-61 48-112 112-112 40 0 64 24 64 24s24-24 64-24c64 0 112 51 112 112 0 136-176 240-176 240z"
        stroke="#fbbf24"
        strokeWidth="6"
      />
    </svg>

    {/* CONTENT INSIDE HEART */}
    <div className="absolute inset-0 flex items-center justify-center ">
      <div className="text-center ">

        <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
          Ippo-la<br />
          namma love<br />
          thirumba start pannuvomaa…?<br />
          Sanda podaama,<br />
          purinjikittu,<br />
          calm-aa irundhu 💛
        </p>

        {/* BUTTONS */}
        {!answer && (
          <div className="flex justify-center gap-4 ">
            <button
              onClick={() => setAnswer("yes")}
              className="px-6 py-2 rounded-full
                         border border-amber-400
                         text-amber-400 text-sm
                         active:scale-95 transition
                         hover:bg-amber-400 hover:text-black"
            >
              Yes 💛
            </button>

            <button
              onClick={() => setAnswer("no")}
              className="px-6 py-2 rounded-full
                         border border-red-500
                         text-red-500 text-sm
                         active:scale-95 transition
                         hover:text-white"
            >
              No 💔
            </button>
          </div>
        )}

        {/* RESPONSE */}
        {answer === "yes" && (
          <p className="mt-6 text-sm sm:text-base text-amber-300">
            Thank you so much 💛<br />
            Namma idha<br />
            azhaga nadathalaam.
          </p>
        )}

        {answer === "no" && (
          <p className="mt-6 text-sm sm:text-base text-gray-400">
            Okay…<br />
            Un decision-a<br />
            naan purinjikuren 💛
          </p>
        )}

      </div>
    </div>
  </div>
</section>


        {/* BACK BUTTON */}
        <div className="pb-10 text-center">
          <button
            onClick={() => navigate("/")}
            className="px-7 py-2.5 text-xs sm:text-sm rounded-full
                       border border-gray-500 text-gray-300
                       active:scale-95 transition
                       hover:border-gray-300 hover:text-white"
          >
            ← Back to Home
          </button>
        </div>

      </div>
    </div>
  );
}
