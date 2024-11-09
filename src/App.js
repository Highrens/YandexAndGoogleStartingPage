import "./App.css";
import React, { useState, useEffect } from "react";
import { YMInitializer } from "react-yandex-metrika";

import GoogleSearch from "./components/Google/Google.js";
import Donate from "./components/pleaseDonate/pleaseDonate.js";
import YandexSearch from "./components/Yandex/Yandex.js";
import AddPopup from "./components/AddPopup/AddPopup.js";
import SettingsPanel from "./components/SettingPanel/SettingPanel.js";
import BookmarkList from "./components/BookmarkList/BookmarkList.js";
import EditPopup from "./components/EditPopup/EditPopup.js";
import {
  LightTheme,
  DarkTheme,
  defaultSettings,
  getGridTemplateAreas,
} from "./constants/constants.js";
import SettingPopup from "./components/SettingPopup/SettingPopup.js";

function App() {
  const [popupIsShown, setPopupIsShown] = useState("none");
  const [bookmarks, setBookmarks] = useState([]);
  const [currentBookmark, setCurrentBookmark] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [settingsMode, setSettingsMode] = useState(false);

  const [currentSettings, setCurrentSettings] = useState(defaultSettings);

  const [columns, setColums] = useState(3);

  useEffect(() => {
    // Загрузка закладок из LocalStorage
    const storedBookmarks = getAllBookmarks();
    setBookmarks(storedBookmarks);

    if (storedBookmarks.length < 3) {
      setColums(3);
    } else {
      setColums(Math.ceil(storedBookmarks.length / 3));
      console.log(storedBookmarks.length / 3);
    }

    // Загрузка настроек из LocalStorage
    const savedSettings = localStorage.getItem("appSettings");

    if (savedSettings != null) {
      const loadedSettings = JSON.parse(savedSettings);
      setCurrentSettings(loadedSettings);
      loadedSettings.isDarkTheme ? DarkTheme() : LightTheme();
    } else {
      localStorage.setItem("appSettings", JSON.stringify(currentSettings));
    }
  }, []);

  function changeDarkTheme() {
    const Theme = !currentSettings.isDarkTheme;

    Theme ? DarkTheme() : LightTheme();

    const newSettings = {
      ...currentSettings,
      isDarkTheme: Theme,
    };
    saveSettings(newSettings);
  }

  function changeOpenInNewTab() {
    const newSettings = {
      ...currentSettings,
      openInNewTab: !currentSettings.openInNewTab,
    };
    saveSettings(newSettings); // Сохраняем новое состояние открытия в новой вкладке
  }

  function changeGoogleVisibility() {
    const newSettings = {
      ...currentSettings,
      google: !currentSettings.google,
    };
    saveSettings(newSettings); // Сохраняем новое состояние открытия в новой вкладке
  }

  function changeYandexVisibility() {
    const newSettings = {
      ...currentSettings,
      yandex: !currentSettings.yandex,
    };
    saveSettings(newSettings); // Сохраняем новое состояние открытия в новой вкладке
  }

  const saveSettings = (newSettings) => {
    setCurrentSettings(newSettings);
    localStorage.setItem("appSettings", JSON.stringify(newSettings)); // Сохранение новых настроек
  };

  //Поиск вкладок при изменении поля ввода
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

  // Сохранение закладок в LocalStorage
  function saveBookmarks(newBookmarks) {
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  }

  function addBookmark(bookmark) {
    const updatedBookmarks = [...bookmarks, bookmark];
    setBookmarks(updatedBookmarks);
    saveBookmarks(updatedBookmarks);
  }

  function ChangeBookmark(bookmark) {
    setCurrentBookmark(bookmark);
    changePopupVisibility("EditPopup");
  }

  function EditBookmark(UpdatedBookmark) {
    const currentBookmarkIndex = bookmarks.findIndex(
      (bookmark) => bookmark.link === currentBookmark.link
    );
    const updatedBookmarks = bookmarks;
    updatedBookmarks[currentBookmarkIndex] = UpdatedBookmark;
    setBookmarks(updatedBookmarks);
  }

  //удаление закладки
  function removeBookmark(url) {
    console.log(url);
    const newArr = getAllBookmarks().filter(
      (bookmark) => bookmark.link !== url
    );
    setBookmarks(newArr);
    saveBookmarks(newArr);
  }

  //Переключение режима редактирования
  const changeSettingsMode = () => {
    setSettingsMode(!settingsMode);
  };

  function changePopupVisibility(Popup_name) {
    setPopupIsShown(Popup_name);
  }

  return (
    <div
      className="App"
      style={{
        gridTemplateAreas: getGridTemplateAreas(
          currentSettings.yandex,
          currentSettings.google
        ),
      }}
    >
      <YMInitializer accounts={[98019810]} />

      {currentSettings.yandex ? (
        <YandexSearch Settings={currentSettings} />
      ) : (
        <></>
      )}
      <BookmarkList
        changeSearhInput={changeSearhInput}
        bookmarks={bookmarks}
        settingsMode={settingsMode}
        Settings={currentSettings}
        removeBookmark={removeBookmark}
        ChangeBookmark={ChangeBookmark}
        changePopupVisibility={changePopupVisibility}
        columns={columns}
      />

      {currentSettings.google ? (
        <GoogleSearch Settings={currentSettings} />
      ) : (
        <></>
      )}

      <SettingsPanel
        changePopupVisibility={changePopupVisibility}
        changeSettingsMode={changeSettingsMode}
        changeDarkTheme={changeDarkTheme}
        settingsMode={settingsMode}
        Settings={currentSettings}
      />
      <AddPopup
        popupIsShown={popupIsShown}
        changePopupVisibility={changePopupVisibility}
        addBookmark={addBookmark}
      />
      <EditPopup
        popupIsShown={popupIsShown}
        changePopupVisibility={changePopupVisibility}
        EditBookmark={EditBookmark}
        currentBookmark={currentBookmark}
      />
      <SettingPopup
        bookmarks={bookmarks}
        popupIsShown={popupIsShown}
        changePopupVisibility={changePopupVisibility}
        changeOpenInNewTab={changeOpenInNewTab}
        changeGoogleVisibility={changeGoogleVisibility}
        changeYandexVisibility={changeYandexVisibility}
        changeTheme={changeDarkTheme}
        Settings={currentSettings}
      />

      <Donate />
    </div>
  );
}

export default App;
