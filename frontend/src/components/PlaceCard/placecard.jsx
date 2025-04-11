import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  Star,
} from "./placecard.styled";
import Pin from "../../assets/images/pinicon.svg";
import Walking from "../../assets/images/walkingicon.svg";

const PlaceCard = ({ id, name, address, timeFromUser, images, open, features }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Build full image URLs
  const baseUrl = 'http://localhost:3000/uploads/';
  const imageArray = Array.isArray(images) && images.length > 0 
    ? images.map(image => `${baseUrl}${image}`)
    : ['https://via.placeholder.com/320x240.png?text=No+Image+Available'];

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
              e.target.src = 'https://via.placeholder.com/320x240.png?text=No+Image+Available';
            }}
          />
          
          {imageArray.length > 1 && (
            <>
              <PrevButton onClick={handlePrev}>{"<"}</PrevButton>
              <NextButton onClick={handleNext}>{">"}</NextButton>
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
                <img src={Pin} alt="Pin icon" />
                {address}
              </AdressInfoHolder>
              <TimeInfoHolder>
                <img src={Walking} alt="Walking icon" />
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
                <Filter>Not available</Filter>
              )}
            </FilterHolder>

            <MobileInfo>
              <OpenNow>{open}</OpenNow>
              <StarsContainer>{renderStars()}</StarsContainer>
              <ReviewCount>58 reviews</ReviewCount>
            </MobileInfo>

            <ButtonsWrapper>
              <Link to={`/Details/${id}`}>
                <DetailsButton>Details</DetailsButton>
              </Link>
              <StartButton>Start</StartButton>
            </ButtonsWrapper>
          </FiltersAndButtons>
        </MainInfoHolder>
      </InfoHolder>
    </CardWrapper>
  );
};

export default PlaceCard;