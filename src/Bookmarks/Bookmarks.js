import React, { useState, useEffect } from "react";
import "./Bookmarks.css";
import BookmarkList from "../BookmarkList/BookmarkList";

const Bookmarks = () => {
  const [bookmarkListIsShown, setBookmarkListIsShown] = useState(false);

  function openBookmarks() {
    setBookmarkListIsShown(!bookmarkListIsShown);
  }

  return (
    <div
      className={
        bookmarkListIsShown ? "Bookmarks Bookmarks_shown" : "Bookmarks"
      }
    >
      <BookmarkList isShown={openBookmarks} />

      {bookmarkListIsShown ? (
        <button
          className="Bookmarks-add-button Bookmarks-add-button_close"
          onClick={openBookmarks}
        >
          x
        </button>
      ) : (
        <button className="Bookmarks-add-button" onClick={openBookmarks}>
          +
        </button>
      )}
    </div>
  );
};

export default Bookmarks;
