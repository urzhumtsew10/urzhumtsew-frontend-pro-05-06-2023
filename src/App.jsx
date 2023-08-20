import emoji_love from "../img/emoji-love.svg";
import emoji_funny from "../img/emoji-funny.svg";
import emoji_smile from "../img/emoji-smile.svg";
import emoji_surprised from "../img/emoji-surprised.svg";

import EmojiBox from "./EmojiBox";
import { useState } from "react";

const App = () => {
  const emojiData = [
    { img: emoji_love, name: "emoji-love" },
    { img: emoji_smile, name: "emoji-smile" },
    { img: emoji_surprised, name: "emoji-surprised" },
    { img: emoji_funny, name: "emoji-funny" },
  ];

  const getRes = () => {
    emojiData.forEach((emoji) => {
      emoji.count = Number(document.getElementById(emoji.name).innerText);
    });
    const maxValue = emojiData
      .map((emoji) => emoji.count)
      .sort((a, b) => b - a)[0];
    const winner = emojiData.filter((emoji) => emoji.count === maxValue);
    winner.forEach((elem) => {
      document.getElementById(elem.name).innerText = `WINNER (${elem.count})`;
    });
  };

  return (
    <div className="app">
      <div className="block_voting">
        {emojiData.map((emoji) => (
          <EmojiBox key={emoji.name} name={emoji.name} img={emoji.img} />
        ))}
      </div>
      <button onClick={getRes} className="app_btn">
        Show Results
      </button>
    </div>
  );
};

export default App;
