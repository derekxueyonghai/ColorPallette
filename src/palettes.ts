export type Palette = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  note: string;
  brand: string;
  colors: [string, string, string];
  surface: string;
  accent: string;
};

export const palettes: Palette[] = [
  {
    id: 'emerald',
    title: 'Emerald',
    subtitle: '复古 / 沉静 / 高级',
    tags: ['#复古', '#沉静', '#高级'],
    note: '偏森林感的冷静配色，适合强调安定和质感。',
    brand: 'SEA SOUL',
    colors: ['#D5E3D2', '#003153', '#0A3D2E'],
    surface: '#10281f',
    accent: '#dbe8d8'
  },
  {
    id: 'sepia',
    title: 'Sepia Noon',
    subtitle: '复古 / 温柔 / 纸感',
    tags: ['#怀旧', '#纸感', '#柔和'],
    note: '更接近旧照片和手工海报的温暖底色。',
    brand: 'ATELIER',
    colors: ['#E9D8C3', '#9B6B4A', '#5A3B2E'],
    surface: '#2b1c14',
    accent: '#f1e0cd'
  },
  {
    id: 'clay',
    title: 'Clay Archive',
    subtitle: '克制 / 手作 / 书卷气',
    tags: ['#克制', '#手作', '#书卷气'],
    note: '低饱和的陶土色系，适合带一点艺术馆感。',
    brand: 'ARCHIVE',
    colors: ['#E8C9B5', '#8A5A44', '#45322B'],
    surface: '#271c18',
    accent: '#f0d8cc'
  },
  {
    id: 'olive',
    title: 'Olive Field',
    subtitle: '自然 / 安静 / 轻工业',
    tags: ['#自然', '#安静', '#轻工业'],
    note: '偏植物和织物气质的平衡方案。',
    brand: 'ROOTS',
    colors: ['#DCE0C8', '#7A8553', '#334D3B'],
    surface: '#1f2a23',
    accent: '#e8eadc'
  },
  {
    id: 'cocoa',
    title: 'Cocoa Ground',
    subtitle: '稳重 / 深色 / 有分量',
    tags: ['#稳重', '#深色', '#分量'],
    note: '更适合做标题型展示，层次非常明确。',
    brand: 'GROUND',
    colors: ['#E5CDB8', '#7E5539', '#37231D'],
    surface: '#201612',
    accent: '#f1ddd0'
  },
  {
    id: 'ink',
    title: 'Ink Studio',
    subtitle: '冷静 / 文艺 / 版式感',
    tags: ['#文艺', '#版式感', '#冷静'],
    note: '加入更强的蓝黑调，强调现代编辑感。',
    brand: 'STUDIO',
    colors: ['#D7E0E2', '#4E6770', '#16313D'],
    surface: '#111f25',
    accent: '#e4eef0'
  },
  {
    id: 'sand',
    title: 'Sand Loft',
    subtitle: '轻盈 / 中性色 / 生活方式',
    tags: ['#轻盈', '#中性色', '#生活方式'],
    note: '适合更明亮、空间感更大的展示场景。',
    brand: 'LOFT',
    colors: ['#F1E8D9', '#B28F6B', '#70604F'],
    surface: '#31261f',
    accent: '#f7f0e5'
  },
  {
    id: 'moss',
    title: 'Moss Studio',
    subtitle: '植物感 / 安稳 / 低饱和',
    tags: ['#植物感', '#安稳', '#低饱和'],
    note: '更偏大地与苔藓的组合，适合强调自然。',
    brand: 'MOSS',
    colors: ['#DCE5D4', '#8DA06D', '#496045'],
    surface: '#213126',
    accent: '#edf3e7'
  },
  {
    id: 'stone',
    title: 'Stone Quiet',
    subtitle: '静物 / 克制 / 展陈感',
    tags: ['#静物', '#克制', '#展陈感'],
    note: '最接近展览说明牌的气质，适合信息感最强的卡片。',
    brand: 'GALLERY',
    colors: ['#E6E1D8', '#9A9389', '#4C4740'],
    surface: '#26211c',
    accent: '#f4f0ea'
  }
];
