export default function AboutMe() {
  return (
    <section className="w-full px-2 py-8  text-center">
      <div className="w-full max-w-sm sm:max-w-xl mx-auto">

        {/* MAIN LOVE CONTENT */}
        <p className="text-xl sm:text-5xl font-serif leading-relaxed text-white">
          Nee
          <br />
          un vaazhkaiyila
          <br />
          nadandhu varra
          <br />
          ovvoru naalum
          <br />
          sirippoda irukkanum.
          <br /><br />

          Un kanavugal
          <br />
          un kaiyila
          <br />
          nallaa niraiveranum.
          <br /><br />

          Kadhal,
          <br />
          amaidhi,
          <br />
          santhosam
          <br />
          ellam
          <br />
          un vaazhkaiyila
          <br />
          niramba vendum.
        </p>

        {/* SOFT NOTE */}
        <p className="mt-6 text-xs sm:text-base font-light leading-relaxed text-gray-300">
          Idhu
          <br />
          oru ninaivu illa.
          <br />
          Oru
          <br />
          nalla aasai.
          <br /><br />
          Un vaazhkai
          <br />
          eppavum
          <br />
          azhaga irukkanum.
        </p>

        {/* PDF DOWNLOAD */}
        <a
          href="/Love.pdf"
          download
          className="
            inline-block
            mt-8
            px-7
            py-3
            rounded-full
            border
            border-gray-600
            text-[11px]
            sm:text-sm
            text-gray-300
            active:scale-95
            transition
            hover:border-gray-400
            hover:text-white
          "
        >
          With love 💚
        </a>

      </div>
    </section>
  );
}
