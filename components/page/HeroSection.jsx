"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const bolaNames = ["Maguru", "Mangabdi", "Manembah", "Makarya", "Manages"];
  const bolaIcons = [
    "/images/iconbola/1.png",
    "/images/iconbola/2.png",
    "/images/iconbola/3.png",
    "/images/iconbola/4.png",
    "/images/iconbola/5.png",
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay Gradasi */}
      <div className="absolute inset-0 bg-gradient-to-b backdrop-blur-[2px] pointer-events-none" />

      {/* Kontainer Utama */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between max-w-7xl w-full px-4 md:px-10 gap-10">

        {/* === DIV TEXT === */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="order-1 md:order-3 text-center md:text-left max-w-sm flex flex-col justify-center -translate-y-2 md:-translate-y-12"
        >
          <h2 className="text-white text-4xl md:text-6xl font-bold tracking-wide mb-2 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
            Ngaji
          </h2>

          <h1 className="text-[#D4A373] text-4xl md:text-6xl font-bold tracking-wide mb-4 drop-shadow-[0_0_15px_rgba(212,163,115,0.3)]">
            BonoKeling
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            Sosok penjaga alam dari{" "}
            <span className="text-[#D4A373] font-semibold">tanah purba</span>{" "}
            yang membawa{" "}
            <span className="text-[#D4A373] font-semibold">keseimbangan</span>{" "}
            dan kebijaksanaan dalam setiap{" "}
            <span className="text-[#D4A373] font-semibold">energi suci</span>{" "}
            yang ia pancarkan ke seluruh penjuru bumi.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#3b2a1a] to-[#D4A373] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-200 mx-auto md:mx-0"
          >
            Mulai Ngaji
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* === DIV KARAKTER === */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="order-2 flex flex-col items-center justify-center md:-translate-y-6"
        >
          <Image
            src="/images/karakter.png"
            alt="Karakter Bonokeling"
            width={220}
            height={220}
            priority
            className="object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          />
        </motion.div>

        {/* === DIV SEMUA BOLA === */}
        <div className="order-3 md:order-1 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-28 md:-translate-y-10">

          {/* --- 3 Bola Kiri --- */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-row md:flex-col items-center justify-center gap-5"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="flex flex-col items-center relative group"
              >
                <motion.div
                  className="relative w-[120px] h-[120px] md:w-[130px] md:h-[130px] rounded-full bg-gradient-to-tr from-[#D4A373]/50 to-[#3b2a1a]/50 shadow-md group-hover:shadow-[0_0_30px_8px_rgba(212,163,115,0.6)] transition-all duration-300 hover:scale-105 flex items-center justify-center overflow-hidden"
                  animate={{
                    y: [0, -8 - i * 2, 0, 6 + i * 2],
                    x: [0, 4 + i, -3 - i, 0],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={bolaIcons[i]}
                    alt={`Icon Bola ${i + 1}`}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </motion.div>
                <span className="mt-2 text-white font-semibold text-sm drop-shadow-lg select-none">
                  {bolaNames[i]}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* --- 2 Bola Kanan --- */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-row md:flex-col items-center justify-center gap-5"
          >
            {[3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + (i - 3) * 0.2, duration: 0.5 }}
                className="flex flex-col items-center relative group"
              >
                <motion.div
                  className="relative w-[120px] h-[120px] md:w-[130px] md:h-[130px] rounded-full bg-gradient-to-tr from-[#D4A373]/50 to-[#3b2a1a]/50 shadow-md group-hover:shadow-[0_0_30px_8px_rgba(212,163,115,0.6)] transition-all duration-300 hover:scale-105 flex items-center justify-center overflow-hidden"
                  animate={{
                    y: [0, -6 - (i - 3) * 2, 0, 5 + (i - 3) * 2],
                    x: [0, 3 + (i - 3), -2 - (i - 3), 0],
                  }}
                  transition={{
                    duration: 4 + (i - 3) * 0.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={bolaIcons[i]}
                    alt={`Icon Bola ${i + 1}`}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </motion.div>
                <span className="mt-2 text-white font-semibold text-sm drop-shadow-lg select-none">
                  {bolaNames[i]}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
