import React, { useState, useEffect } from "react";

import close from "../../Image/close.png";

function EditPopup(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const [currentIcon, setIcon] = useState("");
  const [customIcon, setCustomIcon] = useState(false);

  const ClosePopup = () => {
    props.changePopupVisibility("none");
  };

  const EditBookmark = (e) => {
    e.preventDefault();
    const UpdatedBookmark = customIcon ? { name, link, currentIcon} : { name, link };

    props.EditBookmark(UpdatedBookmark);
    props.changePopupVisibility("none");
  };

  useEffect(() => {
    setName(props.currentBookmark.name);
    setLink(props.currentBookmark.link);
    setCustomIcon(props.currentBookmark.currentIcon);
    setIcon(props.currentBookmark.currentIcon)
  }, [props.currentBookmark]);

  return (
    <section className="Popup Popup_shown">
      <button className="Popup__close-button" onClick={ClosePopup}>
        <img className="settings__icon" src={close} alt="close"></img>
      </button>
      <form className="Popup__form" onSubmit={EditBookmark}>
        <input
          className="Popup__form-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Имя вкладки:"
        />
        <input
          className="Popup__form-input"
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
          placeholder="Ссылка"
        />
        <label className="checkbox">
          Стандартная иконка
          <input
            className="checkbox_input"
            type="checkbox"
            checked={customIcon}
            onChange={() => {
              setCustomIcon(!customIcon);
            }}
          />
          <span className="checkmark"></span>
        </label>
        {customIcon ? (
          <div className="base-icons">
            {props.icons.map((icon, index) => (
              <li
                key={index}
                className={
                  currentIcon === index
                    ? "icon-grid-item icon-grid-item_google icon-grid-item_h"
                    : "icon-grid-item icon-grid-item_google"
                }
              >
                <img
                  className="icon-grid-item_icon icon-grid-item_google"
                  src={icon}
                  alt={`index favicon`}
                  onClick={() => {
                    setIcon(index);
                  }}
                />
              </li>
            ))}
          </div>
        ) : (
          <></>
        )}
        <button className={"Popup__form-submit"} type="submit">
          Edit Bookmark
        </button>
      </form>
    </section>
  );
}

export default EditPopup;
