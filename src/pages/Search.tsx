import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { HubItem } from '../data/content';
import { searchItems } from '../data/content';
import CategoryPage from './Category';

export default function SearchPage() {
  const [params] = useSearchParams();
  const q = params.get('q') ?? '';

  const results: HubItem[] = useMemo(() => {
    return searchItems(q);
  }, [q]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Search</h1>
      <div className="text-sm text-gray-600 dark:text-gray-400">{q ? `Showing results for "${q}"` : 'Type in the search box above.'}</div>
      {q && results.length === 0 ? (
        <div className="text-gray-500">No results found.</div>
      ) : (
        <CategoryPage title="Results" items={results} />
      )}
    </div>
  );
}