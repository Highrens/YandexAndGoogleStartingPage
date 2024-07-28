import React, { useState } from "react";
import "./Google.css";
import GoogleLogo from "../Image/Google-White.png";

import caledar from "../Image/Google-Icons/calendar.png";
import disk from "../Image/Google-Icons/disk.png";
import docs from "../Image/Google-Icons/docs.png";
import keep from "../Image/Google-Icons/keep.png";
import mail from "../Image/Google-Icons/mail.png";
import maps from "../Image/Google-Icons/maps.png";
import photos from "../Image/Google-Icons/photos.png";
import tabs from "../Image/Google-Icons/tabs.png";
import translate from "../Image/Google-Icons/translate.png";

const apps = [
  { id: 1, url: "https://calendar.google.com/", icon: caledar, name: "Календарь" },
  { id: 2, url: "https://drive.google.com/drive/home", icon: disk, name: "Диск" },
  { id: 3, url: "https://docs.google.com/", icon: docs, name: "Документы" },
  { id: 4, url: "https://keep.google.com/", icon: keep, name: "Заметки" },
  { id: 5, url: "https://mail.google.com/", icon: mail, name: "Почта" },
  { id: 6, url: "https://www.google.com/maps?authuser=0", icon: maps, name: "Карты" },
  { id: 7, url: "https://photos.google.com/", icon: photos, name: "Фото" },
  { id: 8, url: "https://docs.google.com/spreadsheets/u/0/", icon: tabs, name: "Таблицы" },
  {
    id: 9,
    url: "https://example.com/link9",
    icon: translate,
    name: "Переводчик",
  },
];

function GoogleSearch() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="google-search">
      <a href="https://www.google.ru/">
        <img src={GoogleLogo} alt="GoogleLogo" className="google-logo" />
      </a>

      <form
        action="https://www.google.com/search"
        method="get"
        className="google-search-form"
      >
        <input
          type="text"
          name="q"
          placeholder="Введите поисковый запрос"
          value={query}
          onChange={handleChange}
          className="google-search-input"
        />
        {/* <button type="submit" className="google-search-button">Искать в Google</button> */}
      </form>
      <div className="google-icon-grid">
        {apps.map((item) => (
          <a key={item.id} href={item.url} className="google-icon-grid-item">
            <img className="google-icon" alt="" src={item.icon} />
            <h2 className="google-icon-name">{item.name}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}

export default GoogleSearch;