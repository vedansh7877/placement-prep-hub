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
    link: 'https://www.cuemath.com/percentages/'
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
    link: 'https://www.geeksforgeeks.org/aptitude-time-and-work-concepts-formulas/'
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
    link: 'https://www.khanacademy.org/math/statistics-probability/probability-library'
  },
  {
    id: 'apt-4',
    category: 'aptitude',
    title: 'Ratio & Proportion',
    description: 'Solving problems involving direct and inverse proportions.',
    tags: ['ratio', 'proportion', 'quant'],
    content: `Key ideas

- Ratio a:b = a/b
- Proportion a:b = c:d => a/b = c/d
- Inverse proportion: x₁y₁ = x₂y₂

Example

If A:B = 2:3 and B:C = 4:5, then A:C = 8:15.`,
    link: 'https://byjus.com/aptitude/ratio-and-proportion/'
  },
  {
    id: 'apt-5',
    category: 'aptitude',
    title: 'Simple & Compound Interest',
    description: 'Interest calculations with shortcuts and comparisons.',
    tags: ['interest', 'finance', 'quant'],
    content: `Formulas

- Simple Interest: SI = (P * R * T) / 100
- Compound Interest: A = P(1 + R/100)^T

Tip: For small R and T, CI ≈ SI + (P*(R/100)^2)/2`,
    link: 'https://www.geeksforgeeks.org/aptitude-simple-and-compound-interest/'
  },
  {
    id: 'apt-6',
    category: 'aptitude',
    title: 'Number Systems',
    description: 'Divisibility, LCM/HCF, remainders (mod arithmetic).',
    tags: ['number-system', 'divisibility'],
    content: `Tips

- Use Euclid for GCD
- Chinese Remainder Theorem for co-prime moduli
- Last digit cycles for powers`,
    link: 'https://www.indiabix.com/aptitude/number-systems/'
  },
  {
    id: 'apt-7',
    category: 'aptitude',
    title: 'Data Interpretation',
    description: 'Solving charts/tables quickly using approximations.',
    tags: ['data-interpretation', 'charts'],
    content: `Approach

- Scan axes and units first
- Estimate with rounding, then refine
- Compare ratios instead of raw numbers when possible`,
    link: 'https://www.indiabix.com/data-interpretation/questions-and-answers/'
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
    link: 'https://leetcode.com/explore/learn/card/binary-search/'
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
    link: 'https://leetcode.com/problems/lru-cache/'
  },
  {
    id: 'code-4',
    category: 'coding',
    title: 'Longest Substring Without Repeating',
    description: 'Sliding window with frequency/map.',
    tags: ['sliding-window', 'string', 'medium'],
    content: `Approach

- Maintain window [l,r) and last-seen index of characters
- If repeat inside window, move l to max(l, last[c]+1)
- Update best length

Time: O(n)`,
    link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/'
  },
  {
    id: 'code-5',
    category: 'coding',
    title: 'Merge Intervals',
    description: 'Sort by start, merge overlapping intervals in one pass.',
    tags: ['intervals', 'sorting', 'medium'],
    content: `Steps

- Sort intervals by start
- Iterate and merge when current.start <= last.end
- Otherwise push new interval`,
    link: 'https://leetcode.com/problems/merge-intervals/'
  },
  {
    id: 'code-6',
    category: 'coding',
    title: 'Number of Islands',
    description: 'Count connected components with BFS/DFS on grid.',
    tags: ['graph', 'bfs', 'dfs', 'medium'],
    content: `Tips

- Traverse grid, when you find '1' start BFS/DFS marking visited
- Directions: up/down/left/right
- Count components`,
    link: 'https://leetcode.com/problems/number-of-islands/'
  },
  {
    id: 'code-7',
    category: 'coding',
    title: 'Coin Change',
    description: 'DP: min coins to make amount.',
    tags: ['dp', 'knapsack', 'medium'],
    content: `DP

- dp[x] = 0 if x=0, else 1 + min(dp[x-coin])
- Initialize dp with Infinity; iterate amounts 1..A`,
    link: 'https://leetcode.com/problems/coin-change/'
  },
  {
    id: 'code-8',
    category: 'coding',
    title: 'Top K Frequent Elements',
    description: 'Hashmap + heap/bucket sort.',
    tags: ['heap', 'bucket', 'hashmap', 'medium'],
    content: `Approach

- Count freq in map
- Use bucket arrays by frequency or a min-heap of size K`,
    link: 'https://leetcode.com/problems/top-k-frequent-elements/'
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
    link: 'https://www.themuse.com/advice/star-interview-method'
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
    link: 'https://github.com/donnemartin/system-design-primer'
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
    link: 'https://www.resume.io/blog/50-powerful-resume-words'
  },
  {
    id: 'int-4',
    category: 'interview',
    title: 'Rate Limiter (System Design)',
    description: 'Token bucket vs leaky bucket, distributed counters.',
    tags: ['system-design', 'rate-limiting'],
    content: `Concepts

- Fixed window, sliding window
- Token bucket: allow bursts; Leaky bucket: smooth out
- Redis/Lua scripts for atomicity`,
    link: 'https://cloud.google.com/architecture/rate-limiting-strategies-techniques'
  },
  {
    id: 'int-5',
    category: 'interview',
    title: 'REST vs GraphQL',
    description: 'Trade-offs, over/under-fetching, versioning.',
    tags: ['api', 'graphql', 'rest'],
    content: `Compare

- REST: resources, caching via HTTP semantics
- GraphQL: single endpoint, typed schema, avoids overfetching
- Consider complexity, tooling, caching`,
    link: 'https://graphql.org/learn/'
  },
  {
    id: 'int-6',
    category: 'interview',
    title: 'HTTP & Networking Basics',
    description: 'HTTP methods, status codes, TLS, cookies, CORS.',
    tags: ['http', 'networking'],
    content: `Essentials

- Methods: GET/POST/PUT/PATCH/DELETE
- Status: 2xx success, 3xx redirect, 4xx client, 5xx server
- TLS handshake basics; SameSite cookies; CORS preflight`,
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview'
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