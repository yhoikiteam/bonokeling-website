"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface EventCardData {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
}

const mockEvents: EventCardData[] = [
  { id: 1, title: "Makam Banokeling", subtitle: "Makam Kyai Bonokeling yang ber...", imageUrl: "/images/event/makam-bonokeling.jpg" },
  { id: 2, title: "Tempat Pembakar Kemenyan", subtitle: "Tercium wangi harum tiap...", imageUrl: "/images/event/pembakar-kemenyan.jpg" },
  { id: 3, title: "Perlon Unggahan", subtitle: "Dilaksanakan untuk menyambut bulan...", imageUrl: "/images/event/perlon-unggahan.jpg" },
  { id: 4, title: "Memasak Bersama", subtitle: "Diselenggarakan bersamaan", imageUrl: "/images/event/memasak-bersama.jpg" },
  { id: 5, title: "Acara Lain", subtitle: "Konten Tambahan 1...", imageUrl: "/images/event/placeholder1.jpg" },
  { id: 6, title: "Acara Lagi", subtitle: "Konten Tambahan 2...", imageUrl: "/images/event/placeholder2.jpg" },
  { id: 7, title: "Event Tambahan", subtitle: "Konten Tambahan 3...", imageUrl: "/images/event/placeholder3.jpg" },
];

const EventCard = ({ title, subtitle, imageUrl }: EventCardData) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 163, 115, 0.7)" }}
    transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
    viewport={{ once: true, amount: 0.3 }}
    className="inline-block bg-[#D4A373] w-[80vw] sm:w-[50vw] md:w-[25vw] lg:w-[300px] flex-shrink-0 mx-2 md:mx-4 relative h-[450px] rounded-xl cursor-pointer overflow-hidden"
  >
    <Image
      src={imageUrl}
      alt={title}
      layout="fill"
      objectFit="cover"
      className="rounded-xl transition-transform duration-500"
    />
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <h3 className="text-2xl font-bold mb-1 drop-shadow-lg leading-tight">{title}</h3>
      <p className="text-sm text-gray-200 drop-shadow-md">{subtitle}</p>
    </div>
  </motion.div>
);

export default function CardSliderSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 350; // px per klik

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full overflow-hidden py-16 flex justify-center"
      style={{
        backgroundImage: "url('/images/bg-sec2.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      {/* Tombol kiri */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Tombol kanan */}
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="relative z-10 w-full max-w-7xl flex overflow-x-scroll snap-x snap-mandatory hide-scrollbar pb-4 px-4"
      >
        <div className="flex-shrink-0 w-8 md:w-16"></div>

        {mockEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}

        <div className="flex-shrink-0 w-8 md:w-16"></div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scroll-snap-align-start {
          scroll-snap-align: start;
        }
      `}</style>
    </section>
  );
}
