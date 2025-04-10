import React from "react";
import Images from "../../components/DetailsPageComponents/images";
import DetailsOfPlaces from "../../components/DetailsPageComponents/detailsOfPlaces";
import { ContentWrapper, WrapperFyrst, WrapperSecond } from "./Details.styled";
import Description from "../../components/DetailsPageComponents/description";
import Reviews from "../../components/DetailsPageComponents/reviews";
import {
  ForMobileName,
  ForMobileDescription,
} from "../../components/DetailsPageComponents/description.styled";
//dymmy data for testing
const LocationData = [
  {
    name: "Happy",
    address: "Calle Alfredo 6",
    timeFromUser: 6,
    lat: "64.1466",
    lon: "-21.9426",
    open: true,
    image:
      "https://www.happy.is/wp-content/uploads/2022/05/happy-restaurant.jpg",
  },
  {
    name: "Restaurante La Bodega",
    address: "Calle Bernal 4",
    timeFromUser: 10,
    lat: "34.789",
    lon: "-33.546",
    open: true,
    image:
      "https://www.happy.is/wp-content/uploads/2022/05/happy-restaurant.jpg",
  },
  {
    name: "Caffeteria La Plaza",
    address: "Calle Washington 2",
    timeFromUser: 5,
    lat: "23.938",
    lon: "-16.849",
    open: false,
    image:
      "https://www.happy.is/wp-content/uploads/2022/05/happy-restaurant.jpg",
  },
];

function Details() {
  return (
    <ContentWrapper>
      <ForMobileName>
        <h1> Name of Place</h1>
      </ForMobileName>
      <WrapperFyrst>
        <Images />
        <ForMobileDescription>
          <p>Some description in here</p>
        </ForMobileDescription>
        <DetailsOfPlaces />
      </WrapperFyrst>
      <WrapperSecond>
        <Description />
        <Reviews />
      </WrapperSecond>
    </ContentWrapper>
  );
}
export default Details;


