// components/EventHighlightSection.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SOLID_BROWN_COLOR = "#875E4D";

export default function EventHighlightSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-sec2.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="relative z-10 w-full min-h-[450px] md:min-h-[550px] py-16">
        <div className="max-w-7xl mx-auto px-4 h-full flex justify-end">
          
          {/* Card event */}
          <div className="flex-1 max-w-md relative">
            <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden">
              <Image
                src="/images/bg-pattern.png"
                alt="Perlon Senin Pahing Event"
                fill
                style={{ objectFit: "cover" }}
                className="w-full h-full"
              />

              <div className="absolute inset-0 bg-black bg-opacity-30"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white p-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                  Perlon Senin Pahing
                </h2>
                <p className="text-sm md:text-base mb-4 drop-shadow-md">
                  <span className="font-semibold text-[#D4A373]">Jatilawang 13/03</span> &mdash; Perlon Senin Pahing yang digelar di Hutan Mundu merupakan perlon yang dilakukan untuk ...
                  <Link
                    href="#"
                    className="text-[#D4A373] hover:text-white font-semibold ml-1 inline-flex items-center transition-colors duration-200"
                  >
                    (read more)
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar coklat */}
          <div
            className="hidden md:block w-3/4 max-w-sm h-[450px] md:h-[550px]"
            style={{ backgroundColor: SOLID_BROWN_COLOR }}
          ></div>
          
        </div>
      </div>
    </section>
  );
}
