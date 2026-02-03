const items = ["💛"];

export default function HeartRain() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {Array.from({ length: 30 }).map((_, i) => {
        const item = items[Math.floor(Math.random() * items.length)];

        return (
          <span
            key={i}
            className={`absolute animate-fall ${
              item === "Miss you a lot"
                ? "text-xs text-gray-400 font-light"
                : "text-red-500 opacity-30"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              fontSize:
                item === "Miss you a lot"
                  ? "12px"
                  : `${14 + Math.random() * 16}px`,
            }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
