import React, { useEffect, useState } from "react";
import PlaceCard from "../../components/PlaceCard/placecard";
import { PlaceCardHolder } from "./location.styled";

function LocationPage() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/locations") // <-- korrekt endpoint
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch locations:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading cafés...</p>;

  return (
    <>
      {locations.map((location) => (
        <PlaceCardHolder key={location.id}>
          <PlaceCard
            name={location.name}
            address={location.address}
            timeFromUser={location.timeFromUser || 5}
            image={location.image}
            open={location.openH && location.closeH ? "Open now" : "Closed"}
          />
        </PlaceCardHolder>
      ))}
    </>
  );
}

export default LocationPage;
