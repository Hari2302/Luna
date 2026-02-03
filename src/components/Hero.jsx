import { useState } from "react";
import VideoModal from "./VideoModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full px-3 py-10 sm:py-24 text-center">

<h2 className="text-xl sm:text-5xl font-serif leading-relaxed text-white">
  தூரத்தில் இருந்தாலும்,
  <br />
  நம்ம மனசு
  <br />
  எப்பவும்
  <br />
  ஒன்றாகத்தான் 💛
</h2>


      {/* CONTENT WRAPPER */}
      <div className="w-full max-w-md sm:max-w-2xl mx-auto">

        {/* VIDEO BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="
            mt-10
            px-7
            py-3
            text-sm
            sm:text-base
            border
            border-gray-500
            rounded-full
            text-gray-300
            active:scale-95
            transition
          "
        >
          கடைசி வீடியோ
        </button>

        {/* NOTE */}
        <p className="mt-6 text-xs sm:text-base font-light leading-relaxed text-gray-300">
          Indha website
          <br />
          oru kaadhal kaditham maadhiri.
          <br /><br />

          Ithu yaaraiyum
          impress panna illa 💖,
          <br />
          future-la
          <br />
          en life-ku varappora
          <br />
          oru pennukaga mattum.
        </p>

      </div>

      {/* VIDEO MODAL */}
      {open && <VideoModal close={() => setOpen(false)} />}
    </section>
  );
}
