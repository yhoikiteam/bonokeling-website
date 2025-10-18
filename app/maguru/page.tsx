"use client";
import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronRight, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion"; // Import motion dari framer-motion

// ASUMSI: Import Navbar dari path yang sesuai
import Navbar from '@/components/Navbar'; 

// ----------------------------------------------------
// MOCK DATA & TYPES
// ----------------------------------------------------
interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  tag: string;
  imageUrl: string;
}

const mockArticles: Article[] = [
  {
    id: 1,
    title: "Filosofi 'Maguru' Bonokeling: Menemukan Guru Sejati",
    excerpt: "Memahami makna mendalam dari konsep Maguru dalam ajaran Bonokeling, yang tidak hanya merujuk pada guru fisik, tetapi juga guru spiritual.",
    author: "Redaksi Bonokeling",
    date: "15 Okt 2024",
    tag: "Filosofi",
    imageUrl: "/images/maguru-thumb-1.jpg",
  },
  {
    id: 2,
    title: "Tiga Pilar Kebijaksanaan: Integrasi Manembah dan Makarya",
    excerpt: "Bagaimana cara menyelaraskan aspek spiritual (Manembah) dan kerja keras (Makarya) dalam kehidupan sehari-hari ala Bonokeling.",
    author: "Tim Ngaji",
    date: "10 Okt 2024",
    tag: "Etika Hidup",
    imageUrl: "/images/maguru-thumb-2.jpg",
  },
  {
    id: 3,
    title: "Warisan Leluhur: Mengenal Lebih Dekat Adat Bonokeling",
    excerpt: "Jelajahi ritual, tradisi, dan makna simbolis di balik upacara adat yang masih dipegang teguh oleh komunitas Bonokeling.",
    author: "Pakar Budaya",
    date: "05 Okt 2024",
    tag: "Sejarah",
    imageUrl: "/images/maguru-thumb-3.jpg",
  },
  {
    id: 4,
    title: "Mengabdi Lewat Karya: Prinsip Mangabdi dalam Bisnis Modern",
    excerpt: "Aplikasi nilai-nilai Mangabdi (pengabdian) untuk menciptakan usaha yang tidak hanya profit, tetapi juga memberikan manfaat sosial.",
    author: "Admin",
    date: "01 Okt 2024",
    tag: "Makarya",
    imageUrl: "/images/maguru-thumb-4.jpg",
  },
  {
    id: 5,
    title: "Panduan Praktis Meditasi ala Bonokeling",
    excerpt: "Langkah-langkah untuk mencapai Manembah sejati melalui teknik meditasi yang diajarkan oleh leluhur Bonokeling.",
    author: "Guru Spiritual",
    date: "25 Sep 2024",
    tag: "Filosofi",
    imageUrl: "/images/maguru-thumb-5.jpg",
  },
];

const popularTags = ["Filosofi", "Etika Hidup", "Sejarah", "Tradisi", "Makarya", "Keseimbangan"];
// ----------------------------------------------------

// Komponen Card Artikel (Sama seperti sebelumnya)
const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Link 
      href={`/maguru/artikel/${article.id}`} 
      className="block bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transition-all duration-300 border border-[#8B5E3C]/40 hover:border-[#D4A373] hover:shadow-[#D4A373]/20"
    >
      <div className="md:flex">
        {/* Gambar Thumbnail */}
        <div className="relative w-full h-48 md:w-56 md:h-auto flex-shrink-0">
          <Image
            src={article.imageUrl}
            alt={article.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        {/* Konten Artikel */}
        <div className="p-5 flex flex-col justify-between">
          <div className="mb-3">
            <span className="inline-flex items-center text-xs font-semibold text-white px-3 py-1 rounded-full bg-gradient-to-r from-[#8B5E3C] to-[#D4A373]">
              <Tag size={12} className="mr-1" />
              {article.tag}
            </span>
            <h3 className="mt-2 text-2xl font-bold text-white leading-snug hover:text-[#D4A373] transition-colors">
              {article.title}
            </h3>
            <p className="mt-2 text-gray-300 text-sm line-clamp-3">
              {article.excerpt}
            </p>
          </div>
          
          {/* Footer Info */}
          <div className="flex items-center justify-between text-xs text-gray-400 mt-4 pt-3 border-t border-[#8B5E3C]/50">
            <div className="flex items-center gap-3">
              <span>Oleh: <span className="text-[#D4A373] font-medium">{article.author}</span></span>
              <span className="flex items-center">
                <Clock size={12} className="mr-1" />
                {article.date}
              </span>
            </div>
            <span className="flex items-center text-[#D4A373] font-semibold">
              Baca Selengkapnya
              <ChevronRight size={16} className="ml-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Komponen Sidebar
const Sidebar = ({ searchQuery, setSearchQuery, handleSearch, activeTag, handleTagFilter }: { 
    searchQuery: string; 
    setSearchQuery: (query: string) => void; 
    handleSearch: () => void;
    activeTag: string;
    handleTagFilter: (tag: string) => void;
}) => {
    
    const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="space-y-8 sticky top-24"> 
            {/* Search Box */}
            <div className="bg-black/50 p-5 rounded-xl border border-[#8B5E3C]/40 shadow-lg">
                <h4 className="text-xl font-bold text-white mb-4">Cari Artikel</h4>
                <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-3 py-1 focus-within:ring-2 focus-within:ring-[#D4A373]/40 transition-all">
                    <Search size={18} className="text-gray-300" />
                    <input
                        type="text"
                        placeholder="Cari..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={onEnterPress} 
                        className="bg-transparent text-white placeholder-gray-400 focus:outline-none ml-2 w-full py-1"
                    />
                </div>
                <button 
                    onClick={handleSearch} 
                    className="mt-4 w-full px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-[#8B5E3C] to-[#D4A373] shadow-md transition hover:brightness-110 hover:shadow-[#D4A373]/40"
                >
                    Cari
                </button>
            </div>

            {/* Popular Tags/Categories */}
            <div className="bg-black/50 p-5 rounded-xl border border-[#8B5E3C]/40 shadow-lg">
                <h4 className="text-xl font-bold text-white mb-4">Kategori Populer</h4>
                <div className="flex flex-wrap gap-2">
                    {/* Tombol 'Semua' */}
                     <button
                        onClick={() => handleTagFilter('')}
                        className={`text-sm font-medium px-4 py-1 rounded-full transition-colors shadow-md ${
                            activeTag === '' 
                                ? 'bg-[#D4A373] text-black font-semibold' 
                                : 'bg-[#3b2a1a] text-gray-200 hover:bg-[#D4A373]/70'
                        }`}
                    >
                        Semua
                    </button>
                    {popularTags.map((tag) => (
                        <button 
                            key={tag}
                            onClick={() => handleTagFilter(tag)}
                            className={`text-sm font-medium px-4 py-1 rounded-full transition-colors shadow-md ${
                                activeTag === tag 
                                    ? 'bg-[#D4A373] text-black font-semibold' 
                                    : 'bg-[#3b2a1a] text-gray-200 hover:bg-[#D4A373]/70'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}


// Komponen Utama Page Maguru
export default function MaguruPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState("");
  
  // State untuk memicu filtering, terutama setelah klik tombol Search
  const [searchTrigger, setSearchTrigger] = useState(0); 

  const handleSearch = useCallback(() => {
    // Memicu filtering berdasarkan query pencarian
    setSearchTrigger(prev => prev + 1);
    setActiveTag(""); // Nonaktifkan filter tag saat mencari
  }, []);

  const handleTagFilter = useCallback((tag: string) => {
    setActiveTag(tag);
    setSearchQuery(""); // Bersihkan search query saat memfilter tag
    setSearchTrigger(0); // Reset trigger search
  }, []);
  
  // Filtering Logic
  const filteredArticles = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    if (query && searchTrigger > 0) {
        // Jika ada query dan tombol search diklik, lakukan pencarian penuh
        return mockArticles.filter(article => 
            article.title.toLowerCase().includes(query) ||
            article.excerpt.toLowerCase().includes(query) ||
            article.tag.toLowerCase().includes(query)
        );
    } 
    
    if (activeTag) {
        // Filter berdasarkan TAG jika activeTag diatur
        return mockArticles.filter(article => article.tag === activeTag);
    }
    
    // Default: tampilkan semua artikel
    return mockArticles;

  }, [searchQuery, activeTag, searchTrigger]);


  // Mengubah path background sesuai permintaan
  const BG_PATTERN = "url('/images/bg-pattern.jpg')";

  // Framer Motion Variants untuk animasi masuk
  const containerVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <>
      {/* PANGGIL KOMPONEN NAVBAR SEBAGAI FIXED HEADER */}
      <header className="w-full fixed top-0 z-50">
        <Navbar />
      </header>
      
      <section
        className="relative w-full overflow-hidden py-24 pt-32 min-h-screen" // Mengurangi pt-40 menjadi pt-32 agar konten lebih ke atas
        style={{
          backgroundImage: BG_PATTERN,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
              {/* Gambar Ikon di atas Judul */}
              <motion.div 
                variants={itemVariants}
                className="mx-auto w-24 h-24 mb-4 relative"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }} // Animasi mengambang
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 10px #D4A373)" }} // Scale dan Glow saat hover
              >
                  <Image
                      src="/images/iconbola/1.png"
                      alt="Maguru Icon"
                      layout="fill" // Menggunakan layout fill agar animasi scale bekerja dengan baik
                      objectFit="contain"
                  />
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="text-xl font-semibold text-[#D4A373] uppercase tracking-widest">
                Jalan Menuju Kebijaksanaan
              </motion.h2>
              <motion.p variants={itemVariants} className="mt-1 text-5xl font-extrabold text-white sm:text-6xl">
                <span className="text-[#8B5E3C]">MA</span>GURU
              </motion.p>
              <motion.p variants={itemVariants} className="mt-4 text-gray-300 max-w-3xl mx-auto">
                Kumpulan artikel, berita, dan panduan untuk memperdalam ilmu dan pemahaman spiritual serta budaya Bonokeling.
              </motion.p>
            </motion.div>

            {/* Grid Konten Utama (Artikel + Sidebar) */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Kolom Kiri: Daftar Artikel */}
              <div className="lg:col-span-2 space-y-8">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article) => (
                    <motion.div key={article.id} variants={itemVariants}>
                      <ArticleCard article={article} />
                    </motion.div>
                  ))
                ) : (
                  <motion.div variants={itemVariants} className="text-center p-10 bg-black/50 rounded-xl border border-[#D4A373]/50">
                      <h3 className="text-2xl text-white font-bold">Artikel Tidak Ditemukan</h3>
                      <p className="text-gray-400 mt-2">Coba kata kunci atau kategori lain.</p>
                  </motion.div>
                )}
                
                {/* Placeholder Pagination */}
                {filteredArticles.length > 0 && (
                  <motion.div variants={itemVariants} className="flex justify-center pt-8">
                      <button className="px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-[#8B5E3C] to-[#D4A373] shadow-md transition hover:brightness-110 hover:shadow-[#D4A373]/40">
                          Lihat Lebih Banyak
                      </button>
                  </motion.div>
                )}
              </div>
              
              {/* Kolom Kanan: Sidebar */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <Sidebar 
                  searchQuery={searchQuery} 
                  setSearchQuery={setSearchQuery} 
                  handleSearch={handleSearch} 
                  activeTag={activeTag}
                  handleTagFilter={handleTagFilter}
                />
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}