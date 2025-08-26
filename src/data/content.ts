export type ContentCategory = 'aptitude' | 'coding' | 'interview';

export interface HubItem {
  id: string;
  category: ContentCategory;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  content: string;
}

export const aptitudeItems: HubItem[] = [
  {
    id: 'apt-1',
    category: 'aptitude',
    title: 'Percentages Basics',
    description: 'Formulae, shortcuts, and example problems on percentages.',
    tags: ['math', 'percentages', 'quant'],
    content: `Key ideas

- Percentage = (Value / Base) * 100
- Successive percentage changes: a% then b% => net = a + b + (ab)/100

Practice

1) What is 15% of 240?
   0.15 * 240 = 36

2) If a price increases by 20% and then decreases by 10%, net change?
   20 + (-10) + (20 * -10)/100 = 10 - 2 = 8% increase.`,
  },
  {
    id: 'apt-2',
    category: 'aptitude',
    title: 'Time & Work',
    description: 'Pipes and cisterns, efficiency method, and solved examples.',
    tags: ['time', 'work', 'quant'],
    content: `Key ideas

- Work = Rate * Time
- If A does a job in a days, rate_A = 1/a per day
- Combined rate adds linearly

Practice

A completes a job in 10 days, B in 15 days. Together?
Rate = 1/10 + 1/15 = 1/6 => 6 days.`,
  },
  {
    id: 'apt-3',
    category: 'aptitude',
    title: 'Probability Fundamentals',
    description: 'Basic probability rules, permutations vs combinations.',
    tags: ['probability', 'combinatorics'],
    content: `Key ideas

- P(A) = favorable / total
- Independent events: P(A ∩ B) = P(A)P(B)
- Combinations: C(n, r) = n! / (r!(n-r)!)

Example

Two fair coins: P(exactly one head) = 2/4 = 1/2.`,
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
    content: `Approach

- Use a map from needed = target - nums[i] -> i
- For each i, if nums[i] exists in map, return [map[nums[i]], i]

Complexity: O(n) time, O(n) space.`,
  },
  {
    id: 'code-2',
    category: 'coding',
    title: 'Binary Search Template',
    description: 'Left/right template and pitfalls when mid equals.',
    tags: ['binary-search', 'template', 'easy'],
    content: `Template (lower bound)

let lo = 0, hi = n; // [lo, hi)
while (lo < hi) {
  const mid = Math.floor((lo + hi) / 2);
  if (arr[mid] < target) lo = mid + 1;
  else hi = mid;
}
return lo;`,
  },
  {
    id: 'code-3',
    category: 'coding',
    title: 'LRU Cache (Design)',
    description: 'Doubly-linked list + map design, complexity and edge cases.',
    tags: ['design', 'linked-list', 'map', 'hard'],
    content: `Design

- Hash map: key -> node
- Doubly-linked list: MRU at head, LRU at tail
- On get/set: move node to head; evict tail when capacity exceeded

Time: O(1) per op.`,
  },
];

export const interviewItems: HubItem[] = [
  {
    id: 'int-1',
    category: 'interview',
    title: 'Behavioral STAR Method',
    description: 'Structure answers using Situation, Task, Action, Result.',
    tags: ['behavioral', 'STAR'],
    content: `STAR

- Situation: Provide context
- Task: What was required
- Action: What you did (focus on you)
- Result: Quantify outcomes (metrics)`,
  },
  {
    id: 'int-2',
    category: 'interview',
    title: 'System Design: URL Shortener',
    description: 'Components, data model, scaling, and bottlenecks.',
    tags: ['system-design', 'scalability'],
    content: `Key components

- API service, DB for mappings, cache, background workers
- Hashing / ID generation, collision handling
- Custom domains, analytics, rate limiting
- Partitioning and replication for scale`,
  },
  {
    id: 'int-3',
    category: 'interview',
    title: 'Resume Tips',
    description: 'Impact verbs, quantification, and tailoring to JD.',
    tags: ['resume', 'tips'],
    content: `Tips

- Use strong action verbs: Led, Built, Optimized
- Quantify: Improved latency 40%, Reduced costs 20%
- Tailor bullets to the job description keywords`,
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
      item.content.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q))
    );
  });
}