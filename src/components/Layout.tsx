import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-800 text-sm py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          © {new Date().getFullYear()} Placement Preparation Hub
        </div>
      </footer>
    </div>
  );
}