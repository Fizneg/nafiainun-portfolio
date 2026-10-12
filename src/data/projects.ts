/**
 * Data proyek
 * Konten dalam Bahasa Indonesia
 */

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  tech: string[];
  image?: string;
  imageAlt?: string;
  demoUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'web-hafalan',
    slug: 'web-hafalan',
    title: 'Web Pencatatan Hafalan & Tilawah',
    tagline: 'Aplikasi untuk membantu guru memantau perkembangan hafalan siswa.',
    description:
      'Aplikasi yang mencatat hafalan, muroja\'ah, dan tilawah siswa dalam satu tempat yang rapi. Guru bisa memantau progres tiap siswa, melihat riwayat, dan membuat laporan tanpa perlu buku catatan fisik.',
    role: 'Konsep, arah desain, dan pengembangan dengan bantuan AI',
    tech: ['HTML', 'CSS', 'JavaScript', 'AI-assisted'],
    image: '/images/web-hafalan-mockup.webp',
    imageAlt: 'Tampilan aplikasi pencatatan hafalan dan tilawah',
    caseStudyUrl: '/projects/web-hafalan',
    featured: true,
  },
  // Proyek lainnya ditambahkan di sini nanti
];

export const featuredProject = projects.find((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);