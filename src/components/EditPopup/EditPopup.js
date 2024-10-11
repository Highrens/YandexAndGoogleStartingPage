import React, { useState, useEffect } from "react";

import close from "../../Image/close.png";

function EditPopup(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const ClosePopup = () => {
    props.changePopupVisibility("none");
  }

  const EditBookmark = (e) => {
    e.preventDefault();
    const UpdatedBookmark = { name, link };

    props.EditBookmark(UpdatedBookmark);
    props.changePopupVisibility("none");
  };

  useEffect(() => {
    setName(props.currentBookmark.name);
    setLink(props.currentBookmark.link);
  }, [props.currentBookmark]);

  return (
    <section
      className={
        props.popupIsShown === "EditPopup" ? "Popup Popup_shown" : "Popup"
      }
    >
      <button
        className="Popup__close-button"
        onClick={ClosePopup}
      >
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
        <button
          className={"Popup__form-submit"}
          type="submit"
        >
          Edit Bookmark
        </button>
      </form>
    </section>
  );
}

export default EditPopup;
