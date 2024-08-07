import "./App.css";

import Bookmarks from "./components/Bookmarks/Bookmarks.js";
import GoogleSearch from "./components/Google/Google.js";
import Donate from "./components/pleaseDonate/pleaseDonate.js";
import YandexSearch from "./components/Yandex/Yandex.js";


function App() {
  return (
    <div className="App">
      <YandexSearch />
      <Bookmarks />
      <GoogleSearch />
      <Donate />
    </div>
  );
}

export default App;
