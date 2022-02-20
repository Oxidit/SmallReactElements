import { useState } from "react";

export const Lightbox = ({ images }) => {
  const [bigSrc, setBigSrc] = useState(null);

  const handleClick = (ev) => {
    const src = ev.target.dataset["src"];
    setBigSrc(src);
  };

  const lbImages = images.map((image) => (
    <img
      src={image.thumb}
      alt="cat"
      data-src={image.normal}
      onClick={handleClick}
    />
  ));

  const lightboxContainer = (
    <>
      <div className="darkbox"></div>
      <div className="lightbox" onClick={() => setBigSrc(null)}>
        <img src={bigSrc} alt="cat" />
      </div>
    </>
  );

  return (
    <div>
      {" "}
      <h2>Лайтбокс</h2>
      <div className="lightbox-wrapper">
        {lbImages}
        {bigSrc ? lightboxContainer : null}
      </div>
    </div>
  );
};
