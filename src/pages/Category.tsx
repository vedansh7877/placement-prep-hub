import type { HubItem } from '../data/content';
import { useBookmarkStore } from '../store/bookmarks';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

function ItemCard({ item }: { item: HubItem }) {
  const toggle = useBookmarkStore((s) => s.toggle);
  const isBookmarked = useBookmarkStore((s) => s.isBookmarked(item.id));

  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-2">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <Link to={`/item/${item.id}`} className="font-medium hover:underline">{item.title}</Link>
          <div className="text-sm text-gray-600 dark:text-gray-400">{item.description}</div>
          <div className="mt-1 text-xs text-gray-500">{item.tags.join(', ')}</div>
        </div>
        <button
          onClick={() => toggle(item.id)}
          className="px-3 py-1.5 text-xs rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
        >
          {isBookmarked ? 'Bookmarked' : 'Bookmark'}
        </button>
      </div>
      {item.link && (
        <a href={item.link} target="_blank" className="text-sm text-blue-600 hover:underline">
          Open Resource ↗
        </a>
      )}
    </div>
  );
}

export default function CategoryPage({ title, items }: { title: string; items: HubItem[] }) {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return items;
    return items.filter((it) =>
      it.title.toLowerCase().includes(query) ||
      it.description.toLowerCase().includes(query) ||
      it.content.toLowerCase().includes(query) ||
      it.tags.some((t) => t.toLowerCase().includes(query))
    );
  }, [q, items]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-semibold flex-1">{title}</h1>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter..."
          className="w-full sm:w-64 px-3 py-2 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm"
        />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {filtered.map((it) => (
          <ItemCard key={it.id} item={it} />
        ))}
      </div>
    </div>
  );
}