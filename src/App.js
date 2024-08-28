import "./App.css";
import React, { useState, useEffect } from "react";
import { YMInitializer } from "react-yandex-metrika";

import Bookmarks from "./components/Bookmarks/Bookmarks.js";
import GoogleSearch from "./components/Google/Google.js";
import Donate from "./components/pleaseDonate/pleaseDonate.js";
import YandexSearch from "./components/Yandex/Yandex.js";
import Popup from "./components/Popup/Popup.js";

function App() {
  const [bookmarkListIsShown, setBookmarkListIsShown] = useState(false);
  const [popupIsShown, setPopupIsShown] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // �������� �������� �� LocalStorage
  useEffect(() => {
    const storedBookmarks = getAllBookmarks();
    setBookmarks(storedBookmarks);
    if (storedBookmarks.length > 0) {
      setBookmarkListIsShown(true);
    }
  }, []);

  //����� ������� ��� ��������� ���� �����
  useEffect(
    (e) => {
      if (searchInput === "") setBookmarks(getAllBookmarks());
      setBookmarks(
        getAllBookmarks().filter((bookmark) => {
          return bookmark.name
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        })
      );
    },
    [searchInput]
  );

  function changeSearhInput(input) {
    setSearchInput(input);
  }

  function getAllBookmarks() {
    return JSON.parse(localStorage.getItem("bookmarks")) || [];
  }

  // ���������� �������� � LocalStorage
  function saveBookmarks(newBookmarks) {
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  }

  function addBookmark(bookmark) {
    const updatedBookmarks = [...bookmarks, bookmark];
    setBookmarks(updatedBookmarks);
    saveBookmarks(updatedBookmarks);
  }

  //�������� ��������
  function removeBookmark(url) {
    console.log(url);
    const newArr = getAllBookmarks().filter((bookmark) => bookmark.link !== url);
    setBookmarks(newArr);
    saveBookmarks(newArr);
  }

  // ������� ��������
  function changeBookmarksVisability() {
    setBookmarkListIsShown(!bookmarkListIsShown);
  }

  function changePopupVisibility() {
    setPopupIsShown(!popupIsShown);
  }

  return (
    <div className="App">
      <YMInitializer accounts={[98019810]} />
      <YandexSearch />
      <Bookmarks
        bookmarks={bookmarks}
        bookmarkListIsShown={bookmarkListIsShown}
        changeBookmarksVisability={changeBookmarksVisability}
        changeSearhInput={changeSearhInput}
        changePopupVisibility={changePopupVisibility}
        removeBookmark={removeBookmark}
      />
      <Popup
      popupIsShown={popupIsShown}
      changePopupVisibility={changePopupVisibility}
      addBookmark={addBookmark}
      />
      <GoogleSearch />
      <Donate />
    </div>
  );
}

export default App;
