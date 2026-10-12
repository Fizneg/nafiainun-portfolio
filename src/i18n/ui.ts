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

    // About
    'about.label': 'Tentang Saya',
    'about.heading': 'Belajar dulu, baru bicara.',
    'about.p1': "Nama saya Nafi Ainun Na'im. Saya lulusan Ilmu Komunikasi dari Universitas Dian Nusantara, dan sempat menempuh pendidikan Bahasa Arab di LIPIA Jakarta. Dua latar ini membentuk cara saya bekerja: terbiasa mendengar dulu sebelum bicara, dan terbiasa teliti karena detail kecil sering jadi penentu.",
    'about.p2': 'Selama satu tahun saya bekerja sebagai Document Control Staff di sebuah perusahaan telekomunikasi — mengelola dokumen operasional, kontrak, dan arsip rahasia dengan SAP ERP dan Excel lanjutan. Sebelumnya, saya magang di Pertamina (media relations & newsroom), memimpin proyek digital marketing, dan mengoordinasikan start-up terkait perubahan iklim.',
    'about.p3': "Saat ini saya bekerja sebagai freelance Arabic tutor untuk mahasiswa, tour guide, dan translator Bahasa Arab. Di sela-sela itu, saya mendalami pengembangan web — salah satu yang sudah selesai adalah aplikasi pencatatan hafalan dan tilawah untuk siswa, dibangun dengan mengarahkan AI, bukan sekadar memakainya.",
    'about.quote': 'Saya percaya komunikasi yang baik dan sistem yang rapi akan selalu dibutuhkan — di bidang apa pun.',
    'about.facts.location': 'Bekasi, Indonesia',
    'about.facts.focus': 'Komunikasi & Sistem Digital',
    'about.facts.languages': 'Indonesia · Arab · Inggris',
    'about.facts.learning': 'Web Development',
    'about.facts.focus_label': 'Fokus',
    'about.facts.languages_label': 'Bahasa',
    'about.facts.learning_label': 'Sedang Belajar',

    // Experience
    'exp.label': 'Pengalaman',
    'exp.heading': 'Dari ruang rapat ke ruang kelas — sekarang saya bekerja di keduanya.',
    'exp.current.title': 'Sedang Berjalan',
    'exp.professional.title': 'Pengalaman Profesional',
    'exp.internship.title': 'Magang',
    'exp.parttime.title': 'Part-time & Mentoring',
    'exp.view_detail': 'Lihat dokumentasi',
    'exp.active': 'Aktif',
    'exp.type.fulltime': 'Full-time',
    'exp.type.internship': 'Magang',
    'exp.type.parttime': 'Part-time',
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

    // About
    'about.label': 'About Me',
    'about.heading': 'Listen first, speak later.',
    'about.p1': "My name is Nafi Ainun Na'im. I graduated in Public Relations from Dian Nusantara University and studied Arabic at LIPIA Jakarta. These two backgrounds shaped how I work: I listen before I speak, and I pay attention to details because small things often decide the outcome.",
    'about.p2': 'For a year, I worked as a Document Control Staff at a telecommunications company — managing operational documents, contracts, and confidential archives using SAP ERP and advanced Excel. Before that, I interned at Pertamina (media relations & newsroom), led a digital marketing project, and coordinated a climate-related start-up.',
    'about.p3': "Currently, I work as a freelance Arabic tutor for university students, a tour guide, and an Arabic translator. In between, I'm diving deeper into web development — one project I've completed is a Qur'an memorization and recitation tracking app for students, built by directing AI, not just using it.",
    'about.quote': 'I believe good communication and well-organized systems will always matter — in any field.',
    'about.facts.location': 'Bekasi, Indonesia',
    'about.facts.focus': 'Communication & Digital Systems',
    'about.facts.languages': 'Indonesian · Arabic · English',
    'about.facts.learning': 'Web Development',
    'about.facts.focus_label': 'Focus',
    'about.facts.languages_label': 'Languages',
    'about.facts.learning_label': 'Currently Learning',

    // Experience
    'exp.label': 'Experience',
    'exp.heading': 'From meeting rooms to classrooms — now working in both.',
    'exp.current.title': 'Currently Active',
    'exp.professional.title': 'Professional Experience',
    'exp.internship.title': 'Internships',
    'exp.parttime.title': 'Part-time & Mentoring',
    'exp.view_detail': 'View documentation',
    'exp.active': 'Active',
    'exp.type.fulltime': 'Full-time',
    'exp.type.internship': 'Internship',
    'exp.type.parttime': 'Part-time',
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

    // من أنا
    'about.label': 'من أنا',
    'about.heading': 'أستمع أولاً، ثم أتحدث.',
    'about.p1': 'اسمي نافع عين النعيم. تخرجت في العلاقات العامة من جامعة ديان نوسانتارا، ودرست اللغة العربية في معهد العلوم الإسلامية والعربية (ليبيا) بجاكرتا. هاتان الخلفيتان شكّلتا طريقة عملي: أستمع قبل أن أتحدث، وأهتم بالتفاصيل.',
    'about.p2': 'عملت لمدة سنة كموظف ضبط المستندات في شركة اتصالات — أُدير المستندات التشغيلية والعقود والأرشيف السري باستخدام SAP ERP وإكسل المتقدم. قبل ذلك، تدربت في برتامينا (العلاقات الإعلامية وغرفة الأخبار)، وترأست مشروع تسويق رقمي، ونسّقت شركة ناشئة متعلقة بتغير المناخ.',
    'about.p3': 'حالياً أعمل كمدرس خاص للغة العربية لطلاب الجامعة، ومرشد سياحي، ومترجم للغة العربية. وفي الوقت نفسه، أتعمق في تطوير الويب — ومن المشاريع التي أكملتها تطبيق لتسجيل حفظ القرآن والتلاوة للطلاب، بُني بتوجيه الذكاء الاصطناعي.',
    'about.quote': 'أؤمن أن التواصل الجيد والأنظمة المنظمة ستبقى دائماً مطلوبة — في أي مجال.',
    'about.facts.location': 'بيكاسي، إندونيسيا',
    'about.facts.focus': 'التواصل والأنظمة الرقمية',
    'about.facts.languages': 'الإندونيسية · العربية · الإنجليزية',
    'about.facts.learning': 'تطوير الويب',
    'about.facts.focus_label': 'التركيز',
    'about.facts.languages_label': 'اللغات',
    'about.facts.learning_label': 'أتعلم حالياً',

    // الخبرات
    'exp.label': 'الخبرات',
    'exp.heading': 'من قاعات الاجتماعات إلى الفصول الدراسية — أعمل في كليهما الآن.',
    'exp.current.title': 'قيد العمل حالياً',
    'exp.professional.title': 'الخبرة المهنية',
    'exp.internship.title': 'التدريب',
    'exp.parttime.title': 'دوام جزئي وإرشاد',
    'exp.view_detail': 'عرض الوثائق',
    'exp.active': 'نشط',
    'exp.type.fulltime': 'دوام كامل',
    'exp.type.internship': 'تدريب',
    'exp.type.parttime': 'دوام جزئي',
  },
} as const;

export function t(lang: keyof typeof ui, key: keyof typeof ui.id): string {
  return ui[lang]?.[key] ?? ui[defaultLang][key] ?? key;
}