export type Palette = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  note: string;
  brand?: string;
  colors: [string, string, string];
  colorNames: [string, string, string];
  surface: string;
  accent: string;
};

export const palettes: Palette[] = [
  {
    id: 'emerald',
    title: 'Emerald 翡翠',
    subtitle: '复古 / 沉静 / 高级',
    tags: ['#复古', '#沉静', '#高级'],
    note: '冷静、克制的经典复古绿调。',
    colors: ['#D5E3D2', '#003153', '#0A3D2E'],
    colorNames: ['米白色', '普鲁士蓝', '墨绿'],
    surface: '#10281f',
    accent: '#dbe8d8'
  },
  {
    id: 'ruby',
    title: 'Ruby 红宝',
    subtitle: '浓郁 / 戏剧 / 怀旧',
    tags: ['#浓郁', '#戏剧', '#怀旧'],
    note: '高对比红蓝组合，戏剧感强。',
    colors: ['#E6DDD1', '#203850', '#7A1F2B'],
    colorNames: ['米白色', '深靛蓝', '深酒红'],
    surface: '#24131b',
    accent: '#f1e8dd'
  },
  {
    id: 'temple',
    title: 'Temple 庙街',
    subtitle: '温暖 / 复古 / 港味',
    tags: ['#温暖', '#复古', '#港味'],
    note: '暖橙与墨绿，港风复古气质明显。',
    colors: ['#E8DED0', '#26473E', '#B86B2E'],
    colorNames: ['象牙白', '墨绿色', '琥珀橙'],
    surface: '#2a2118',
    accent: '#f2e7d8'
  },
  {
    id: 'plum',
    title: 'Plum 梅子',
    subtitle: '神秘 / 优雅 / 文艺',
    tags: ['#神秘', '#优雅', '#文艺'],
    note: '紫调与深海蓝组合，安静且文艺。',
    colors: ['#E8E2D7', '#233E5A', '#69456B'],
    colorNames: ['燕麦白', '深海蓝', '柿子紫'],
    surface: '#201a22',
    accent: '#efe8df'
  },
  {
    id: 'coral',
    title: 'Coral 珊瑚',
    subtitle: '鲜活 / 年轻 / 复古',
    tags: ['#鲜活', '#年轻', '#复古'],
    note: '更鲜活的红绿对比，适合年轻表达。',
    colors: ['#EFE5D7', '#28504D', '#C85B4A'],
    colorNames: ['奶油白', '深松石绿', '珊瑚红'],
    surface: '#2a201b',
    accent: '#f4ebde'
  },
  {
    id: 'harbor',
    title: 'Harbor 港口',
    subtitle: '理性 / 国际 / 都市',
    tags: ['#理性', '#国际', '#都市'],
    note: '偏理性的都市蓝灰方案，适合信息型界面。',
    colors: ['#E3E2DB', '#2F3137', '#2A4C8B'],
    colorNames: ['云雾白', '深墨灰', '钴蓝'],
    surface: '#1e222b',
    accent: '#ecebe4'
  },
  {
    id: 'rose',
    title: 'Rose 蔷薇',
    subtitle: '浪漫 / 复古 / 精致',
    tags: ['#浪漫', '#复古', '#精致'],
    note: '柔和蔷薇调，更偏精致与浪漫。',
    colors: ['#EEDFD4', '#6F4A52', '#A55C66'],
    colorNames: ['米杏白', '玫瑰褐', '蔷薇红'],
    surface: '#2a2024',
    accent: '#f5e8df'
  },
  {
    id: 'teal',
    title: 'Teal 青碧',
    subtitle: '冷静 / 高级 / 东方',
    tags: ['#冷静', '#高级', '#东方'],
    note: '东方语境下的青碧与深咖灰，更耐看。',
    colors: ['#E3E5DD', '#403A38', '#0D6B67'],
    colorNames: ['月白色', '深咖灰', '青碧色'],
    surface: '#22211f',
    accent: '#eceee6'
  },
  {
    id: 'mustard',
    title: 'Mustard 芥末',
    subtitle: '怀旧 / 浓郁 / 艺术',
    tags: ['#怀旧', '#浓郁', '#艺术'],
    note: '芥末黄与墨蓝的组合，艺术感强。',
    colors: ['#E7E0D5', '#263D5A', '#A88B2C'],
    colorNames: ['亚麻白', '墨蓝色', '芥末黄'],
    surface: '#2a261b',
    accent: '#f0eadf'
  },
  {
    id: 'lye',
    title: 'Lye 碱液',
    subtitle: '素雅 / 自然 / 安静',
    tags: ['#素雅', '#自然', '#安静'],
    note: '低饱和的灰绿与深色组合，克制且耐看。',
    colors: ['#F0F0EC', '#B8C49A', '#2A2E2C'],
    colorNames: ['米白', '若竹', '漆黑'],
    surface: '#1d2220',
    accent: '#edf0e9'
  },
  {
    id: 'soot',
    title: 'Soot 煤烟',
    subtitle: '暗调 / 冷静 / 克制',
    tags: ['#暗调', '#冷静', '#克制'],
    note: '紫灰中性色阶，适合沉稳和内容导向的界面。',
    colors: ['#D8C8D8', '#9A8C9A', '#2A282A'],
    colorNames: ['淡紫', '菖蒲', '煤烟'],
    surface: '#1f1c20',
    accent: '#e7dfe8'
  }
];
