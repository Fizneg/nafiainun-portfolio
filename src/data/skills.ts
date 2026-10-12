/**
 * Data keahlian, dikelompokkan per kategori
 */

export interface SkillGroup {
  key: 'technical' | 'languages' | 'soft' | 'tools';
  icon: string;
  variant: 'default' | 'primary' | 'accent' | 'highlight';
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    key: 'technical',
    icon: '⚙️',
    variant: 'default',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'SAP ERP',
      'Advanced Excel',
      'Document Control',
    ],
  },
  {
    key: 'languages',
    icon: '💬',
    variant: 'accent',
    items: [
      'Indonesia — Native',
      'Arab — Advanced',
      'Inggris — Working',
    ],
  },
  {
    key: 'soft',
    icon: '🤝',
    variant: 'highlight',
    items: [
      'Komunikasi',
      'Public Relations',
      'Adaptif',
      'Teliti',
      'Problem Solving',
    ],
  },
  {
    key: 'tools',
    icon: '🛠️',
    variant: 'default',
    items: [
      'VS Code',
      'Git',
      'Figma',
      'AI Tools',
      'Microsoft Office',
    ],
  },
];