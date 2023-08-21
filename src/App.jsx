import emoji_love from "../img/emoji-love.svg";
import emoji_funny from "../img/emoji-funny.svg";
import emoji_smile from "../img/emoji-smile.svg";
import emoji_surprised from "../img/emoji-surprised.svg";

import EmojiBox from "./EmojiBox";
import { useState } from "react";

const App = () => {
  const emojiData = [
    { img: emoji_love, name: "emoji-love", counter: 0 },
    { img: emoji_smile, name: "emoji-smile", counter: 0 },
    { img: emoji_surprised, name: "emoji-surprised", counter: 0 },
    { img: emoji_funny, name: "emoji-funny", counter: 0 },
  ];

  const [counters, setCounter] = useState(emojiData);
  const [data, setData] = useState(emojiData);

  const clickImg = (name) => {
    const counter = counters.filter((count) => count.name === name)[0];
    counter.counter += 1;
    const newCounters = counters.reduce((acc, count) => {
      if (count.name !== name) {
        acc.push(count);
      } else {
        acc.push(counter);
      }
      return acc;
    }, []);
    setCounter(newCounters);
  };

  const getResults = () => {
    const maxValue = counters
      .map((count) => count.counter)
      .sort((a, b) => b - a)[0];
    const winner = counters.filter((count) => count.counter === maxValue);
    setData(winner);
  };

  return (
    <div className="app">
      <div className="block_voting">
        {data.map((emoji) => (
          <EmojiBox
            onClickHandler={clickImg}
            key={emoji.name}
            name={emoji.name}
            img={emoji.img}
            count={counters}
          />
        ))}
      </div>
      <button onClick={getResults} className="app_btn">
        Show Results
      </button>
    </div>
  );
};

export default App;
