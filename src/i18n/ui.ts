/**
 * i18n — Terjemahan antarmuka (UI strings)
 * Semua teks yang muncul di web, dikumpulkan di sini per bahasa.
 */

export const languages = {
  id: 'Bahasa Indonesia',
  en: 'English',
  ar: 'العربية',
} as const;

export const defaultLang = 'id';

export const ui = {
  id: {
    'nav.about': 'Tentang',
    'nav.experience': 'Pengalaman',
    'nav.projects': 'Proyek',
    'nav.contact': 'Kontak',
    'nav.menu': 'Menu',
    'nav.close': 'Tutup',
    'nav.language': 'Bahasa',
  },
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'nav.language': 'Language',
  },
  ar: {
    'nav.about': 'من أنا',
    'nav.experience': 'الخبرات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'تواصل',
    'nav.menu': 'القائمة',
    'nav.close': 'إغلاق',
    'nav.language': 'اللغة',
  },
} as const;

/**
 * Helper: ambil terjemahan berdasarkan bahasa & key
 * Contoh: t('id', 'nav.about') → 'Tentang'
 */
export function t(lang: keyof typeof ui, key: keyof typeof ui.id): string {
  return ui[lang]?.[key] ?? ui[defaultLang][key] ?? key;
}