/**
 * Data pelatihan & sertifikasi
 */

export interface Certification {
  id: string;
  year: string;
  title: string;
  issuer: string;
  hasCertificate: boolean;
}

export const certifications: Certification[] = [
  {
    id: 'tuv-pr',
    year: '2024',
    title: 'Public Relations Certification',
    issuer: 'PT TÜV Rheinland Indonesia',
    hasCertificate: false,
  },
  {
    id: 'excel',
    year: '2024',
    title: 'Advanced Microsoft Excel',
    issuer: 'Harisenin.com',
    hasCertificate: false,
  },
  {
    id: 'bizcomm',
    year: '2023',
    title: 'Business Communication',
    issuer: 'HP Life',
    hasCertificate: false,
  },
  {
    id: 'green-digital',
    year: '2023',
    title: 'Green Digital Skills',
    issuer: 'Inco Academy',
    hasCertificate: false,
  },
  {
    id: 'community',
    year: '2023',
    title: 'Community Development',
    issuer: 'Dampak Sosial Indonesia',
    hasCertificate: false,
  },
  {
    id: 'renewable',
    year: '2023',
    title: 'Renewable Energy Awareness for Young Leaders',
    issuer: 'Kemenko PMK & IBKATA',
    hasCertificate: false,
  },
  {
    id: 'batic',
    year: '2023',
    title: 'Table Manner "The Beauty of Inspiring Communication (BATIC)"',
    issuer: 'Hotel Santika Premiere Slipi',
    hasCertificate: false,
  },
];