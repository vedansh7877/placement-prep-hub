import { useState } from 'react';
import CategoryPage from './Category';
import { aptitudeItems, codingItems, interviewItems } from '../data/content';

const tabs = [
  { key: 'aptitude', label: 'Aptitude', items: aptitudeItems },
  { key: 'coding', label: 'Coding', items: codingItems },
  { key: 'interview', label: 'Interview', items: interviewItems },
] as const;

type TabKey = typeof tabs[number]['key'];

export default function PlacementPage() {
  const [active, setActive] = useState<TabKey>('aptitude');

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Placement Preparation</h1>

      <div className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-800">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={
              'px-4 py-2 text-sm -mb-px border-b-2 ' +
              (active === t.key
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200')
            }
          >
            {t.label}
          </button>
        ))}
      </div>

      {active === 'aptitude' && <CategoryPage title="Aptitude" items={aptitudeItems} />}
      {active === 'coding' && <CategoryPage title="Coding" items={codingItems} />}
      {active === 'interview' && <CategoryPage title="Interview Tips" items={interviewItems} />}
    </div>
  );
}