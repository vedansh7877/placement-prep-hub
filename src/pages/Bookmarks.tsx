import CategoryPage from './Category';
import { allItems } from '../data/content';
import { useBookmarkStore } from '../store/bookmarks';

export default function BookmarksPage() {
  const bookmarkedIds = useBookmarkStore((s) => s.bookmarkedIds);
  const saved = allItems.filter((it) => bookmarkedIds[it.id]);

  return (
    <CategoryPage title="Bookmarks" items={saved} />
  );
}