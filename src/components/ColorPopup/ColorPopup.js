import React, { useState, useEffect } from "react";

import close from "../../Image/close.png";

function ColorPopup(props) {
  const [color, setColor] = useState("#FFFFFF");

  const ClosePopup = () => {
    props.changePopupVisibility("none");
  };

  function ChangeColor(e) {
    e.preventDefault();

    props.changeMainColor(hexToRgb(color));
  }

  function hexToRgb(color) {
    console.log(color);
    color = color.replace("#", "");
    if (color.length !== 6) {
      throw new Error("Invalid HEX color.");
    }
    // Извлекаем значения R, G и B
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);

    return { r, g, b };
  }

  return (
    <section
      className={
        props.popupIsShown === "ColorPopup" ? "Popup Popup_shown" : "Popup"
      }
    >
      <button className="Popup__close-button" onClick={ClosePopup}>
        <img className="settings__icon" src={close} alt="close"></img>
      </button>
      <form className="Popup__form" onSubmit={ChangeColor}>
        <input
          className="Popup__form-color"
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          required
          placeholder="Ссылка:"
        />
        <button className={"Popup__form-submit"} type="submit">
          Change Color
        </button>
      </form>
    </section>
  );
}

export default ColorPopup;
