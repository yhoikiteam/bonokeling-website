"use client";
import Image from "next/image";
import Link from "next/link";
import { Zap, BookOpen, Music, Video, Star, ChevronLeft, ChevronRight, Package, Heart, Church, Hand, Home, Compass } from "lucide-react";
import { motion, Variants } from "framer-motion"; 
import { useState } from "react";

// ASUMSI: Import Navbar dari path yang sesuai
import Navbar from '@/components/Navbar'; 

// ----------------------------------------------------
// MOCK DATA SISTEM RELIGI (MANEMBAH)
// ----------------------------------------------------
interface KonsepReligi {
  id: number;
  title: string;
  icon: JSX.Element;
  description: string;
}

const pilarManembah: KonsepReligi[] = [
  {
    id: 1,
    title: "Gusti Sing Maha Kuasa",
    icon: <Church size={30} className="text-[#D4A373]" />,
    description: "Keyakinan sentral pada Tuhan Yang Maha Esa ('Sing Gawe Urip'). Seluruh Manembah dan ritual ditujukan sebagai bentuk bakti kepada-Nya.",
  },
  {
    id: 2,
    title: "Manages (Tanpa Perantara)",
    icon: <Hand size={30} className="text-[#D4A373]" />,
    description: "Ajaran luhur bahwa hubungan spiritual tertinggi manusia (kawula) dengan Tuhan (Gusti) adalah langsung (*Manunggaling Kawula Gusti*).",
  },
  {
    id: 3,
    title: "Kyai Bonokeling (Perantara Doa)",
    icon: <Star size={30} className="text-[#D4A373]" />,
    description: "Eyang Kyai Bonokeling dihormati sebagai leluhur utama yang arwahnya dipercaya menjadi perantara penyambung doa anak putu kepada Gusti Allah.",
  },
  {
    id: 4,
    title: "Olah Batin & Prihatin",
    icon: <Heart size={30} className="text-[#D4A373]" />,
    description: "Inti ibadah terletak pada olah batin dan kesucian jiwa (*Olah Rasa*), yang diwujudkan melalui laku prihatin (seperti berjalan kaki tanpa alas kaki saat Unggahan) dan ritual *Muji* (zikir).",
  },
];

const tempatIbadah: KonsepReligi[] = [
    {
        id: 1,
        title: "Bale Pasemuan",
        icon: <Home size={30} className="text-gray-300" />,
        description: "Tempat suci utama untuk berkumpul dan 'memuji' (semacam zikir) serta melakukan pertemuan ritual adat. Tidak semua orang boleh memasukinya (dijaga kesakralannya).",
    },
    {
        id: 2,
        title: "Bale Malang",
        icon: <Home size={30} className="text-gray-300" />,
        description: "Tempat yang digunakan untuk jamuan (*Ambeng* atau *Tumpeng*) dan acara-acara komunal yang mengiringi ritual adat besar seperti Unggahan dan Turunan.",
    },
    {
        id: 3,
        title: "Makam Kyai Bonokeling",
        icon: <Compass size={30} className="text-gray-300" />,
        description: "Pusat ziarah dan ritual utama. Ziarah ke makam leluhur dilakukan sebagai wujud penghormatan dan memohon restu sebelum menjalani bulan suci.",
    },
]


// ----------------------------------------------------

// Framer Motion Variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut", 
      staggerChildren: 0.1 
    } 
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Komponen Card Sederhana untuk Pilar dan Tempat
const ManembahCard = ({ konsep }: { konsep: KonsepReligi }) => {
    return (
        <motion.div 
            variants={itemVariants}
            className="bg-black/50 backdrop-blur-sm p-6 rounded-xl shadow-xl transition-all duration-300 border-l-4 border-[#D4A373] hover:bg-black/70 flex flex-col items-start"
        >
            <div className="p-3 bg-[#D4A373]/20 rounded-full mb-3">
                {konsep.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{konsep.title}</h3>
            <p className="text-gray-300 text-sm flex-grow">{konsep.description}</p>
        </motion.div>
    );
};


// Komponen Utama Page Manembah
export default function ManembahPage() {
  const BG_IMAGE = "url('/images/bg-sec3.jpg')"; // Asumsi gambar latar baru untuk konsistensi

  return (
    <>
      {/* PANGGIL KOMPONEN NAVBAR SEBAGAI FIXED HEADER */}
      <header className="w-full fixed top-0 z-50">
        <Navbar />
      </header>
      
      <section
        className="relative w-full overflow-hidden py-24 pt-32 min-h-screen" 
        style={{
          backgroundImage: BG_IMAGE,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', 
          backgroundColor: '#111827',
        }}
      >
        {/* Overlay Gelap */}
        <div className="absolute inset-0 bg-black/80 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Konten Utama dengan Animasi Framer Motion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header Section */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.div 
                className="mx-auto w-24 h-24 mb-4 relative"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }} // Animasi mengambang
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 10px #D4A373)" }} 
              >
                  <Image
                      src="/images/iconbola/3.png" // Ikon Bola yang Konsisten
                      alt="Manembah Icon"
                      layout="fill" 
                      objectFit="contain"
                  />
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="text-xl font-semibold text-[#D4A373] uppercase tracking-widest">
                Sistem Religi & Pemujaan
              </motion.h2>
              <motion.p variants={itemVariants} className="mt-1 text-5xl font-extrabold text-white sm:text-6xl">
                <span className="text-[#8B5E3C]">MA</span>NEMBAH
              </motion.p>
              <motion.p variants={itemVariants} className="mt-4 text-gray-300 max-w-3xl mx-auto">
                Mengeksplorasi praktik ibadah dan tata cara menyembah Tuhan Yang Maha Esa menurut ajaran Eyang Bonokeling.
              </motion.p>
            </motion.div>

            {/* Bagian 1: Pilar Utama Manembah */}
            <div className="mb-20">
                <motion.h3 variants={itemVariants} className="text-3xl font-bold text-white text-center mb-10 border-b border-[#D4A373]/50 pb-4">
                    4 Pilar Ajaran Spiritual
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pilarManembah.map((konsep) => (
                        <ManembahCard key={konsep.id} konsep={konsep} />
                    ))}
                </div>
            </div>

            {/* Bagian 2: Upacara Adat sebagai Wujud Ibadah */}
            <div className="bg-black/70 backdrop-blur-md p-10 rounded-xl shadow-2xl border border-[#8B5E3C]/50 mb-20">
                <motion.h3 variants={itemVariants} className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center">
                    <Zap size={30} className="text-[#D4A373] mr-3" />
                    Ritual Akbar: Wujud Pemujaan Kolektif
                </motion.h3>
                
                <p className="text-lg text-gray-300 text-center mb-8 max-w-4xl mx-auto">
                    Manembah diwujudkan tidak hanya secara individu, tetapi melalui ritual komunal yang sarat makna dan melibatkan seluruh anak putu Bonokeling.
                </p>

                <div className="space-y-6">
                    <RitualItem 
                        title="Perlon Unggahan (Menyambut Ramadan)" 
                        description="Ritual terbesar yang melibatkan *Laku Mlampah* (berjalan kaki tanpa alas kaki) puluhan kilometer sambil membawa hasil bumi. Dimaknai sebagai olah rasa, prihatin, dan pembersihan diri sebelum bulan puasa (sadran)."
                        icon={<Hand size={24} className="text-white" />}
                    />
                    <RitualItem 
                        title="Perlon Turunan (Setelah Syawal)" 
                        description="Dilakukan setelah Idul Fitri (sering disebut *Ba'da Riaya*). Sebagai wujud syukur atas panen dan menghormati usainya bulan puasa. Meliputi ziarah, bersih makam (*Rikat*), dan makan bersama di Bale Malang."
                        icon={<BookOpen size={24} className="text-white" />}
                    />
                     <RitualItem 
                        title="Sedekah Bumi (Bulan Apit/Dzulqaidah)" 
                        description="Tradisi tahunan untuk bersyukur atas hasil pertanian dan memohon keselamatan. Diisi dengan kenduri doa bersama dan pentas wayang kulit semalam suntuk sebagai hiburan komunal."
                        icon={<Package size={24} className="text-white" />}
                    />
                </div>
            </div>

             {/* Bagian 3: Tempat Ibadah Sakral */}
            <div className="mb-20">
                <motion.h3 variants={itemVariants} className="text-3xl font-bold text-white text-center mb-10 border-b border-[#D4A373]/50 pb-4">
                    Lokasi Sakral (Pusat Manembah)
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tempatIbadah.map((konsep) => (
                        <ManembahCard key={konsep.id} konsep={konsep} />
                    ))}
                </div>
            </div>


            {/* CTA Penutup */}
            <motion.div 
                className="text-center mt-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            >
                <Link 
                    href="/galeri" 
                    className="inline-flex items-center px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#8B5E3C] to-[#D4A373] shadow-2xl shadow-[#D4A373]/40 transition hover:brightness-110"
                >
                    Lihat Galeri Ritual Bonokeling
                    <ChevronRight size={20} className="ml-2" />
                </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </>
  );
}

// Komponen Pembantu untuk Daftar Ritual
const RitualItem = ({ title, description, icon }) => {
    return (
        <motion.div 
            variants={itemVariants}
            className="flex items-start p-4 bg-black/50 rounded-lg border border-gray-700 hover:border-[#D4A373]/50 transition-all duration-300"
        >
            <div className="p-3 bg-[#8B5E3C] rounded-full flex-shrink-0 mr-4">
                {icon}
            </div>
            <div>
                <h4 className="text-xl font-semibold text-white">{title}</h4>
                <p className="text-gray-400 text-sm mt-1">{description}</p>
            </div>
        </motion.div>
    );
};