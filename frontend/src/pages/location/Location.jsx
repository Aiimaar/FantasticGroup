import React, { useEffect, useState } from "react";
import PlaceCard from "../../components/PlaceCard/placecard";
import { PlaceCardHolder } from "./Location.styled";

function LocationPage() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/locations");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API response:", data); // Log pour voir les données
        setLocations(data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des localisations :", error);
        setError(error.message);
        setLoading(false);
      }
    };
    fetchLocations();
  }, []);

  if (loading) return <div>Chargement des localisations...</div>;
  if (error) return <div>Erreur : {error}</div>;

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
            />
          </PlaceCardHolder>
        ))
      ) : (
        <div>Aucune localisation trouvée.</div>
      )}
    </>
  );
}

function isOpen(openH, closeH) {
  const now = new Date();
  const [openHour, openMinute] = openH.split(':').map(Number);
  const [closeHour, closeMinute] = closeH.split(':').map(Number);
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const openTime = openHour * 60 + openMinute;
  const closeTime = closeHour * 60 + closeMinute;
  const currentTime = currentHour * 60 + currentMinute;
  return currentTime >= openTime && currentTime <= closeTime;
}

export default LocationPage;