import emoji_love from "../img/emoji-love.svg";
import emoji_funny from "../img/emoji-funny.svg";
import emoji_smile from "../img/emoji-smile.svg";
import emoji_surprised from "../img/emoji-surprised.svg";

const EmojiBox = () => {
  const emojiData = [
    { img: emoji_love, name: "emoji-love", count: 0 },
    { img: emoji_surprised, name: "emoji-surprised", count: 0 },
    { img: emoji_smile, name: "emoji-smile", count: 0 },
    { img: emoji_funny, name: "emoji-funny", count: 0 },
  ];

  const getResults = () => {
    const maxValue = emojiData
      .map((emoji) => emoji.count)
      .sort((a, b) => b - a)[0];
    console.log(maxValue);
    const winner = emojiData.filter((emoji) => emoji.count === maxValue);
    winner.forEach((emoji) => {
      const elemEmoji = document.getElementById(emoji.name);
      elemEmoji.innerText = `WINNER (${emoji.count})`;
    });
  };

  const renderEmojiBox = (emoji) => {
    const increment = () => {
      document.getElementById(emoji.name).innerText = emoji.count += 1;
    };

    return (
      <div key={emoji.name} className="emojiBox">
        <img onClick={increment} className="boxImg" src={emoji.img} />
        <p id={emoji.name} className="boxCounter">
          {emoji.count}
        </p>
      </div>
    );
  };

  return (
    <div className="app">
      <div className="block_voting">
        {emojiData.map((emoji) => renderEmojiBox(emoji))}
      </div>
      <button onClick={getResults} className="app_btn">
        Show Results
      </button>
    </div>
  );
};

export default EmojiBox;
