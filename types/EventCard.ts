// types/EventCard.ts (contoh)
export interface EventCardData {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
}

// data/mockEvents.ts
export const mockEvents: EventCardData[] = [
  {
    id: 1,
    title: "Makam Banokeling",
    subtitle: "Makam Kyai Bonokeling yang ber...",
    imageUrl: "/images/event/makam-bonokeling.jpg",
  },
  {
    id: 2,
    title: "Tempat Pembakar Kemenyan",
    subtitle: "Tercium wangi harum tiap...",
    imageUrl: "/images/event/pembakar-kemenyan.jpg",
  },
  {
    id: 3,
    title: "Perlon Unggahan",
    subtitle: "Dilaksanakan untuk menyambut bulan...",
    imageUrl: "/images/event/perlon-unggahan.jpg",
  },
  {
    id: 4,
    title: "Memasak Bersama",
    subtitle: "Diselenggarakan bersamaan",
    imageUrl: "/images/event/memasak-bersama.jpg",
  },
  // Tambahkan data lain di sini...
];