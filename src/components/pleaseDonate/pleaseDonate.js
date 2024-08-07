import { useState } from "react";
import "./Donate.css";

const donationImage =
  "https://static.donationalerts.ru/uploads/qr/7021501/qr_fef0615cd29e18e3a4a884f22f2aff22.png";

function Donate() {
  const [isDonateInfoShow, setIsDonateInfoShow] = useState(false);
  
  function ChangeVisability () {
    setIsDonateInfoShow(true);
    setTimeout(() => {setIsDonateInfoShow(false);}, 5000)
  }

  return (
    <>
      <button className="donation-show-button" onClick={ChangeVisability}>{"➜"}</button>
      <div className={isDonateInfoShow ? "donation-link-container  donation-link-container-showed" : "donation-link-container "}>
        <a href="https://www.donationalerts.com/r/highrens"  className="donation-link">
          <img  className="donation-image"
            src={donationImage}
            alt="pleaseDonateMe" />
          Если понравилась идея, можешь помочь разработчику покушать 👉👈
        </a>
      </div>
    </>
  );
}

export default Donate;
