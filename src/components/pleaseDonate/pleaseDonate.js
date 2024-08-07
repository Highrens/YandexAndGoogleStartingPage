import "./Donate.css";

const donationImage =
  "https://static.donationalerts.ru/uploads/qr/7021501/qr_fef0615cd29e18e3a4a884f22f2aff22.png";

function Donate() {
  return (
    <div className="App">

      <button className="donation-show-button">{">"}</button>
      <div className="donation-link">
        <a href="https://www.donationalerts.com/r/highrens" >
          <img  className="donation-image"
            src={donationImage}
            alt="pleaseDonateMe" />
          Если понравилась идея, можешь помочь разработчику покушать ????
        </a>
      </div>
    </div>
  );
}

export default Donate;
