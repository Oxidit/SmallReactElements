import { useState } from "react";
import React from "react";

const ItemNews = ({ text, maxLenght, imgSrc }) => {
  const [readMore, setReadMore] = useState(false);
  const handleReadMore = () => setReadMore(!readMore);
  const content = readMore ? text : text.substr(0, maxLenght) + "...";

  const flag = maxLenght >= text.length;

  const buttonName = readMore ? "Read Less   " : "Read More   ";
  const Button = () => <button onClick={handleReadMore}>{buttonName}</button>;

  return (
    <div>
      <img src={imgSrc} alt={"kitten"} />
      <div>{content}</div>
      {!flag ? <Button /> : null}
    </div>
  );
};

function App() {
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
  consectetur neque ab porro quasi culpa nulla rerum quis minus
  voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
  Maxime.`;
  const imgSrc = "http://placekitten.com/150/50";

  return <ItemNews imgSrc={imgSrc} text={text} maxLenght={50} />;
}

export default App;
