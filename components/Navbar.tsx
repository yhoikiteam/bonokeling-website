"use client";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Tambahkan import Link

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "mx-3 mt-3 rounded-2xl border border-[#8B5E3C]/40 shadow-lg backdrop-blur-md"
          : "border-transparent"
      } bg-black/50 backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo Ngaji Bonokeling"
            width={32}
            height={32}
            className="rounded-full"
          />
          <h1 className="text-white font-semibold text-lg tracking-wide">
            <span className="text-[#D4A373]">Ngaji</span> Bonokeling
          </h1>
        </div>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 text-gray-200 font-medium">
          {["Maguru", "Mangabdi", "Manembah", "Makarya", "Manages"].map(
            (menu, i) => (
              <li
                key={i}
                className="group relative cursor-pointer transition-all duration-300"
              >
                <Link href={`/${menu.toLowerCase()}`}>
                  <span className="hover:text-[#D4A373]">{menu}</span>
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#D4A373] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            )
          )}
        </ul>

        {/* SEARCH + BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-3 py-1 focus-within:ring-2 focus-within:ring-[#D4A373]/40 transition-all">
            <Search size={16} className="text-gray-300" />
            <input
              type="text"
              placeholder="Cari Sesuatu"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none ml-2 w-32"
            />
          </div>

          {/* Tombol Cari */}
          <button className="px-5 py-1.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#8B5E3C] to-[#D4A373] shadow-md transition hover:brightness-110 hover:shadow-[#D4A373]/40">
            Cari
          </button>

          {/* Tombol Bahasa */}
          <button className="px-5 py-1.5 rounded-full font-semibold text-white bg-[#8B5E3C] shadow-md transition hover:brightness-110 hover:shadow-[#D4A373]/40">
            Bahasa
          </button>
        </div>

        {/* TOGGLE MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white hover:text-[#D4A373] transition-transform duration-300"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-black/90 backdrop-blur-xl border-t border-[#8B5E3C]/40 transition-all duration-500 ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 text-gray-200 font-medium">
          {["Maguru", "Mangabdi", "Manembah", "Makarya", "Manages"].map(
            (menu, i) => (
              <li
                key={i}
                className="hover:text-[#D4A373] transition-colors cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <Link href={`/${menu.toLowerCase()}`}>{menu}</Link>
              </li>
            )
          )}
          <div className="flex gap-3 mt-3">
            <button className="bg-gradient-to-r from-[#8B5E3C] to-[#D4A373] text-white font-semibold px-4 py-1.5 rounded-full hover:brightness-110 transition">
              Cari
            </button>
            <button className="bg-[#8B5E3C] text-white font-semibold px-4 py-1.5 rounded-full hover:brightness-110 transition">
              Bahasa
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
}
