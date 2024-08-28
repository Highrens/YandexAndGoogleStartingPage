import React, { useState, useEffect } from "react";
import "./Popup.css";

function Popup(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  // Обработка добавления новой закладки
  const AddBookmark = (e) => {
    e.preventDefault();
    const newBookmark = { name, link };

    if (!newBookmark.link.includes("https://")) {
      newBookmark.link = "https://" + newBookmark.link;
    }
    
    props.addBookmark(newBookmark);

    setName("");
    setLink("");
    props.changePopupVisibility();
  };

  //для переключения состояния кнопки
  useEffect(() => {
    setIsDisabled(name === "" || link === "")
  }, [name, link]);

  return (
    <section className={props.popupIsShown ? "Popup Popup_shown" : "Popup"}>
      <button className="Popup__close-button" onClick={props.changePopupVisibility}>✖</button>
      <form className="Popup__form" onSubmit={AddBookmark}>
        <input
          className="Popup__form-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Имя ссылки:"
        />
        <input
          className="Popup__form-url"
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
          placeholder="Ссылка:"
        />
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

export default Popup;
