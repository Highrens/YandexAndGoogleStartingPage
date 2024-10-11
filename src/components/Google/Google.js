import React, { useState } from "react";
import "./Google.css";
import GoogleLogo from "../../Image/Google-White.png";
import { GooogleApps } from "../../constants/constants";

function GoogleSearch(props) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    if (query.trim()) {
      const url = `https://www.google.com/search?q=${encodeURIComponent(
        query
      )}`;

      if (props.Settings.openInNewTab) {
        window.open(url, "_blank");
      } else {
        window.location.href = url;
      }
    }
  };

  return (
    <section className="full-section full-section_google">
      <form onSubmit={handleSubmit} className="search-form">
        <a href="https://www.google.ru/">
          <img src={GoogleLogo} alt="GoogleLogo" className="logo" />
        </a>
        <input
          type="text"
          name="text"
          placeholder="Введите поисковый запрос"
          value={query}
          onChange={handleChange}
          className="search-form__input search-form__input_google"
        />
        {/* <button type="submit" className="google-search-button">Искать в Google</button> */}
      </form>

      <ul className="icon-grid">
        {GooogleApps.map((item) => (
          <li key={item.id} className="icon-grid-item icon-grid-item_google">
            <a
              href={item.url}
              className="icon-grid-item_link "
              target={props.Settings.openInNewTab ? "_blank" : "_self"}
              rel="noreferrer"
            >
              <img className="icon-grid-item_icon" alt="" src={item.icon} />
              <h2 className="icon-grid-item_name">{item.name}</h2>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GoogleSearch;
