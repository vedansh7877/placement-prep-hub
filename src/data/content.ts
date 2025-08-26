export type ContentCategory = 'aptitude' | 'coding' | 'interview';

export interface HubItem {
  id: string;
  category: ContentCategory;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export const aptitudeItems: HubItem[] = [
  {
    id: 'apt-1',
    category: 'aptitude',
    title: 'Percentages Basics',
    description: 'Formulae, shortcuts, and example problems on percentages.',
    tags: ['math', 'percentages', 'quant'],
  },
  {
    id: 'apt-2',
    category: 'aptitude',
    title: 'Time & Work',
    description: 'Pipes and cisterns, efficiency method, and solved examples.',
    tags: ['time', 'work', 'quant'],
  },
  {
    id: 'apt-3',
    category: 'aptitude',
    title: 'Probability Fundamentals',
    description: 'Basic probability rules, permutations vs combinations.',
    tags: ['probability', 'combinatorics'],
  },
];

export const codingItems: HubItem[] = [
  {
    id: 'code-1',
    category: 'coding',
    title: 'Two Sum (Arrays)',
    description: 'Find two numbers that add up to target. Hash map approach.',
    tags: ['arrays', 'hashmap', 'easy'],
    link: 'https://leetcode.com/problems/two-sum/',
  },
  {
    id: 'code-2',
    category: 'coding',
    title: 'Binary Search Template',
    description: 'Left/right template and pitfalls when mid equals.',
    tags: ['binary-search', 'template', 'easy'],
  },
  {
    id: 'code-3',
    category: 'coding',
    title: 'LRU Cache (Design)',
    description: 'Doubly-linked list + map design, complexity and edge cases.',
    tags: ['design', 'linked-list', 'map', 'hard'],
  },
];

export const interviewItems: HubItem[] = [
  {
    id: 'int-1',
    category: 'interview',
    title: 'Behavioral STAR Method',
    description: 'Structure answers using Situation, Task, Action, Result.',
    tags: ['behavioral', 'STAR'],
  },
  {
    id: 'int-2',
    category: 'interview',
    title: 'System Design: URL Shortener',
    description: 'Components, data model, scaling, and bottlenecks.',
    tags: ['system-design', 'scalability'],
  },
  {
    id: 'int-3',
    category: 'interview',
    title: 'Resume Tips',
    description: 'Impact verbs, quantification, and tailoring to JD.',
    tags: ['resume', 'tips'],
  },
];

export const allItems: HubItem[] = [
  ...aptitudeItems,
  ...codingItems,
  ...interviewItems,
];

export function searchItems(query: string): HubItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return allItems.filter((item) => {
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q))
    );
  });
}