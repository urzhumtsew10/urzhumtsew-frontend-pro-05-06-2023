import { useState } from "react";

const EmojiBox = (props) => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="emojiBox">
      <img onClick={updateCount} className="boxImg" src={props.img} />
      <p id={props.name} className="boxCounter">
        {count}
      </p>
    </div>
  );
};

export default EmojiBox;
