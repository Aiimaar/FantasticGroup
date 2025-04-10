import React from "react";
import { Filter } from "../../components/PlaceCard/placecard.styled";
import{
    AdressWrapper,
    Location,
    StreetHolder,
    DetailsInfo,
    FilterWrapper,
} from "./detailsOfPlaces.styled";
import Pin from "../../assets/images/pinicon.svg";

const DetailsOfPlaces = () => {
    return(
<AdressWrapper>
            <Location>
                <h1 style={{color:"#A37C67"}}>Location</h1> 
              <StreetHolder>
                <img src={Pin}></img>
                <p>hello</p>
              </StreetHolder>
              <DetailsInfo>
                <div style={{gap:"8px", display:"flex", flexDirection:"column"}}>
                  <h2 style={{color:"#86866B"}}>Open hour</h2>
                  <p>mon-sun 8-21</p>
                </div>
                <div style={{display:"flex", flexDirection:"column", gap:"8px"}}>
                  <h2 style={{color:"#A37C67"}}>Phone number</h2>
                  <p>+354 1234567</p>
                </div>
              </DetailsInfo>
              <FilterWrapper>
                <Filter />
                <Filter />
                <Filter />
              </FilterWrapper>
            </Location>
          </AdressWrapper>
)}

export default DetailsOfPlaces;