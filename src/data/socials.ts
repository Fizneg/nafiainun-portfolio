/**
 * Data sosial media & kontak
 * PENTING: Ganti URL sesuai profil kamu yang sebenarnya
 */

export interface Social {
  key: 'email' | 'linkedin' | 'github' | 'instagram';
  icon: string;
  label: string;
  value: string;
  url: string;
}

export const socials: Social[] = [
  {
    key: 'email',
    icon: '📧',
    label: 'Email',
    value: 'nafi.ainun29@gmail.com',
    url: 'mailto:nafi.ainun29@gmail.com',
  },
  {
    key: 'linkedin',
    icon: '💼',
    label: 'LinkedIn',
    value: '/in/nafiainun',
    url: 'https://www.linkedin.com/in/nafiainun/',
  },
  {
    key: 'github',
    icon: '🐙',
    label: 'GitHub',
    value: '@nafiainun',
    url: 'https://github.com/nafiainun',
  },
  {
    key: 'instagram',
    icon: '📷',
    label: 'Instagram',
    value: '@nafiainun',
    url: 'https://www.instagram.com/nafiainun/',
  },
];