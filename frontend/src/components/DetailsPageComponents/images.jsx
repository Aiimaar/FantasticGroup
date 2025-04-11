import React from "react";
import { AllPicrturesWrapper, PictureHolder, SmallPictureWrapper } from "./images.styled";

const Images = ({ images }) => {
  const baseUrl = 'http://localhost:3000/uploads/';
  const imageArray = Array.isArray(images) && images.length > 0 
    ? images.map(image => `${baseUrl}${image}`)
    : ['https://via.placeholder.com/474x322.png?text=No+Image+Available'];

  return (
    <AllPicrturesWrapper>
      <PictureHolder
        as="img" // Utiliser PictureHolder comme une balise <img>
        src={imageArray[0]}
        alt="Main image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/474x322.png?text=No+Image+Available';
        }}
      />
      <div style={{ display: "flex", gap: "18px" }}>
        {imageArray.slice(1, 4).map((image, index) => (
          <SmallPictureWrapper
            key={`small-image-${index}`}
            as="img" // Utiliser SmallPictureWrapper comme une balise <img>
            src={image}
            alt={`Small image ${index + 1}`}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/146x102.png?text=No+Image';
            }}
          />
        ))}
        {/* Ajouter des placeholders si moins de 3 petites images */}
        {imageArray.length < 4 &&
          Array.from({ length: 4 - imageArray.length }).map((_, index) => (
            <SmallPictureWrapper
              key={`placeholder-${index}`}
              as="img"
              src="https://via.placeholder.com/146x102.png?text=No+Image"
              alt="Placeholder"
            />
          ))}
      </div>
    </AllPicrturesWrapper>
  );
};

export default Images;