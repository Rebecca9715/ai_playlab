import { Tool, ToolCategory, Experiment, RequestItem, BlogPost } from './types';

export const TOOLS: Tool[] = [
  {
    id: '1',
    title: 'Focus Flow AI',
    titleZh: '心流助手',
    description: 'Smart ambient sound generator based on your current task context.',
    descriptionZh: '根据当前任务上下文生成智能白噪音，助你进入心流。',
    category: ToolCategory.EFFICIENCY,
    price: '$4.99',
    rating: 4.8,
    imageUrl: 'https://picsum.photos/400/250?random=1',
    isNew: true,
  },
  {
    id: '2',
    title: 'Muse Prompter',
    titleZh: '灵感缪斯',
    description: 'Overcome writer\'s block with oblique strategies powered by Gemini.',
    descriptionZh: '利用 Gemini 驱动的“斜策略”卡片，打破创作瓶颈。',
    category: ToolCategory.CREATIVITY,
    price: 'Free / Pro',
    rating: 4.6,
    imageUrl: 'https://picsum.photos/400/250?random=2',
  },
  {
    id: '3',
    title: 'Story Weaver',
    titleZh: '故事编织者',
    description: 'Turn scattered notes into a cohesive narrative structure.',
    descriptionZh: '将零散的笔记自动编织成连贯的叙事结构。',
    category: ToolCategory.NARRATIVE,
    price: '$9.99/mo',
    rating: 4.9,
    imageUrl: 'https://picsum.photos/400/250?random=3',
  },
  {
    id: '4',
    title: 'Viz Data Copilot',
    titleZh: '数据可视化副驾',
    description: 'Instantly generate D3.js charts from raw CSV data.',
    descriptionZh: '从原始 CSV 数据即时生成 D3.js 图表代码。',
    category: ToolCategory.EFFICIENCY,
    price: '$12.00',
    rating: 4.5,
    imageUrl: 'https://picsum.photos/400/250?random=4',
  },
];

export const EXPERIMENTS: Experiment[] = [
  {
    id: 'e1',
    title: 'Dream UI Generator',
    description: 'Generating React components from hand-drawn sketches on a napkin.',
    status: 'Prototype',
    techStack: ['Gemini Vision', 'React', 'Tailwind'],
  },
  {
    id: 'e2',
    title: 'Voice Coder',
    description: 'Writing Python scripts using only voice commands while walking.',
    status: 'Alpha',
    techStack: ['WebSpeech API', 'Gemini Flash'],
  },
];

export const REQUESTS: RequestItem[] = [
  {
    id: 'r1',
    content: 'An AI that automatically summarizes my chaotic Slack threads into a daily digest.',
    votes: 128,
    status: 'In Progress',
    author: 'Sarah_Des',
  },
  {
    id: 'r2',
    content: 'Tool to rename thousands of screenshot files based on their visual content.',
    votes: 89,
    status: 'Open',
    author: 'DesignPro',
  },
  {
    id: 'r3',
    content: 'A Chrome extension that fact-checks tweets in real-time.',
    votes: 245,
    status: 'Open',
    author: 'NewsJunkie',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Deconstructing the "Muse Prompter" Architecture',
    date: 'Oct 12, 2023',
    tag: 'Technical',
    readTime: '8 min read',
  },
  {
    id: 'b2',
    title: 'Why I switched from OpenAI to Gemini for long-context tasks',
    date: 'Oct 05, 2023',
    tag: 'Opinion',
    readTime: '5 min read',
  },
  {
    id: 'b3',
    title: 'The Indie Developer\'s Guide to AI Pricing Models',
    date: 'Sep 28, 2023',
    tag: 'Business',
    readTime: '12 min read',
  },
];