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

  // Загрузка закладок из LocalStorage
  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(storedBookmarks);
    if (storedBookmarks.length > 0) {
     // props.isShown(true);
    }
  }, []);

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

  return (
    <div className="BookmarkList">
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
        <button className="BookmarkList_form-submit" type="submit">Add Bookmark</button>
      </form>

      <div className="icon-grid " >
        {bookmarks.map((bookmark, index) => (
            <a href={bookmark.link} className="icon-grid-item google-icon-grid-item">
              <img  className="icon" src={getFavicon(bookmark.link)} alt={`${bookmark.name} favicon`} />
              <h2 className="icon-name"  target="_blank">{bookmark.name}</h2>
            </a>
        ))}
      </div>
      <button className="BookmarkList__close-button" onClick={props.isShown}>
        x
      </button>
    </div>
  );
}

export default BookmarkList;
