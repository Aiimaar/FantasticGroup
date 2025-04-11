import React, { useEffect, useState } from "react";
import PlaceCard from "../../components/PlaceCard/placecard";
import Filter from "../../components/filter/filter";
import { PageContainer, FilterColumn, FilterBox, AdditionalComponentBox, LocationsColumn, PlaceCardHolder, NoLocationsMessage } from "./location.styled";
/* import { PlaceCardHolder } from "./location.styled"; */

function LocationPage() {
  const [locations, setLocations] = useState([]);
  const [allFeatures, setAllFeatures] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/features");
        if (!response.ok) throw new Error("Failed to fetch features");
        const featuresData = await response.json();
        console.log("Features fetched:", featuresData);
        setAllFeatures(featuresData);
      } catch (err) {
        console.error("Error fetching features:", err);
        setError(err.message);
      }
    };

    fetchFeatures();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const featureIdsQuery = selectedFeatures.length > 0 
          ? `?featureIds=${selectedFeatures.join(',')}`
          : '';
        const url = `http://localhost:3000/api/locations/filtered${featureIdsQuery}`;
        console.log('Fetching locations from:', url);
        console.log('Selected features:', selectedFeatures);
        const locationsRes = await fetch(url);
        if (!locationsRes.ok) {
          const errorText = await locationsRes.text();
          throw new Error(`Failed to fetch locations: ${locationsRes.status} ${locationsRes.statusText} - ${errorText}`);
        }
        const locationsData = await locationsRes.json();
        console.log("Locations fetched:", locationsData);

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
  }, [selectedFeatures]);

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
    <PageContainer>
      <FilterColumn>
        <FilterBox>
          <Filter
            features={allFeatures}
            selectedFeatures={selectedFeatures}
            onFeatureChange={setSelectedFeatures}
          />
        </FilterBox>
        <AdditionalComponentBox>
          {/* Placeholder pour le nouveau composant */}
          <h3>Nouveau composant</h3>
          <p>Ici, tu peux ajouter ton nouveau composant (par exemple, une carte, une liste, etc.).</p>
        </AdditionalComponentBox>
      </FilterColumn>
      <LocationsColumn>
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
          <NoLocationsMessage>Aucune location ne correspond aux filtres sélectionnés</NoLocationsMessage>
        )}
      </LocationsColumn>
    </PageContainer>
  );
}

export default LocationPage;