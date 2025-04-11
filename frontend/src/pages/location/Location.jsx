import React, { useEffect, useState } from "react";
import PlaceCard from "../../components/PlaceCard/placecard";
import { PlaceCardHolder } from "./Location.styled";

function LocationPage() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // 1. Fetch locations
        const locationsRes = await fetch("http://localhost:3000/api/locations");
        if (!locationsRes.ok) throw new Error("Failed to fetch locations");
        const locationsData = await locationsRes.json();

        // 2. Fetch features for each location
        const locationsWithFeatures = await Promise.all(
          locationsData.map(async (location) => {
            try {
              const featuresRes = await fetch(
                `http://localhost:3000/api/relations/locations/${location.id}/features`
              );
              const featuresData = await featuresRes.json();
              return {
                ...location,
                features: featuresData || []
              };
            } catch (err) {
              console.error(`Error fetching features for location ${location.id}:`, err);
              return {
                ...location,
                features: []
              };
            }
          })
        );

        setLocations(locationsWithFeatures);
      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const isOpen = (openH, closeH) => {
    const now = new Date();
    const [openHour, openMinute] = openH.split(':').map(Number);
    const [closeHour, closeMinute] = closeH.split(':').map(Number);
    const currentTime = now.getHours() * 60 + now.getMinutes();
    const openTime = openHour * 60 + openMinute;
    const closeTime = closeHour * 60 + closeMinute;
    return currentTime >= openTime && currentTime <= closeTime;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {locations.length > 0 ? (
        locations.map((location) => (
          <PlaceCardHolder key={location.id}>
            <PlaceCard
              name={location.name}
              address={location.address}
              timeFromUser={location.timeFromUser || "N/A"}
              images={location.images}
              open={isOpen(location.openH, location.closeH) ? "Open now" : "Closed now"}
              features={location.features}
            />
          </PlaceCardHolder>
        ))
      ) : (
        <div>No locations found</div>
      )}
    </>
  );
}

export default LocationPage;