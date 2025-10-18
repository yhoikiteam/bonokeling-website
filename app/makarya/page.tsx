"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ExternalLink, Package, Heart } from "lucide-react";
import { motion, Variants } from "framer-motion"; 

// ASUMSI: Import Navbar dari path yang sesuai
import Navbar from '@/components/Navbar'; 

// ----------------------------------------------------
// MOCK DATA PRODUK & MARKETPLACE
// Berdasarkan riset (Oyek, Kerajinan Tangan, dll. yang mungkin dihasilkan UMKM lokal)
// ----------------------------------------------------
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  marketplaceLink: string;
}

const localProducts: Product[] = [
  {
    id: 1,
    name: "Oyek Bonokeling Premium (1 Kg)",
    category: "Pangan Lokal",
    price: 35000,
    description: "Oyek singkong khas Bonokeling, diolah secara tradisional. Sumber karbohidrat alternatif yang kaya serat dan tahan lama.",
    imageUrl: "/images/produk-oyek.jpg",
    marketplaceLink: "https://www.tokopedia.com/cari?q=oyek%20banyumas", // Contoh link
  },
  {
    id: 2,
    name: "Tenun Ikat Corak Adat",
    category: "Kerajinan Tangan",
    price: 180000,
    description: "Tenun ikat yang dibuat oleh perajin lokal Bonokeling, motif klasik yang melambangkan keseimbangan hidup.",
    imageUrl: "/images/produk-tenun.jpg",
    marketplaceLink: "https://shopee.co.id/search?keyword=tenun%20banyumas",
  },
  {
    id: 3,
    name: "Madu Hutan Murni Bonokeling",
    category: "Hasil Alam",
    price: 95000,
    description: "Madu hutan murni yang dipanen dari hutan sekitar kawasan adat, tanpa campuran. Manfaat kesehatan maksimal.",
    imageUrl: "/images/produk-madu.jpg",
    marketplaceLink: "https://www.tokopedia.com/cari?q=madu%20hutan%20murni",
  },
  {
    id: 4,
    name: "Keripik Getuk (Gesret) Rasa Pedas",
    category: "Camilan",
    price: 25000,
    description: "Singkong diiris tipis lalu digoreng hingga renyah, camilan khas Bonokeling yang gurih dan pedas.",
    imageUrl: "/images/produk-gesret.jpg",
    marketplaceLink: "https://shopee.co.id/search?keyword=keripik%20singkong",
  },
];

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
      staggerChildren: 0.15 
    } 
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Komponen Card Produk
const ProductCard = ({ product }: { product: Product }) => {
    return (
        <motion.div 
            variants={itemVariants}
            className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transition-all duration-300 border border-[#8B5E3C]/40 hover:border-[#D4A373] hover:shadow-[#D4A373]/20 flex flex-col"
        >
            <div className="relative h-60 w-full">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 right-3 text-xs font-semibold text-white px-3 py-1 rounded-full bg-gradient-to-r from-[#D4A373] to-[#8B5E3C] shadow-md">
                    {product.category}
                </span>
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white leading-snug mb-2 hover:text-[#D4A373] transition-colors">
                    {product.name}
                </h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-3 flex-grow">
                    {product.description}
                </p>

                <div className="mt-auto border-t border-[#8B5E3C]/50 pt-4">
                    <p className="text-2xl font-extrabold text-[#D4A373] mb-3">
                        Rp {product.price.toLocaleString('id-ID')}
                    </p>
                    <Link 
                        href={product.marketplaceLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold text-black bg-[#D4A373] shadow-md transition hover:bg-[#8B5E3C] hover:text-white"
                    >
                        <ShoppingCart size={20} className="mr-2" />
                        Beli Sekarang (Marketplace)
                        <ExternalLink size={16} className="ml-2" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};


// Komponen Utama Page Makarya
export default function MakaryaPage() {
  const BG_IMAGE = "url('/images/bg-sec2.jpg')";

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
              {/* Gambar Ikon di atas Judul */}
              <motion.div 
                className="mx-auto w-24 h-24 mb-4 relative"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }} // Animasi mengambang
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 10px #D4A373)" }} // Scale dan Glow saat hover
              >
                  <Image
                      src="/images/iconbola/4.png" // Menggunakan ikon bola yang sama
                      alt="Makarya Icon"
                      layout="fill" 
                      objectFit="contain"
                  />
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="text-xl font-semibold text-[#D4A373] uppercase tracking-widest">
                Berkarya untuk Kesejahteraan
              </motion.h2>
              <motion.p variants={itemVariants} className="mt-1 text-5xl font-extrabold text-white sm:text-6xl">
                <span className="text-[#8B5E3C]">MA</span>KARYA
              </motion.p>
              <motion.p variants={itemVariants} className="mt-4 text-gray-300 max-w-3xl mx-auto">
                Dukung ekonomi lokal Bonokeling. Setiap produk yang Anda beli adalah hasil kerja keras (Makarya) dari komunitas kami.
              </motion.p>
            </motion.div>

            {/* Marketplace Section */}
            <div className="mt-12">
                <motion.h3 variants={itemVariants} className="text-3xl font-bold text-white text-center mb-8">
                    Produk Pilihan Komunitas
                </motion.h3>

                {/* Grid Produk */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {localProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* CTA Marketplace Utama */}
                <motion.div 
                    variants={itemVariants}
                    className="mt-16 text-center p-8 bg-black/50 rounded-xl border border-[#D4A373]/50 shadow-2xl"
                >
                    <p className="text-xl text-gray-200 mb-4">
                        Semua transaksi diarahkan ke mitra *marketplace* kami.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <Link 
                            href="https://www.tokopedia.com/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-black bg-white shadow-lg transition hover:bg-gray-200"
                        >
                            <Image src="/images/icon-tokopedia.png" alt="Tokopedia" width={24} height={24} className="mr-2"/>
                            Kunjungi Tokopedia
                        </Link>
                        <Link 
                            href="https://shopee.co.id/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-white bg-[#ee4d2d] shadow-lg transition hover:bg-[#d53c1e]"
                        >
                            <Image src="/images/icon-shopee.png" alt="Shopee" width={24} height={24} className="mr-2"/>
                            Kunjungi Shopee
                        </Link>
                    </div>
                </motion.div>
            </div>
            
          </motion.div>

        </div>
      </section>
    </>
  );
}