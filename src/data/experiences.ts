/**
 * Data pengalaman kerja, magang, dan part-time
 * Semua konten dalam Bahasa Indonesia (EN/AR ditambahkan nanti)
 */

export type ExperienceCategory = 'current' | 'professional' | 'internship' | 'parttime';
export type ExperienceType = 'Full-time' | 'Internship' | 'Part-time' | null;

export interface Experience {
  id: string;
  category: ExperienceCategory;
  role: string;
  organization: string;
  period: string;
  location?: string;
  type?: ExperienceType;
  description: string;
  details?: string[];
  isActive?: boolean;
  hasDocumentation?: boolean;
}

export const experiences: Experience[] = [
  // ============================================================
  // SEDANG BERJALAN
  // ============================================================
  {
    id: 'tutor-arabic',
    category: 'current',
    role: 'Freelance Arabic Tutor',
    organization: 'Mahasiswa IPB University',
    period: 'Sekarang',
    description:
      'Mengajar Bahasa Arab untuk mahasiswa IPB — menyusun materi, membimbing percakapan, dan memantau perkembangan belajar tiap siswa.',
    isActive: true,
  },
  {
    id: 'tour-guide',
    category: 'current',
    role: 'Tour Guide',
    organization: 'Freelance',
    period: 'Sekarang',
    description:
      'Mendampingi tamu berbahasa Arab selama kunjungan — menjelaskan konteks budaya, mengatur itinerary, dan memastikan pengalaman yang nyaman dan berkesan.',
    isActive: true,
  },
  {
    id: 'translator',
    category: 'current',
    role: 'Arabic Translator',
    organization: 'Freelance',
    period: 'Sekarang',
    description:
      'Menerjemahkan dokumen dan percakapan Arab–Indonesia untuk kebutuhan pribadi, akademik, maupun profesional.',
    isActive: true,
  },

  // ============================================================
  // PENGALAMAN PROFESIONAL (FEATURED)
  // ============================================================
  {
    id: 'xismart',
    category: 'professional',
    role: 'Document Control Staff',
    organization: 'PT XISmart Telecom Sejahtera Tbk',
    period: '2025 — awal 2026',
    location: 'Bekasi',
    type: 'Full-time',
    description:
      'Mengelola dokumen operasional, kontrak, dan arsip rahasia perusahaan telekomunikasi — memastikan akurasi 100% lewat SAP ERP dan Excel lanjutan.',
    details: [
      'Mengelola master register, perjanjian kerja, dan surat penugasan dengan SAP ERP — 100% akurasi data',
      'Menjaga kerahasiaan arsip fisik & digital di gudang pusat, siap audit kapan pun',
      'Menjadi jembatan komunikasi harian antar departemen, vendor, dan manajemen',
    ],
    hasDocumentation: true,
  },

  // ============================================================
  // MAGANG
  // ============================================================
  {
    id: 'pertamina',
    category: 'internship',
    role: 'Daily Assistant, Media Relations & Integrated Newsroom',
    organization: 'PT Pertamina (Persero)',
    period: '2023',
    type: 'Internship',
    description:
      'Mendukung Divisi Media Relations Pertamina dalam menyusun laporan harian, notulen rapat, dan presentasi eksekutif. Mengelola logistik perjalanan bisnis serta dokumentasi pengeluaran untuk personel korporat.',
  },
  {
    id: 'nfci',
    category: 'internship',
    role: 'Project Leader, Digital Marketing',
    organization: 'PT Nurul Fikri Cipta Inovasi',
    period: '2024',
    type: 'Internship',
    description:
      'Memimpin tim lintas fungsi untuk merencanakan dan mengeksekusi kampanye pemasaran digital. Menyusun laporan evaluasi mingguan, ringkasan administratif, dan notulen rapat untuk manajemen.',
  },
  {
    id: 'amati-karya',
    category: 'internship',
    role: 'Project Leader, Sustainable Start-up (Climate Change)',
    organization: 'PT Amati Karya Indonesia',
    period: '2023',
    type: 'Internship',
    description:
      'Mengoordinasikan proyek start-up berkelanjutan terkait perubahan iklim — mulai dari timeline, perjanjian vendor, hingga komunikasi dengan mitra lapangan. Menyusun kerangka dokumentasi dan pelaporan untuk kelancaran operasional.',
  },

  // ============================================================
  // PART-TIME
  // ============================================================
  {
    id: 'laznas',
    category: 'parttime',
    role: 'High School Mentor',
    organization: 'Laznas BSM Umat',
    period: '2021 — 2022',
    type: 'Part-time',
    description:
      'Mendampingi siswa penerima beasiswa — memantau kehadiran, menyelesaikan masalah interpersonal, dan menyusun laporan perkembangan bulanan untuk manajemen program.',
  },
];

/**
 * Helper: filter by category
 */
export function getExperiencesByCategory(category: ExperienceCategory): Experience[] {
  return experiences.filter((exp) => exp.category === category);
}

/**
 * Helper: ambil inisial organisasi (untuk fallback logo)
 */
export function getInitials(name: string): string {
  const clean = name.replace(/[^a-zA-Z\s]/g, '').trim();
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length === 0) return '?';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}