import "./App.css";

import BookmarkList from "./BookmarkList/BookmarkList.js";
import Bookmarks from "./Bookmarks/Bookmarks.js";
import GoogleSearch from "./Google/Google.js";
import YandexSearch from "./Yandex/Yandex.js";

function App() {
  return (
    <div className="App">
      <YandexSearch />
      <Bookmarks />
      <GoogleSearch />
    </div>
  );
}

export default App;
