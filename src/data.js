// Changed from "/assets/..." to relative imports for GitHub Pages compatibility
import HeroImage from "../public/assets/gue.webp";
import Tools1 from "../public/assets/tools/vscode.png";
import Tools2 from "../public/assets/tools/reactjs.png";
import Tools3 from "../public/assets/tools/laravel.png";
import Tools4 from "../public/assets/tools/tailwind.png";
import Tools5 from "../public/assets/tools/bootstrap.png";
import Tools6 from "../public/assets/tools/js.png";
import Tools7 from "../public/assets/tools/github.png";
import Tools8 from "../public/assets/tools/canva.png";
import Tools9 from "../public/assets/tools/figma.png";
import Tools10 from "../public/assets/tools/inertia.png";
import Tools11 from "../public/assets/tools/vite.png";
import Tools12 from "../public/assets/tools/php.png";
import Tools13 from "../public/assets/tools/MySQL.png";
import Tools14 from "../public/assets/tools/mariaDB.png";
import Tools15 from "../public/assets/tools/Python.png";
import {
  RiWindowLine,
  RiCodeSSlashLine,
  RiLayoutLine,
  RiSettings3Line,
  RiServerLine,
  RiDatabase2Line,
} from "@remixicon/react";

const Image = {
  HeroImage,
};

export default Image;

// What I Do data
export const whatIDo = [
  {
    id: 1,
    title: "Perancangan Aplikasi Web",
    description:
      "Merancang arsitektur dan struktur aplikasi web yang scalable dan maintainable",
    Icon: RiWindowLine,
    dad: "200",
  },
  {
    id: 2,
    title: "Pengembangan Aplikasi Web",
    description: "Membangun aplikasi web full-stack dengan efektif dan efisien",
    Icon: RiCodeSSlashLine,
    dad: "300",
  },
  {
    id: 3,
    title: "Implementasi Antarmuka",
    description: "Mengimplementasikan UI/UX yang responsif dan user-friendly",
    Icon: RiLayoutLine,
    dad: "400",
  },
  {
    id: 4,
    title: "Maintainability",
    description:
      "Menulis kode yang bersih, terdokumentasi, dan mudah dipelihara",
    Icon: RiSettings3Line,
    dad: "500",
  },
  {
    id: 5,
    title: "Perancangan Backend dan REST API",
    description: "Merancang dan mengembangkan backend services dan RESTful API",
    Icon: RiServerLine,
    dad: "600",
  },
  {
    id: 6,
    title: "Perancangan Database",
    description: "Merancang struktur database yang optimal, efisien, dan scalable untuk kebutuhan aplikasi",
    Icon: RiDatabase2Line,
    dad: "700",
  },
];

// Categorized Tools
export const categorizedTools = [
  {
    category: "Frontend",
    tools: [
      {
        id: 1,
        gambar: Tools2,
        nama: "React JS",
        ket: "Framework",
      },
      {
        id: 2,
        gambar: Tools4,
        nama: "Tailwind CSS",
        ket: "Framework",
      },
      {
        id: 3,
        gambar: Tools5,
        nama: "Bootstrap",
        ket: "Framework",
      },
      {
        id: 4,
        gambar: Tools6,
        nama: "Javascript",
        ket: "Language",
      },
      {
        id: 5,
        gambar: Tools10,
        nama: "Inertia JS",
        ket: "Framework",
      },
    ],
  },
  {
    category: "Backend",
    tools: [
      {
        id: 1,
        gambar: Tools3,
        nama: "Laravel",
        ket: "Framework",
      },
      {
        id: 2,
        gambar: Tools12,
        nama: "PHP",
        ket: "Language",
      },
      {
        id: 3,
        gambar: Tools15,
        nama: "Python",
        ket: "Language",
      },
    ],
  },
  {
    category: "Database",
    tools: [
      {
        id: 1,
        gambar: Tools13,
        nama: "MySQL",
        ket: "Database",
      },
      {
        id: 2,
        gambar: Tools14,
        nama: "MariaDB",
        ket: "Database",
      },
    ],
  },
  {
    category: "Tooling",
    tools: [
      {
        id: 1,
        gambar: Tools1,
        nama: "Visual Studio Code",
        ket: "Code Editor",
      },
      {
        id: 2,
        gambar: Tools7,
        nama: "Github",
        ket: "Repository",
      },
      {
        id: 3,
        gambar: Tools11,
        nama: "Vite",
        ket: "Build Tool",
      },
    ],
  },
  {
    category: "Design",
    tools: [
      {
        id: 1,
        gambar: Tools8,
        nama: "Canva",
        ket: "Design App",
      },
      {
        id: 2,
        gambar: Tools9,
        nama: "Figma",
        ket: "Design App",
      },
    ],
  },
];

import ko_team_management from "../public/assets/proyek/ko_team_management.webp";
import prototype_ecolink from "../public/assets/proyek/prototype_ecolink.webp";
import presensi_desa from "../public/assets/proyek/presensi_desa.webp";
import jaspel_wonogiri from "../public/assets/proyek/jaspel_wonogiri.webp";
import portofolio from "../public/assets/proyek/portofolio.webp";
import myinven from "../public/assets/proyek/myinven.webp";
import monitoring_sistem_tracking from "../public/assets/proyek/monitoring_sistem_tracking.webp";

export const listProyek = [
  {
    id: 1,
    gambar: ko_team_management,
    nama: "KO Team Management",
    desk: "Sistem manajemen tim untuk mencatat transaksi dan data tim",
    tools: ["Laravel", "Bootstrap", "Jquery", "MySQL", "PHP"],
    dad: "200",
  },
  {
    id: 2,
    gambar: myinven,
    nama: "MyInven",
    desk: "Website pengelola stok barang dengan fitur scan barcode",
    tools: ["Laravel", "Jquerry", "Bootstrap", "MySQL", "PHP"],
    dad: "700",
  },
  {
    id: 3,
    gambar: jaspel_wonogiri,
    nama: "Jasa Pelayanan RSUD Wonogiri",
    desk: "Sistem informasi perhitungan jasa pelayanan RSUD Wonogiri yang cepat, tepat, dan transparan",
    tools: ["Laravel", "Jquerry", "Bootstrap", "MySQL", "PHP"],
    dad: "500",
  },
  {
    id: 4,
    gambar: monitoring_sistem_tracking,
    nama: "Monitoring Sistem Tracking",
    desk: "Website monitoring sistem tracking dengan integrasi IoT dan API maps",
    tools: ["Laravel", "Jquerry", "Bootstrap", "MySQL", "PHP", "Python"],
    dad: "800",
  },
  {
    id: 5,
    gambar: portofolio,
    nama: "Web Portofolio",
    desk: "Website portofolio personal untuk menampilkan karya dan pengalaman profesional",
    tools: ["React", "Vite", "TailwindCSS", "JavaScript"],
    dad: "600",
  },
  {
    id: 6,
    gambar: presensi_desa,
    nama: "Presensi Desa",
    desk: "Sistem presensi digital untuk administrasi dan monitoring kehadiran pada kantor desa",
    tools: ["PHP", "Bootstrap", "MySQL"],
    dad: "400",
  },
  {
    id: 7,
    gambar: prototype_ecolink,
    nama: "Prototype E-Colink",
    desk: "Platform digital untuk mempromosikan dan memanajemen program beasiswa",
    tools: ["Laravel", "Jquery", "MySQL", "Bootstrap", "PHP"],
    dad: "300",
  },
];
