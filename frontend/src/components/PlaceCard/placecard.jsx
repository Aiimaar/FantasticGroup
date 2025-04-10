import React from "react";
import {Link} from "react-router-dom";
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
const PlaceCard = ({ name, address, timeFromUser, image, open }) => {
  const backendUrl = "http://localhost:3000"; // Eller din prod URL

  return (
    <CardWrapper>
      <InfoHolder>
      <PictureHolder>
        <img src={`${backendUrl}/uploads/${image}`} alt={name} />

      </PictureHolder>



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
                <img src={Pin}></img>
                {address}
              </AdressInfoHolder>
              <TimeInfoHolder>
                <img src={Walking}></img> {timeFromUser} min
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
              <Link to={`/locations/${location.id}`}>
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
