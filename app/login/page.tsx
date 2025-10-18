"use client";
import { useState } from "react";
import { LogIn, User, Lock, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Reusing colors:
// Primary Accent: #D4A373 (light brown/gold)
// Secondary Accent: #8B5E3C (darker brown)
// Tertiary/Dark Accent: #3b2a1a (very dark brown/almost black)

export default function AdminLoginPage() {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate an API call
    setTimeout(() => {
      // Basic validation for demonstration
      if (adminId === "admin" && password === "password") {
        alert("Login Successful! (Placeholder Action)");
        // In a real app: redirect to admin dashboard
      } else {
        setError("Invalid Admin ID or Password.");
      }
      setIsLoading(false);
    }, 1500);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center py-16 px-4"
      style={{
        backgroundImage: "url('/images/bg-pattern.png')", // Reuse background pattern
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#111827", // Dark fallback
      }}
    >
      {/* Overlay Gradasi for aesthetic consistency */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] pointer-events-none" />

      <motion.div
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md p-8 sm:p-10 rounded-3xl border border-[#8B5E3C]/40 shadow-2xl bg-black/60 backdrop-blur-md"
      >
        <div className="flex flex-col items-center mb-8">
          {/* Logo/Icon consistent with Navbar */}
          <div className="mb-4">
            <Image
              src="/logo.png" // Assuming '/logo.png' exists
              alt="Admin Login Icon"
              width={60}
              height={60}
              className="rounded-full shadow-lg border-2 border-[#D4A373]"
            />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-wide">
            Admin <span className="text-[#D4A373]">Panel</span>
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Sign in to manage Ngaji Bonokeling content
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Admin ID Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User size={20} className="text-[#D4A373]" />
            </div>
            <input
              type="text"
              id="adminId"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              placeholder="Admin ID"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-[#8B5E3C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4A373] transition-all duration-300"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock size={20} className="text-[#D4A373]" />
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-[#8B5E3C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4A373] transition-all duration-300"
            />
          </div>

          {/* Error Message */}
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-red-400 text-center"
            >
              {error}
            </motion.p>
          )}

          {/* Login Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white shadow-lg transition-all duration-300 ${
              isLoading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-[#8B5E3C] to-[#D4A373] hover:shadow-xl hover:shadow-[#D4A373]/30"
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Logging In...
              </>
            ) : (
              <>
                <LogIn size={20} />
                Login
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}