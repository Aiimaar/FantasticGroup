import React, { useState } from "react";
import {
  CardWrapper,
  PictureHolder,
  InfoHolder,
  JourneyInfoHolder,
  Filter,
  NameOfRestaurant,
  FilterHolder,
  AdressInfoHolder,
  TimeInfoHolder,
  MainInfoHolder,
  AdditionalInfo,
  OpenNow,
  StarsContainer,
  ReviewCount,
  ButtonsWrapper,
  DetailsButton,
  StartButton,
  FiltersAndButtons,
  MobileInfo,
  DesktopInfo,
  CarouselContainer,
  PrevButton,
  NextButton,
  CarouselDots,
  Dot,
  FavoriteButton,
  Star
} from "./placecard.styled";
import Pin from "../../assets/images/pinicon.svg";
import Walking from "../../assets/images/walkingicon.svg";

const PlaceCard = ({ name, address, timeFromUser, images, open, features }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Construire les URLs complètes pour les images
  const baseUrl = 'http://localhost:3000/uploads/';
  const imageArray = Array.isArray(images) && images.length > 0 
    ? images.map(image => `${baseUrl}${image}`)
    : ['/default-image.jpg'];

  const currentImage = imageArray[currentImageIndex];

  const handlePrev = () => {
    setCurrentImageIndex(prev => (prev === 0 ? imageArray.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex(prev => (prev === imageArray.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <Star key={`star-${star}`} filled={star <= 4}>
        ★
      </Star>
    ));
  };

  return (
    <CardWrapper>
      <InfoHolder>
        <CarouselContainer>
          <PictureHolder 
            src={currentImage} 
            alt={`${name} - Photo ${currentImageIndex + 1}`}
            onError={(e) => {
              console.log(`Failed to load image: ${currentImage}`);
              e.target.src = '/default-image.jpg';
            }}
          />
          
          {imageArray.length > 1 && (
            <>
              <PrevButton onClick={handlePrev}>&lt;</PrevButton>
              <NextButton onClick={handleNext}>&gt;</NextButton>
              <CarouselDots>
                {imageArray.map((_, index) => (
                  <Dot 
                    key={`dot-${index}`}
                    active={index === currentImageIndex}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </CarouselDots>
            </>
          )}
          
          <FavoriteButton onClick={toggleFavorite}>
            {isFavorite ? '❤️' : '🤍'}
          </FavoriteButton>
        </CarouselContainer>

        <MainInfoHolder>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <JourneyInfoHolder>
              <NameOfRestaurant>{name}</NameOfRestaurant>
              <AdressInfoHolder>
                <img src={Pin} alt="" />
                {address}
              </AdressInfoHolder>
              <TimeInfoHolder>
                <img src={Walking} alt="" />
                {timeFromUser} min
              </TimeInfoHolder>
            </JourneyInfoHolder>

            <AdditionalInfo>
              <DesktopInfo>
                <OpenNow>{open}</OpenNow>
                <StarsContainer>{renderStars()}</StarsContainer>
                <ReviewCount>58 reviews</ReviewCount>
              </DesktopInfo>
            </AdditionalInfo>
          </div>

          <FiltersAndButtons>
            <FilterHolder>
              {features && features.length > 0 ? (
                features.map((feature) => (
                  <Filter key={`feature-${feature.id}`}>
                    {feature.name}
                  </Filter>
                ))
              ) : (
                <Filter>Non disponible</Filter>
              )}
            </FilterHolder>

            <MobileInfo>
              <OpenNow>{open}</OpenNow>
              <StarsContainer>{renderStars()}</StarsContainer>
              <ReviewCount>58 reviews</ReviewCount>
            </MobileInfo>

            <ButtonsWrapper>
              <DetailsButton>Détails</DetailsButton>
              <StartButton>Commencer</StartButton>
            </ButtonsWrapper>
          </FiltersAndButtons>
        </MainInfoHolder>
      </InfoHolder>
    </CardWrapper>
  );
};

export default PlaceCard;