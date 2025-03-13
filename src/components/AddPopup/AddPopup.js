import React, { useState, useEffect } from "react";
import "./AddPopup.css";

import close from "../../Image/close.png";


function AddPopup(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [customIcon, setCustomIcon] = useState(false);
  const [currentIcon, setIcon] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const ClosePopup = () => {
    props.changePopupVisibility("none");
  };

  // Обработка добавления новой закладки
  const AddBookmark = (e) => {
    e.preventDefault();
    
    const newBookmark = customIcon ? { name, link, currentIcon} : { name, link };

    if (!newBookmark.link.includes("https://")) {
      newBookmark.link = "https://" + newBookmark.link;
    }

    props.addBookmark(newBookmark);

    setName("");
    setLink("");
    props.changePopupVisibility("none");
  };

  //для переключения состояния кнопки
  useEffect(() => {
    setIsDisabled(name === "" || link === "");
  }, [name, link]);

  return (
    <section className="Popup Popup_shown">
      <button className="Popup__close-button" onClick={ClosePopup}>
        <img className="settings__icon" src={close} alt="close"></img>
      </button>
      <form className="Popup__form" onSubmit={AddBookmark}>
        <input
          className="Popup__form-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Имя ссылки:"
        />
        <input
          className="Popup__form-input"
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
          placeholder="Ссылка:"
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

        <button
          className={"Popup__form-submit"}
          type="submit"
          disabled={isDisabled}
        >
          Add Bookmark
        </button>
      </form>
    </section>
  );
}

export default AddPopup;
