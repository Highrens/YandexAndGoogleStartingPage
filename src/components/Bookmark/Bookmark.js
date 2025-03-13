import trashcan from "../../Image/trashcan.png";
import settingsIcon from "../../Image/settings.png";
import "./Bookmark.css";

// Функция для получения favicon по URL
const getFavicon = (url) => {
  return `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=64`;
};

function Bookmark(props) {

  function ChangeBookmark(bookmark) {
    props.ChangeBookmark(bookmark);
  }

  function removeBookmark(bookmarkUrl) {
    props.removeBookmark(bookmarkUrl);
  }

  return (
    <li className="icon-grid-item icon-grid-item_google">
      <a
        href={props.bookmark.link}
        className="icon-grid-item_link"
        target={props.Settings.openInNewTab ? "_blank" : "_self"}
        rel="noreferrer"
      >
        <img
          className="icon-grid-item_icon"
          src={"currentIcon" in props.bookmark ? props.icons[props.bookmark.currentIcon] : getFavicon(props.bookmark.link)}
          alt={`${props.bookmark.name} favicon`}
        />
        <h2 className="icon-grid-item_name" target="_blank">
          {props.bookmark.name}
        </h2>
      </a>
      {/* {props.settingsMode ? ( */}
      <div className={props.settingsMode ? "icon-grid-item-setting" : "icon-grid-item-setting icon-grid-item-setting_hide"}>
        {/* <div className="icon-grid-item-setting icon-grid-item-setting_hide"> */}
          <button
            onClick={() => {
              ChangeBookmark(props.bookmark);
            }}
            className="icon-grid-item-setting-button"
          >
            <img
              src={settingsIcon}
              alt="settings"
              className="icon-grid-item-setting-button-icon"
            ></img>
          </button>

          <button
            onClick={() => {
              removeBookmark(props.bookmark.link);
            }}
            className="icon-grid-item-setting-button icon-grid-item-setting-button_right "
          >
            <img
              src={trashcan}
              alt="settings"
              className="icon-grid-item-setting-button-icon"
            ></img>
          </button>
        </div>
      {/* ) : (
        <></>
      )} */}
    </li>
  );
}

export default Bookmark;
