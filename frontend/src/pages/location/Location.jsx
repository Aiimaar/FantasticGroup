import React from "react";
import PlaceCard from "../../components/PlaceCard/placecard";
import { PlaceCardHolder } from "./Location.styled";


//dummy data for tesing
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

function LocationPage() {
  return (
<>
      {LocationData.map((location) => (
        <PlaceCardHolder>
        <PlaceCard
            key={location.name}
            name={location.name}
            address={location.address}
            timeFromUser={location.timeFromUser}
            image={location.image}
            open={location.open? "Open now" : "Closed now"}
        />
</PlaceCardHolder>
      ))}
      </>
  );
}

export default LocationPage;
