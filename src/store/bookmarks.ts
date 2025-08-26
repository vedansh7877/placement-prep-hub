import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BookmarkState {
  bookmarkedIds: Record<string, true>;
  toggle: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  clear: () => void;
}

export const useBookmarkStore = create<BookmarkState>()(
  persist(
    (set, get) => ({
      bookmarkedIds: {},
      toggle: (id: string) => {
        const next = { ...get().bookmarkedIds };
        if (next[id]) {
          delete next[id];
        } else {
          next[id] = true;
        }
        set({ bookmarkedIds: next });
      },
      isBookmarked: (id: string) => Boolean(get().bookmarkedIds[id]),
      clear: () => set({ bookmarkedIds: {} }),
    }),
    { name: 'pph-bookmarks' }
  )
);