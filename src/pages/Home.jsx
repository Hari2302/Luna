import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import DateGate from "../components/DateGate";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("dateUnlocked");
    if (saved === "true") {
      setUnlocked(true);
    }
  }, []);

  return (
    <>
      {/* DATE GATE */}
      {!unlocked && (
        <DateGate
          onSuccess={() => {
            setUnlocked(true);
          }}
        />
      )}

      {/* HOME PAGE */}
      {unlocked && (
        <div
          className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: "url('/Background.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />

            <main className="flex-1 flex flex-col justify-center">
              <Hero />
              <AboutMe />
            </main>

            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
