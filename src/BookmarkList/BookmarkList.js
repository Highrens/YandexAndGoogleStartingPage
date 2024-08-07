import React, { useState, useEffect } from "react";
import "./BookmarkList.css";

// Функция для получения favicon по URL
const getFavicon = (url) => {
  const urlObj = new URL(url);
  return `${urlObj.origin}/favicon.ico`;
};

function BookmarkList(props) {
  const [bookmarks, setBookmarks] = useState([]);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const [showSubitButton, setShowSubmitButton] = useState([false]);

  // Загрузка закладок из LocalStorage
  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(storedBookmarks);
    if (storedBookmarks.length > 0) {
      props.isShown(true);
    }
  }, []);

  useEffect(() => {
    setShowSubmitButton(name.length !== "" && link !== "");
  }, [name, link]);

  // Сохранение закладок в LocalStorage
  const saveBookmarks = (newBookmarks) => {
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  };

  // Обработка добавления новой закладки
  const handleAddBookmark = (e) => {
    e.preventDefault();
    const newBookmark = { name, link };
    const updatedBookmarks = [...bookmarks, newBookmark];
    setBookmarks(updatedBookmarks);
    saveBookmarks(updatedBookmarks);
    setName("");
    setLink("");
  };

  //удаление закладки
  function removeBookmark(url) {
    console.log(url);
    const newArr = bookmarks.filter((bookmark) => bookmark.link !== url);
    setBookmarks(newArr);
    saveBookmarks(newArr);
  }

  return (
    <section className="BookmarkList">
      <h1 className="BookmarkList__title">Закладки</h1>
      <form className="BookmarkList__form" onSubmit={handleAddBookmark}>
        <input
          className="BookmarkList__form-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Имя ссылки:"
        />
        <input
          className="BookmarkList__form-url"
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
          placeholder="Ссылка:"
        />
        <button
          className={
            showSubitButton
              ? "BookmarkList_form-submit"
              : "BookmarkList_form-submit BookmarkList_form-submit-hide"
          }
          type="submit"
        >
          Add Bookmark
        </button>
      </form>

      <ul className="icon-grid_bookmarks">
        {bookmarks.map((bookmark, index) => (
          <li key={index} className="icon-grid-item Bookmark">
            <a
              href={bookmark.link}
              className="icon-grid-item google-icon-grid-item"
            >
              <img
                className="icon"
                src={getFavicon(bookmark.link)}
                alt={`${bookmark.name} favicon`}
              />
              <h2 className="icon-name" target="_blank">
                {bookmark.name}
              </h2>
            </a>
           
          </li>
        ))}
      </ul>
      <button className="BookmarkList__close-button " onClick={props.isShown}>
        x
      </button>
    </section>
  );
}

export default BookmarkList;

//  */}
