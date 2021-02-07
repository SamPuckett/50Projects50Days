import { useState } from "react";

import NavBar from "../shared/NavBar/NavBar";
import "./ExpandingCards.css";

const ExpandingCards = () => {
  const [isCardActive, setIsCardActive] = useState(1);

  const handleCardClick = (cardNumber) => {
    console.log(`card ${cardNumber} was clicked!`);
    setIsCardActive(cardNumber);
  };

  return (
    <div className="expanding-cards">
      <NavBar>Expanding Cards</NavBar>
      <div className="container">
        <div
          onClick={() => {
            handleCardClick(1);
          }}
          className={isCardActive === 1 ? "panel active" : "panel"}
          style={{
            backgroundImage:
              'url("https://noobabble.files.wordpress.com/2014/06/soulstealer-vlad-splash-art.jpg")',
          }}
        >
          <h3>Dark Waters Vlad</h3>
        </div>
        <div
          onClick={() => {
            handleCardClick(2);
          }}
          className={isCardActive === 2 ? "panel active" : "panel"}
          style={{
            backgroundImage:
              'url("https://noobabble.files.wordpress.com/2014/06/soulstealer-vlad-splash-art.jpg")',
          }}
        >
          <h3>Default Vlad</h3>
        </div>
        <div
          onClick={() => {
            handleCardClick(3);
          }}
          className={isCardActive === 3 ? "panel active" : "panel"}
          style={{
            backgroundImage:
              'url("https://noobabble.files.wordpress.com/2014/06/soulstealer-vlad-splash-art.jpg")',
          }}
        >
          <h3>Count Vlad</h3>
        </div>
        <div
          onClick={() => {
            handleCardClick(4);
          }}
          className={isCardActive === 4 ? "panel active" : "panel"}
          style={{
            backgroundImage:
              'url("https://noobabble.files.wordpress.com/2014/06/soulstealer-vlad-splash-art.jpg")',
          }}
        >
          <h3>Soul Stealer Vlad</h3>
        </div>
        <div
          onClick={() => {
            handleCardClick(5);
          }}
          className={isCardActive === 5 ? "panel active" : "panel"}
          style={{
            backgroundImage:
              'url("https://noobabble.files.wordpress.com/2014/06/soulstealer-vlad-splash-art.jpg")',
          }}
        >
          <h3>Ultimate Vlad</h3>
        </div>
      </div>
    </div>
  );
};

export default ExpandingCards;
