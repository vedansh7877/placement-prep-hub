import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import CategoryPage from './pages/Category';
import BookmarksPage from './pages/Bookmarks';
import SearchPage from './pages/Search';
import { aptitudeItems, codingItems, interviewItems } from './data/content';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aptitude" element={<CategoryPage title="Aptitude" items={aptitudeItems} />} />
          <Route path="coding" element={<CategoryPage title="Coding" items={codingItems} />} />
          <Route path="interview" element={<CategoryPage title="Interview Tips" items={interviewItems} />} />
          <Route path="bookmarks" element={<BookmarksPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App
