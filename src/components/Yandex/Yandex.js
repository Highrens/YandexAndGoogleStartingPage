import React, { useState,  } from "react";
import "./Yandex.css";
import YandexLogo from "../../Image/yandex_logo.png";
import { YandexApps } from "../../constants/constants";

function YandexSearch(props) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <section className="full-section full-section_yandex">
      <form
        action="https://yandex.ru/search/"
        className="search-form"
        method="get"
        target={props.Settings.openInNewTab ? "_blank" : "_self"}
      >
        <a href="https://ya.ru/">
          <img src={YandexLogo} alt="YandexLogo" className="logo" />
        </a>
        <input
          type="text"
          name="text"
          placeholder="Найдется всё!"
          value={query}
          onChange={handleChange}
          className="search-form__input search-form__input_yandex"
        />
        {/* <button type="submit" className="yandex-search-button">РќР°Р№С‚Рё</button> */}
      </form>

      <ul className="icon-grid">
        {YandexApps.map((item) => (
          <li key={item.id} className="icon-grid-item">
            <a href={item.url} className="icon-grid-item_link " target={props.Settings.openInNewTab ? "_blank" : "_self"} rel="noreferrer">
              <img
                className="icon-grid-item_icon yandex-icon"
                alt=""
                src={item.icon}
              />
              <h2 className="icon-grid-item_name">{item.name}</h2>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default YandexSearch;
