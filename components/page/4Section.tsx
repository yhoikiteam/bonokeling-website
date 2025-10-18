"use client";

import Image from "next/image";
import Link from "next/link";
import { PlayCircle, MapPin } from "lucide-react";

interface VideoCardData {
  type: 'video';
  id: number;
  youtubeId: string;
  duration: string;
  title: string;
  thumbnailUrl: string; 
}

interface ImageCardData {
  type: 'image';
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
}

interface MapCardData {
  type: 'map';
  id: number;
  title: string;
  address: string;
  embedSrc: string;
}

type MediaCardData = VideoCardData | ImageCardData | MapCardData;

const mediaItems: MediaCardData[] = [
  {
    type: 'video',
    id: 1,
    youtubeId: 'ID_VIDEO_1',
    duration: '8:02',
    title: 'Connected to: SI BONO',
    thumbnailUrl: '/images/video-thumb-1.jpg',
  },
  {
    type: 'image',
    id: 2,
    imageUrl: '/images/si-bono-character.png',
    title: 'Jelajah Desa',
    subtitle: 'kara Si Bono',
  },
  {
    type: 'video',
    id: 3,
    youtubeId: 'ID_VIDEO_2',
    duration: '10:7',
    title: 'Connected to: SI BONO',
    thumbnailUrl: '/images/video-thumb-2.jpg',
  },
  {
    type: 'map',
    id: 4,
    title: 'Mayuh Pada Dolan',
    address: 'CAMS-CWS, Pehucan, Kec. Jatilawang, Kabupaten Banyumas, Jawa Tengah 53174',
    embedSrc: 'https://www.google.com/maps/embed?pb=MASUKKAN_EMBED_URL_ANDA_DI_SINI',
  },
];

const BASE_CARD_CLASSES = "relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 border border-[#8B5E3C]/50 hover:border-[#D4A373] bg-black/70 backdrop-blur-sm group";

const VideoCard = ({ youtubeId, duration, title, thumbnailUrl }: VideoCardData) => {
  const videoLink = `https://www.youtube.com/watch?v=${youtubeId}`;
  return (
    <div className={BASE_CARD_CLASSES}>
      <Link href={videoLink} target="_blank" className="block w-full h-full">
        <div className="relative w-full h-3/4 md:h-5/6">
          <Image
            src={thumbnailUrl} 
            alt={`Thumbnail video ${title}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-300 group-hover:bg-black/50">
            <PlayCircle 
              size={64} 
              className="text-[#D4A373] transition-transform duration-300 group-hover:scale-125 drop-shadow-xl" 
            />
          </div>
          
          <span className="absolute bottom-3 right-3 px-3 py-1 bg-black/80 text-white text-xs font-semibold rounded-full border border-[#D4A373]">
            {duration}
          </span>
        </div>
        
        <div className="absolute bottom-0 left-0 p-4 text-white text-center w-full min-h-[25%] md:min-h-[16.6%] flex items-center justify-center bg-gradient-to-t from-[#8B5E3C] to-transparent">
          <p className="text-lg font-bold text-white drop-shadow-md">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};

const ImageCard = ({ imageUrl, title, subtitle }: ImageCardData) => {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-[#D4A373] bg-gradient-to-br from-[#D4A373] to-[#8B5E3C]">
      <div className="relative w-full h-3/4 md:h-5/6 flex items-center justify-center p-4">
        <Image
          src={imageUrl}
          alt="Karakter Si Bono"
          width={280}
          height={280}
          objectFit="contain"
          className="rounded-xl w-full h-full bg-black/50 p-4 object-contain shadow-xl"
        />
      </div>
      <div className="absolute bottom-0 left-0 p-4 text-white text-center w-full bg-black/40">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-200">{subtitle}</p>
      </div>
    </div>
  );
};

const MapCard = ({ embedSrc, title, address }: MapCardData) => {
  return (
    <div className={BASE_CARD_CLASSES}>
      
      <div className="w-full h-3/4 md:h-5/6">
        <iframe
          src={embedSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Makam Bonokeling"
          className="grayscale group-hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </div>
      
      <div className="absolute bottom-0 left-0 p-4 text-white text-center w-full min-h-[25%] md:min-h-[16.6%] flex flex-col items-center justify-center bg-gradient-to-t from-[#8B5E3C] to-transparent">
        <MapPin size={24} className="text-white mb-1 drop-shadow-lg" />
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-xs text-gray-200 leading-snug">
          {address}
        </p>
      </div>
    </div>
  );
};

export default function MediaGridSection() {

  const BG_PATTERN = "url('/images/bg-pattern.png')";

  return (
    <section
      className="relative w-full overflow-hidden py-20"
      style={{
        backgroundImage: BG_PATTERN,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#111827',
      }}
    >
      <div className="absolute inset-0 bg-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold text-[#D4A373] uppercase tracking-widest">Galeri Media</h2>
          <p className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">Jejak <span className="text-[#8B5E3C]">Keseimbangan</span> Bonokeling</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          
          {mediaItems.map((item) => (
            <div key={item.id} className="h-[450px] md:h-[400px]">
              {item.type === 'video' && <VideoCard {...item as VideoCardData} />}
              {item.type === 'image' && <ImageCard {...item as ImageCardData} />}
              {item.type === 'map' && <MapCard {...item as MapCardData} />}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}