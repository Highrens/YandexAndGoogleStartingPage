import "./SettingPopup.css";
import close from "../../Image/close.png";
import donationalerts from "../../Image/Donationalerts-icon.png";
import telegram from "../../Image/Telegram-icon.png";
import github from "../../Image/github-logo.png";

function SettingPopup(props) {
  const handleBlankPageChange = (e) => {
    props.changeOpenInNewTab();
  };
  const handleThemeChange = (e) => {
    props.changeTheme();
  };

  const handleYandexChange = (e) => {
    props.changeYandexVisibility();
  };

  const handleGoogleChange = (e) => {
    props.changeGoogleVisibility();
  };

  const ClosePopup = () => {
    props.changePopupVisibility("none");
  };

  return (
    <section
      className={
        props.popupIsShown === "SettingsPopup" ? "Popup Popup_shown" : "Popup"
      }
    >
      <button className="Popup__close-button" onClick={ClosePopup}>
        <img className="settings__icon" src={close} alt="close"></img>
      </button>
      <form className="Popup__form">
        <label className="checkbox">
          Открывать в новой вкладке
          <input
            className="checkbox_input"
            type="checkbox"
            checked={props.Settings.openInNewTab}
            onChange={handleBlankPageChange}
          />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox">
          Темная тема
          <input
            className="checkbox_input"
            type="checkbox"
            checked={props.Settings.isDarkTheme}
            onChange={handleThemeChange}
          />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox">
          Вкладки Яндекс
          <input
            className="checkbox_input"
            type="checkbox"
            checked={props.Settings.yandex}
            onChange={handleYandexChange}
          />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox">
          Вкладки Google
          <input
            className="checkbox_input"
            type="checkbox"
            checked={props.Settings.google}
            onChange={handleGoogleChange}
          />
          <span className="checkmark"></span>
        </label>
      </form>

      <ul className="Popup__links">
        <li className="Popup__link">
          <a
            href="https://www.donationalerts.com/r/highrens"
            className="Popup__link-link"
            target={props.Settings.openInNewTab ? "_blank" : "_self"}
            rel="noreferrer"
          >
            <img
              className="settings__icon"
              src={donationalerts}
              alt="close"
            ></img>
          </a>
        </li>
        <li className="Popup__link">
          <a
            href="https://t.me/france_make_game"
            className="Popup__link-link"
            target={props.Settings.openInNewTab ? "_blank" : "_self"}
            rel="noreferrer"
          >
            <img className="settings__icon" src={telegram} alt="close"></img>
          </a>
        </li>
        <li className="Popup__link">
          <a
            href="https://github.com/Highrens"
            className="Popup__link-link"
            target={props.Settings.openInNewTab ? "_blank" : "_self"}
            rel="noreferrer"
          >
            <img className="settings__icon" src={github} alt="close"></img>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default SettingPopup;
