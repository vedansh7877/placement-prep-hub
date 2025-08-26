import { useParams, Link } from 'react-router-dom';
import { allItems } from '../data/content';
import { useBookmarkStore } from '../store/bookmarks';

export default function ItemDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const item = allItems.find((it) => it.id === id);
  const toggle = useBookmarkStore((s) => s.toggle);
  const isBookmarked = useBookmarkStore((s) => (id ? s.isBookmarked(id) : false));

  if (!item) {
    return (
      <div className="space-y-4">
        <div className="text-lg font-semibold">Item not found</div>
        <Link to="/" className="text-blue-600 hover:underline">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-semibold flex-1">{item.title}</h1>
        <button
          onClick={() => toggle(item.id)}
          className="px-3 py-1.5 text-xs rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
        >
          {isBookmarked ? 'Bookmarked' : 'Bookmark'}
        </button>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{item.description}</div>
      <div className="text-xs text-gray-500">{item.tags.join(', ')}</div>
      <pre className="whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded-md border border-gray-200 dark:border-gray-800">{item.content}</pre>
      {item.link && (
        <a href={item.link} target="_blank" className="text-blue-600 hover:underline text-sm">Open external resource ↗</a>
      )}
    </div>
  );
}