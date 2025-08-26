import { Link } from 'react-router-dom';

export default function Home() {
  const cards = [
    { to: '/placement', title: 'Placement', desc: 'Aptitude, Coding, Interview tips — all in one place.' },
    { to: '/bookmarks', title: 'Bookmarks', desc: 'Your saved items for quick revision.' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Placement Preparation Hub</h1>
      <p className="text-gray-600 dark:text-gray-400">Prepare for aptitude, coding interviews, and more. Use search and bookmarks to personalize your prep.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((c) => (
          <Link key={c.to} to={c.to} className="block rounded-lg border border-gray-200 dark:border-gray-800 p-5 hover:bg-gray-50 dark:hover:bg-gray-900">
            <div className="text-lg font-medium">{c.title}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{c.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}