import "./App.css";

import Bookmarks from "./Bookmarks/Bookmarks.js";
import GoogleSearch from "./Google/Google.js";
import YandexSearch from "./Yandex/Yandex.js";

const donationImage =
  "https://static.donationalerts.ru/uploads/qr/7021501/qr_fef0615cd29e18e3a4a884f22f2aff22.png";

function App() {
  return (
    <div className="App">
      <YandexSearch />
      <Bookmarks />
      <GoogleSearch />

      <a
                className="donation-link"
      href="https://www.donationalerts.com/r/highrens">
        <img
          className="donation-image"
          src={donationImage}
          alt="pleaseDonateMe"
        />
        Если понравилось, можешь помочь разработчику покушать 👉👈
      </a>
    </div>
  );
}

export default App;
