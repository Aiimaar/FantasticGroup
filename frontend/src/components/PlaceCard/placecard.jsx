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
} from "./placecard.styled";
import Pin from "../../assets/images/pinicon.svg";
import Walking from "../../assets/images/walkingicon.svg";
import styled from "styled-components";

// Styles pour le carrousel
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
`;

const PrevButton = styled(NavButton)`
  left: 10px;
`;

const NextButton = styled(NavButton)`
  right: 10px;
`;

const PlaceCard = ({ name, address, timeFromUser, images, open }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Vérifie si images est un tableau valide, sinon utilise une image par défaut
  const imageArray = Array.isArray(images) && images.length > 0 
    ? images 
    : ['/default-image.jpg'];

  // Normalisation du chemin de l'image
  const normalizeImagePath = (image) => {
    if (typeof image !== 'string') return '/default-image.jpg';
    if (image.startsWith('http')) return image;
    const filename = image.replace(/^\/uploads\//, ''); // Supprime /uploads/ si présent
    return `http://localhost:3000/uploads/${filename}`;
  };

  const currentImage = normalizeImagePath(imageArray[currentImageIndex]);

  // Navigation entre les images
  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? imageArray.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === imageArray.length - 1 ? 0 : prev + 1));
  };

  return (
    <CardWrapper>
      <InfoHolder>
        <CarouselContainer>
          <PictureHolder 
            src={currentImage} 
            alt={`Image ${currentImageIndex + 1} of ${name}`} // Ajout de l'attribut alt
          />
          {imageArray.length > 1 && (
            <>
              <PrevButton onClick={handlePrev}>&lt;</PrevButton>
              <NextButton onClick={handleNext}>&gt;</NextButton>
            </>
          )}
        </CarouselContainer>

        <MainInfoHolder>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontFamily: "Noto Sans",
            }}
          >
            <JourneyInfoHolder>
              <NameOfRestaurant>{name}</NameOfRestaurant>

              <AdressInfoHolder>
                <img src={Pin} alt="Location pin icon" />
                {address}
              </AdressInfoHolder>
              <TimeInfoHolder>
                <img src={Walking} alt="Walking time icon" />
                {timeFromUser} min
              </TimeInfoHolder>
            </JourneyInfoHolder>
            <AdditionalInfo>
              <DesktopInfo>
                <OpenNow>{open}</OpenNow>
                <StarsContainer>{/* stars */}</StarsContainer>
                <ReviewCount>58 reviews</ReviewCount>
              </DesktopInfo>
            </AdditionalInfo>
          </div>

          <FiltersAndButtons>
            <FilterHolder>
              <Filter />
              <Filter />
              <Filter />
              <Filter />
            </FilterHolder>
            <MobileInfo>
              <OpenNow>{open}</OpenNow>
              <StarsContainer>{/* stars */}</StarsContainer>
              <ReviewCount>58 reviews</ReviewCount>
            </MobileInfo>
            <ButtonsWrapper>
              <DetailsButton>Details</DetailsButton>
              <StartButton>Start</StartButton>
            </ButtonsWrapper>
          </FiltersAndButtons>
        </MainInfoHolder>
      </InfoHolder>
    </CardWrapper>
  );
};

export default PlaceCard;