import "./Bookmarks.css";
import BookmarkList from "../BookmarkList/BookmarkList";

function Bookmarks(props) {
  return (
    <div
      className={
        props.bookmarkListIsShown ? "Bookmarks Bookmarks_shown" : "Bookmarks"
      }
    >
      <BookmarkList
        bookmarks={props.bookmarks}
        isShown={props.bookmarkListIsShown}
        changeSearhInput={props.changeSearhInput}
        changeBookmarksVisability={props.changeBookmarksVisability}
        changePopupVisibility={props.changePopupVisibility}
        removeBookmark={props.removeBookmark}
      />
      {props.bookmarkListIsShown ? (
        <button
          className="Bookmarks-add-button Bookmarks-add-button_close"
          onClick={props.openBookmarks}
        ></button>
      ) : (
        <button
          className="Bookmarks-add-button"
          onClick={props.changeBookmarksVisability}
        >
          +
        </button>
      )}
    </div>
  );
}

export default Bookmarks;
