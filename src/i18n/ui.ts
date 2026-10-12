/**
 * i18n — Terjemahan antarmuka (UI strings)
 */

export const languages = {
  id: 'Bahasa Indonesia',
  en: 'English',
  ar: 'العربية',
} as const;

export const defaultLang = 'id';

export const ui = {
  id: {
    // Navigasi
    'nav.about': 'Tentang',
    'nav.experience': 'Pengalaman',
    'nav.projects': 'Proyek',
    'nav.contact': 'Kontak',
    'nav.menu': 'Menu',
    'nav.close': 'Tutup',
    'nav.language': 'Bahasa',

    // Hero
    'hero.greeting': 'Halo, saya',
    'hero.tagline': 'Komunikator lintas bahasa dan sistem — kini membangun untuk web.',
    'hero.cta.projects': 'Lihat Proyek',
    'hero.cta.contact': 'Hubungi Saya',
    'hero.meta.location': 'Bekasi, Indonesia',
    'hero.meta.languages': 'ID / EN / AR',
    'hero.meta.status': 'Open to Work',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'nav.language': 'Language',

    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.tagline': 'Communicator across languages and systems — now building for the web.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Get in Touch',
    'hero.meta.location': 'Bekasi, Indonesia',
    'hero.meta.languages': 'ID / EN / AR',
    'hero.meta.status': 'Open to Work',
  },
  ar: {
    // التنقل
    'nav.about': 'من أنا',
    'nav.experience': 'الخبرات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'تواصل',
    'nav.menu': 'القائمة',
    'nav.close': 'إغلاق',
    'nav.language': 'اللغة',

    // البطل
    'hero.greeting': 'مرحباً، أنا',
    'hero.tagline': 'متواصل عبر اللغات والأنظمة — أبني الآن للويب.',
    'hero.cta.projects': 'شاهد المشاريع',
    'hero.cta.contact': 'تواصل معي',
    'hero.meta.location': 'بيكاسي، إندونيسيا',
    'hero.meta.languages': 'ID / EN / AR',
    'hero.meta.status': 'متاح للعمل',
  },
} as const;

export function t(lang: keyof typeof ui, key: keyof typeof ui.id): string {
  return ui[lang]?.[key] ?? ui[defaultLang][key] ?? key;
}