import React, { useState, useEffect } from "react";
import "./BookmarkList.css";

import trashcan from "../../Image/trashcan.png";

// Функция для получения favicon по URL
const getFavicon = (url) => {
  // const urlObj = new URL(url);
  return `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=64`;
  // return `${urlObj.origin}/favicon.ico`;
};

function BookmarkList(props) {
  return (
    <section className="BookmarkList">
      <form className="search-form">
        <h1 className="BookmarkList__title">Закладки</h1>
        <input
          className="search-form__input search-form__input_bookmarkList"
          type="text"
          onChange={(e) => props.changeSearhInput(e.target.value)}
          placeholder="Поиск по вкладкам"
        />
      </form>

      <ul className={props.bookmarks.length > 9 ? "icon-grid icon-grid_wide" : "icon-grid" }>
        {props.bookmarks.map((bookmark, index) => (
          // Одна закладка
          <li key={index} className="icon-grid-item icon-grid-item_google">
            <a href={bookmark.link} className="icon-grid-item_link">
              <img
                className="icon-grid-item_icon"
                src={getFavicon(bookmark.link)}
                alt={`${bookmark.name} favicon`}
              />
              <h2 className="icon-grid-item_name" target="_blank">
                {bookmark.name}
              </h2>
            </a>
            {/* Кнопка удаления, появляется при наведении */}
            <button
              onClick={() => props.removeBookmark(bookmark.link)}
              className="remove-button"
            >
              <img
                className="remove-button-icon"
                src={trashcan}
                alt="remove-bookmark"
              />
            </button>
          </li>
        ))}
        {/* кнопка открытия pop-up для добавления новой закладки */}
        <button
          className="BookmarkList__add-button"
          onClick={props.changePopupVisibility}
        >
          +
        </button>
      </ul>
      <button
        className="BookmarkList__close-button "
        onClick={props.changeBookmarksVisability}
      >
        ↓
      </button>
    </section>
  );
}

export default BookmarkList;

//  */}
