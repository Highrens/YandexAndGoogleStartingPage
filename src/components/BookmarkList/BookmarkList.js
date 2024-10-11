import "./BookmarkList.css";

import Bookmark from "../Bookmark/Bookmark";

function BookmarkList(props) {
  return (
    <section className="BookmarkList">
      <h1 className="BookmarkList__title">Вкладки</h1>
      <form className="BookmarkList__search-form">
        <input
          className="search-form__input search-form__input_bookmarkList"
          type="text"
          onChange={(e) => props.changeSearhInput(e.target.value)}
          placeholder="Поиск по вкладкам"
        />
      </form>

      <ul
        className={
          props.bookmarks.length > 9 ? "icon-grid icon-grid_wide" : "icon-grid"
        }
      >
        {props.bookmarks.map((bookmark, index) => (
          // Одна закладка
          <Bookmark
            key={index}
            bookmark={bookmark}
            settingsMode={props.settingsMode}
            removeBookmark={props.removeBookmark}
            ChangeBookmark={props.ChangeBookmark}
            Settings={props.Settings}
          />
        ))}
      </ul>
    </section>
  );
}

export default BookmarkList;
