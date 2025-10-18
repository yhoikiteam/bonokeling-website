"use client";
import Image from "next/image";
import Link from "next/link";
import { Zap, BookOpen, Music, Video, Star, ChevronLeft, ChevronRight, Package } from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Import Navbar
import Navbar from '@/components/Navbar'; 

// ----------------------------------------------------
// MOCK DATA KEARIFAN LOKAL
// ----------------------------------------------------
interface NilaiKearifan {
  id: number;
  title: string;
  icon: JSX.Element;
  description: string;
}

const kearifanLokal: NilaiKearifan[] = [
  {
    id: 1,
    title: "Mangabdi (Pengabdian)",
    icon: <Star size={40} className="text-[#D4A373]" />,
    description: "Filosofi inti berupa pengabdian tulus kepada Tuhan (Gusti Allah), leluhur, alam, dan sesama. Ini adalah landasan spiritual yang membentuk karakter Bonokeling.",
  },
  {
    id: 2,
    title: "Gotong Royong & Ikhlas",
    icon: <Zap size={40} className="text-[#D4A373]" />,
    description: "Semangat kebersamaan yang tinggi, terutama saat ritual adat (Perlon Unggahan/Turunan). Semua bekerja sama menyiapkan upacara tanpa pamrih (Budaya Ikhlas) dan saling gotong royong.",
  },
  {
    id: 3,
    title: "Ketahanan Pangan Lokal",
    icon: <Package size={40} className="text-[#D4A373]" />,
    description: "Kearifan menjaga hasil bumi dan pangan lokal (seperti Oyek dan Gesret) sebagai bentuk mitigasi kerawanan pangan. Simbolisasi keselarasan dengan alam.",
  },
  {
    id: 4,
    title: "Keleman (Kerahasiaan)",
    icon: <BookOpen size={40} className="text-[#D4A373]" />,
    description: "Menjaga kesakralan ajaran dan ritual dengan sifat kerahasiaan (Keleman), memastikan tradisi tetap murni dan tidak terintervensi oleh modernisasi atau pihak luar.",
  },
];

// MOCK DATA MACAPAT
const macapatData = {
    title: "Serat Sejarah Nabi: Macapat Bonokeling",
    excerpt: "Pembacaan Macapat Bonokeling memiliki ciri khas yang berbeda dari Macapat pada umumnya, menekankan pada keluhuran leluhur dan ajaran Eyang Bonokeling. Naskah ini adalah warisan turun-temurun yang kini diupayakan untuk dilestarikan melalui transliterasi.",
    videoUrl: "https://www.youtube.com/embed/UGAuIyL0h44",
    tembangExample: [
        {
            type: "Dhandhanggula (Contoh)",
            text: `
Padha gulangen ing kalbu,
Ing sasmita amrih lantip,
Aja pijer mangan nendra,
Karaketan lan dhendhening,
Mrih tan dadi wong edan,
Mangka sira wong kang linuwih.
            `,
            meaning: "Latihlah hati dan budi, agar peka terhadap isyarat, jangan hanya makan dan tidur, karena terikat pada hawa nafsu, agar tidak menjadi orang gila, sebab engkau adalah orang yang istimewa."
        },
    ]
}

// ----------------------------------------------------
// Framer Motion Variants
// ----------------------------------------------------
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 } 
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

// Variants untuk slider buku (3D flip effect)
const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    rotateY: direction > 0 ? 90 : -90,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    rotateY: direction < 0 ? 90 : -90,
    transition: { duration: 0.8, ease: "easeInOut" },
  }),
};

// ----------------------------------------------------
// Komponen Slider Kearifan
// ----------------------------------------------------
const KearifanSlider = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const currentIndex = ((page % kearifanLokal.length) + kearifanLokal.length) % kearifanLokal.length; // fix negatif index
    const item = kearifanLokal[currentIndex];

    const paginate = (newDirection: number) => setPage([page + newDirection, newDirection]);

    return (
        <div className="relative h-[400px] w-full max-w-2xl mx-auto perspective-1000">
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={page}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute top-0 left-0 w-full h-full p-8 rounded-xl shadow-2xl bg-black/60 backdrop-blur-sm border border-[#8B5E3C]/50 flex flex-col justify-center items-center text-center"
                >
                    <div className="mb-4 p-4 rounded-full bg-[#D4A373]/20">{item.icon}</div>
                    <h3 className="text-3xl font-extrabold text-[#D4A373] mb-3">{item.title}</h3>
                    <p className="text-gray-300 text-lg max-w-lg">{item.description}</p>
                    <div className="mt-6 text-sm font-semibold text-gray-500">
                        Halaman {currentIndex + 1} dari {kearifanLokal.length}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Tombol Navigasi */}
            <button className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 p-3 bg-white/10 text-white rounded-full hover:bg-[#D4A373]/70 transition" onClick={() => paginate(-1)} aria-label="Previous Page">
                <ChevronLeft size={24}/>
            </button>
            <button className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 p-3 bg-white/10 text-white rounded-full hover:bg-[#D4A373]/70 transition" onClick={() => paginate(1)} aria-label="Next Page">
                <ChevronRight size={24}/>
            </button>
        </div>
    );
};

// ----------------------------------------------------
// Halaman Utama ManegesPage
// ----------------------------------------------------
export default function ManegesPage() {
  const BG_IMAGE = "url('/images/bg-sec2.jpg')";

  return (
    <>
      <header className="w-full fixed top-0 z-50">
        <Navbar />
      </header>
      
      <section className="relative w-full overflow-hidden py-24 pt-32 min-h-screen" style={{
        backgroundImage: BG_IMAGE,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: '#111827',
      }}>
        <div className="absolute inset-0 bg-black/80 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.div className="mx-auto w-24 h-24 mb-4 relative" initial={{y:0}} animate={{y:[0,-10,0]}} transition={{duration:2,repeat:Infinity,ease:"easeInOut"}} whileHover={{scale:1.1,filter:"drop-shadow(0 0 10px #D4A373)"}}>
                <Image src="/images/iconbola/5.png" alt="Maneges Icon" fill className="object-contain"/>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-xl font-semibold text-[#D4A373] uppercase tracking-widest">Merenungi Ajaran Leluhur</motion.h2>
              <motion.p variants={itemVariants} className="mt-1 text-5xl font-extrabold text-white sm:text-6xl"><span className="text-[#8B5E3C]">MA</span>NEGES</motion.p>
              <motion.p variants={itemVariants} className="mt-4 text-gray-300 max-w-3xl mx-auto">
                Eksplorasi nilai-nilai luhur dan kearifan spiritual yang diwariskan oleh Eyang Bonokeling.
              </motion.p>
            </motion.div>

            {/* Slider Kearifan */}
            <div className="mb-20">
              <motion.h3 variants={itemVariants} className="text-3xl font-bold text-white text-center mb-10 border-b border-[#D4A373]/50 pb-4">
                Pilar Kearifan Komunitas
              </motion.h3>
              <KearifanSlider />
            </div>

            {/* Macapat */}
            <div className="bg-black/70 backdrop-blur-md p-10 rounded-xl shadow-2xl border border-[#8B5E3C]/50">
              <motion.h3 variants={itemVariants} className="text-3xl font-bold text-white mb-6 flex items-center justify-center">
                <Music size={30} className="text-[#D4A373] mr-3" />Tembang & Kidung Macapat
              </motion.h3>
              <motion.p variants={itemVariants} className="text-lg text-gray-300 text-center mb-8 max-w-4xl mx-auto">{macapatData.excerpt}</motion.p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <motion.div variants={itemVariants}>
                  <h4 className="text-2xl font-semibold text-[#D4A373] mb-4 flex items-center"><Video size={20} className="mr-2"/> Tonton Pembacaan Kidung</h4>
                  <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                    <iframe width="100%" height="100%" src={macapatData.videoUrl} title="Macapat Bonokeling" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"/>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">Sumber: YouTube, Macapat Naskah Bonokeling.</p>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-8 lg:mt-0">
                  <h4 className="text-2xl font-semibold text-[#D4A373] mb-4 flex items-center"><BookOpen size={20} className="mr-2"/> Contoh Tembang</h4>
                  <div className="bg-black/50 p-6 rounded-lg font-serif italic border border-[#8B5E3C]/50">
                    <p className="text-xl text-white font-bold mb-3 border-b border-gray-600 pb-2">{macapatData.tembangExample[0].type}</p>
                    <pre className="text-gray-200 whitespace-pre-wrap text-sm leading-relaxed mb-4">{macapatData.tembangExample[0].text.trim()}</pre>
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-md font-semibold text-[#D4A373] mb-1">Makna:</p>
                      <p className="text-gray-300 text-sm">{macapatData.tembangExample[0].meaning}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* CTA */}
            <motion.div className="text-center mt-20" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.8,duration:0.5}}>
              <Link href="/galeri" className="inline-flex items-center px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#8B5E3C] to-[#D4A373] shadow-2xl shadow-[#D4A373]/40 transition hover:brightness-110">
                Jelajahi Warisan Budaya Lainnya
                <ChevronRight size={20} className="ml-2"/>
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </>
  );
}
