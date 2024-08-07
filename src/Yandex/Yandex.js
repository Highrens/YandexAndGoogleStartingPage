import React, { useState } from "react";
import "./Yandex.css";
import YandexLogo from "../Image/yandex_logo.png";

import disk from "../Image/Yandex-icons/Disk_v3.svg";
import eda from "../Image/Yandex-icons/Eda_v3.svg";
import kino from "../Image/Yandex-icons/Kinopoisk_v4.svg";
import maps from "../Image/Yandex-icons/Maps_v3.svg";
import market from "../Image/Yandex-icons/Market_v53.svg";
import taxi from "../Image/Yandex-icons/Taxi_v3.svg";
import translate from '../Image/Yandex-icons/Translate_v6.svg';
import weather from '../Image/Yandex-icons/Weather_v4.svg';
import music from '../Image/Yandex-icons/music_new.svg';

const apps = [
  { id: 1, url: 'https://disk.yandex.ru/', icon: disk, name: 'Диск'},
  { id: 2, url: 'https://eda.yandex.ru/', icon: eda , name: 'Еда'},
  { id: 3, url: 'https://www.kinopoisk.ru/', icon: kino , name: 'Кинопоиск'},
  { id: 4, url: 'https://yandex.ru/maps', icon: maps , name: 'Карты'},
  { id: 5, url: 'https://market.yandex.ru/', icon: market , name: 'Маркет'},
  { id: 6, url: 'https://taxi.yandex.ru/', icon: taxi , name: 'Такси'},
  { id: 7, url: 'https://translate.yandex.ru/', icon: translate , name: 'Переводчик'},
  { id: 8, url: 'https://yandex.ru/pogoda', icon: weather , name: 'Погода'},
  { id: 9, url: 'https://music.yandex.ru/', icon: music , name: 'Музыка'},
];

function YandexSearch() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 1) {
      fetch(
        `https://suggest.yandex.ru/suggest-ya.cgi?part=${value}&l=10&n=10&callback=?`
      )
        .then((response) => response.jsonp())
        .then((data) => {
          setSuggestions(data[1]);
          console.log(data)
        })
        .catch((error) => console.error("Error fetching suggestions:", error));
    } else {
      setSuggestions([]);
    }
  };

  return (
    <section className="yandex-search">
      <a href="https://ya.ru/">
        <img src={YandexLogo} alt="GoogleLogo" className="yandex-logo" />
      </a>
      <form
        className="yandex-search-form"
        action="https://yandex.ru/search/"
        method="get"
      >
        <input
          type="text"
          name="text"
          placeholder="Найдется всё!"
          value={query}
          onChange={handleChange}
          className="yandex-search-input"
        />
        {/* <button type="submit" className="yandex-search-button">РќР°Р№С‚Рё</button> */}
      </form>
      {suggestions.length > 0 && (
        <ul className="yandex-suggestions">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="yandex-suggestion-item">
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <div className="icon-grid">
        {apps.map((item) => (
          <a key={item.id} href={item.url} className="icon-grid-item ">
            <img className="icon yandex-icon" alt="" src={item.icon} />
            <h2 className="icon-name">{item.name}</h2>
          </a>
        ))}
      </div>
    </section>
  );
}
export default YandexSearch;
