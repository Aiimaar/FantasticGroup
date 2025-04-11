import React from "react";
import { Filter } from "../../components/PlaceCard/placecard.styled";
import {
  AdressWrapper,
  Location,
  StreetHolder,
  DetailsInfo,
  FilterWrapper,
} from "./detailsOfPlaces.styled";
import Pin from "../../assets/images/pinicon.svg";

const DetailsOfPlaces = ({ address, openH, closeH, phone, features }) => {
  return (
    <AdressWrapper>
      <Location>
        <h1 style={{ color: "#A37C67" }}>Location</h1>
        <StreetHolder>
          <img src={Pin} alt="Pin icon" />
          <p>{address || "Address not available"}</p>
        </StreetHolder>
        <DetailsInfo>
          <div style={{ gap: "8px", display: "flex", flexDirection: "column" }}>
            <h2 style={{ color: "#86866B" }}>Open hour</h2>
            <p>{openH && closeH ? `Mon-Sun ${openH}-${closeH}` : "N/A"}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h2 style={{ color: "#A37C67" }}>Phone number</h2>
            <p>{phone || "N/A"}</p>
          </div>
        </DetailsInfo>
        <FilterWrapper>
          {features && features.length > 0 ? (
            features.map((feature) => (
              <Filter key={`feature-${feature.id}`}>
                {feature.name}
              </Filter>
            ))
          ) : (
            <Filter>Not available</Filter>
          )}
        </FilterWrapper>
      </Location>
    </AdressWrapper>
  );
};

export default DetailsOfPlaces;