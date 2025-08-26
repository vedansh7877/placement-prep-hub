import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Moon, Sun, Bookmark, Search } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [q, setQ] = useState('');

  useEffect(() => {
    setQ(params.get('q') ?? '');
  }, [params]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const query = q.trim();
    if (query) navigate(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
        <Link to="/" className="font-semibold text-lg">
          Placement Hub
        </Link>

        <nav className="hidden sm:flex items-center gap-4 text-sm">
          <Link to="/placement" className="hover:underline">Placement</Link>
          <Link to="/bookmarks" className="hover:underline">Bookmarks</Link>
        </nav>

        <form onSubmit={onSubmit} className="ml-auto flex items-center gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 w-full sm:w-80">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search topics..."
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>
          <button type="submit" className="hidden sm:inline-flex px-3 py-2 text-sm rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900">
            Search
          </button>
        </form>

        <button
          className="ml-2 inline-flex items-center justify-center w-9 h-9 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
          aria-label="Toggle theme"
          onClick={toggleTheme}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>

        <Link
          to="/bookmarks"
          className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
          aria-label="Bookmarks"
          title="Bookmarks"
        >
          <Bookmark className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}