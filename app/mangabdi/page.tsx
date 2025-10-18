"use client";
import Image from "next/image";
import Link from "next/link";
import { Zap, Hand, Heart, Leaf, Users, ChevronRight, Star, Lock } from "lucide-react";
import { motion, Variants, easeInOut } from "framer-motion"; 
import Navbar from '@/components/Navbar';

// ----------------------------------------------------
// Interface untuk data pengabdian
// ----------------------------------------------------
interface PengabdianItem {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}

// ----------------------------------------------------
// Data Pilar Utama Mangabdi
// ----------------------------------------------------
const pilarMangabdi: PengabdianItem[] = [
  {
    id: 1,
    title: "Tulus kepada Gusti",
    icon: <Zap size={30} className="text-[#D4A373]" />,
    description: "Pengabdian tertinggi dan murni kepada Tuhan Yang Maha Esa ('Sing Gawe Urip'). Diwujudkan melalui Manembah dan menjaga kesucian batin (Olah Rasa).",
  },
  {
    id: 2,
    title: "Hormat kepada Leluhur",
    icon: <Star size={30} className="text-[#D4A373]" />,
    description: "Bakti dan penghormatan melalui ritual ziarah, terutama pada upacara Perlon Unggahan dan Turunan di Makam Kyai Bonokeling.",
  },
  {
    id: 3,
    title: "Selaras dengan Alam",
    icon: <Leaf size={30} className="text-[#D4A373]" />,
    description: "Pengabdian dalam bentuk menjaga kelestarian lingkungan dan ketahanan pangan lokal, seperti melestarikan pangan seperti Oyek dan Gesret.",
  },
  {
    id: 4,
    title: "Gotong Royong Sesama",
    icon: <Users size={30} className="text-[#D4A373]" />,
    description: "Semangat kebersamaan dan tolong-menolong tanpa pamrih (ikhlas) saat mempersiapkan dan melaksanakan seluruh upacara adat.",
  },
];

// ----------------------------------------------------
// Data Praktik Harian Mangabdi
// ----------------------------------------------------
const praktikMangabdi: PengabdianItem[] = [
  {
    id: 1,
    title: "Memelihara Keleman",
    icon: <Lock size={30} className="text-gray-300" />,
    description: "Bentuk pengabdian untuk menjaga kemurnian ajaran dengan bersikap 'Keleman' (kerahasiaan) agar tradisi tetap sakral.",
  },
  {
    id: 2,
    title: "Menolak Mo Limo",
    icon: <Hand size={30} className="text-gray-300" />,
    description: "Pengabdian diri untuk menjaga moral dan etika dengan menjauhi lima larangan: madat, maling, madon, mabuk, dan main (judi).",
  },
  {
    id: 3,
    title: "Laku Mlampah",
    icon: <Zap size={30} className="text-gray-300" />,
    description: "Ritual berjalan kaki tanpa alas kaki puluhan kilometer saat Unggahan, sebagai simbol olah batin dan kesungguhan dalam berbakti.",
  },
];

// ----------------------------------------------------
// Framer Motion Variants
// ----------------------------------------------------
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: easeInOut,
      staggerChildren: 0.1 
    } 
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
};

// ----------------------------------------------------
// Komponen Card
// ----------------------------------------------------
const MangabdiCard = ({ item }: { item: PengabdianItem }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="bg-black/50 backdrop-blur-sm p-6 rounded-xl shadow-xl transition-all duration-300 border-l-4 border-[#D4A373] hover:bg-black/70 flex flex-col items-start"
    >
      <div className="p-3 bg-[#D4A373]/20 rounded-full mb-3">
        {item.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
      <p className="text-gray-300 text-sm flex-grow">{item.description}</p>
    </motion.div>
  );
};

// ----------------------------------------------------
// Komponen Halaman Utama
// ----------------------------------------------------
export default function MangabdiPage() {
  const BG_IMAGE = "url('/images/bg-sec4.jpg')";

  return (
    <>
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
        <div className="absolute inset-0 bg-black/80 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
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
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: easeInOut }}
                whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 10px #D4A373)" }} 
              >
                <Image
                  src="/images/iconbola/2.png" 
                  alt="Mangabdi Icon"
                  fill
                  className="object-contain"
                />
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="text-xl font-semibold text-[#D4A373] uppercase tracking-widest">
                Filosofi Hidup
              </motion.h2>
              <motion.p variants={itemVariants} className="mt-1 text-5xl font-extrabold text-white sm:text-6xl">
                <span className="text-[#8B5E3C]">MA</span>NGABDI
              </motion.p>
              <motion.p variants={itemVariants} className="mt-4 text-gray-300 max-w-3xl mx-auto">
                Pengabdian tulus, adalah kunci harmoni dan ajaran leluhur yang mencakup seluruh aspek kehidupan komunitas Bonokeling.
              </motion.p>
            </motion.div>

            {/* Bagian 1: Pilar Utama Pengabdian */}
            <div className="mb-20">
              <motion.h3 variants={itemVariants} className="text-3xl font-bold text-white text-center mb-10 border-b border-[#D4A373]/50 pb-4">
                4 Bentuk Utama Mangabdi
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {pilarMangabdi.map((item) => (
                  <MangabdiCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Bagian 2: Praktik Harian */}
            <div className="bg-black/70 backdrop-blur-md p-10 rounded-xl shadow-2xl border border-[#D4A373]/50 mb-20">
              <motion.h3 variants={itemVariants} className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center">
                <Heart size={30} className="text-[#D4A373] mr-3" />
                Praktik Pengabdian Harian
              </motion.h3>
              
              <p className="text-lg text-gray-300 text-center mb-8 max-w-4xl mx-auto">
                Mangabdi tidak hanya pada ritual, tetapi terwujud dalam laku hidup, etika, dan nilai-nilai moral sehari-hari.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {praktikMangabdi.map((item) => (
                  <motion.div 
                    key={item.id}
                    variants={itemVariants}
                    className="bg-black/50 p-6 rounded-xl shadow-lg border-t-4 border-[#D4A373]/70"
                  >
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-[#D4A373] rounded-full mr-3 flex-shrink-0">
                        {item.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                    </div>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
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
                href="/makarya"
                className="inline-flex items-center px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#8B5E3C] to-[#D4A373] shadow-2xl shadow-[#D4A373]/40 transition hover:brightness-110"
              >
                Lanjutkan ke Filosofi Makarya
                <ChevronRight size={20} className="ml-2" />
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </>
  );
}
