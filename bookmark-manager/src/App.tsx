import { BookmarkList } from "./components/BookmarkList";

import { Bookmark } from "./components/types";

const dummyBookmarks: Bookmark[] = [
  { id: 1, title: "GitHub", url: "https://github.com" },
  { id: 2, title: "YouTube", url: "https://youtube.com" },
];

export default function App() {
  return (
    <div>
      <h1>Bookmark Manager</h1>
      <BookmarkList bookmarks={dummyBookmarks} />
    </div>
  );
}
