export default function VideoModal({ close }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">
      <div className="relative w-full max-w-md">

        <video
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full rounded-xl"
        >
          {/* ✅ CORRECT PATH */}
          <source src="/VedioBr.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <button
          onClick={close}
          className="mt-4 text-gray-400 text-sm mx-auto block"
        >
          Close
        </button>

      </div>
    </div>
  );
}
