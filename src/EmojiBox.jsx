const EmojiBox = (props) => {
  const counter = props.count.filter((emoji) => emoji.name === props.name)[0]
    .counter;
  return (
    <div className="emojiBox">
      <img
        onClick={() => props.onClickHandler(props.name)}
        className="boxImg"
        src={props.img}
      />
      <p id={props.name} className="boxCounter">
        {counter}
      </p>
    </div>
  );
};

export default EmojiBox;
