import "./SettingPanel.css";
import add from "../../Image/add.png";
import settingsIcon from "../../Image/settings.png";
import edit from "../../Image/edit.png";

function SettingsPanel(props) {
  function ChangePopup(Popup_state) {
    props.changePopupVisibility(Popup_state);
  }

  return (
    <section className="settings">
      <button
        className="settings__button"
        onClick={() => {
          ChangePopup("SettingsPopup");
        }}
      >
        <img className="settings__icon" src={settingsIcon} alt="close"></img>
      </button>

      <button
        className="settings__button"
        onClick={() => {
          ChangePopup("AddPopup");
        }}
      >
        <img className="settings__icon" src={add} alt="close"></img>
      </button>

      <button
        className={
          props.settingsMode
            ? "settings__button settings__button_active"
            : "settings__button "
        }
        onClick={props.changeSettingsMode}
      >
        <img className="settings__icon" src={edit} alt="close"></img>
      </button>
    </section>
  );
}

export default SettingsPanel;
