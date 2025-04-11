import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, useMap, ZoomControl } from "react-leaflet";
import L from "leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";

// Wrapper for the map with rounded corners and shadow
const MapViewWrapper = styled.div`
  position: relative;
  top: 1rem;
  margin-bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  height: 200px;
  width: 90%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Styled component for the map container
const MapContainerStyled = styled(MapContainer)`
  height: 100% !important;
  width: 100% !important;
  border-radius: 16px;
  overflow: hidden !important;
`;

// Custom red icon for café markers
const redIcon = new L.Icon({
  iconUrl: "/src/assets/icons/marker-icon-red.png",
  shadowUrl: "/src/assets/icons/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Component to move the map to a specific café
const MoveToCafe = ({ cafe }) => {
  const map = useMap();

  useEffect(() => {
    if (cafe?.position) {
      map.flyTo([cafe.position.lat, cafe.position.lng], 14);
    }
  }, [cafe, map]);

  return null;
};

// Component to move the map to the user's GPS location
const MoveToUserPosition = ({ userPosition }) => {
  const map = useMap();

  useEffect(() => {
    if (userPosition) {
      map.flyTo([userPosition.lat, userPosition.lng], 14);
    }
  }, [userPosition, map]);

  return null;
};

// Main MapView component
const MapView = ({ cafes }) => {
  const [userPosition, setUserPosition] = useState(null);

  // Handles the "Find Me" button click to get the user's location
  const handleFindMeClick = () => {
    if (!navigator.geolocation) {
      alert("Your browser does not support geolocation.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        alert(`Unable to find your location: ${error.message}`);
      },
      { enableHighAccuracy: true, timeout: 7000, maximumAge: 0 }
    );
  };

  return (
    <MapViewWrapper>
      {/* "Find Me" Button */}
      <button
        onClick={handleFindMeClick}
        title="Find my location"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 1000,
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          cursor: "pointer",
        }}
      >
        <img src="/src/assets/images/radar-icon.svg" alt="Locate" style={{ width: "20px" }} />
      </button>

      {/* Leaflet Map */}
      <MapContainerStyled
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
        />
        
        <ZoomControl position="bottomright" />

        {/* Move map to café or user position */}
        <MoveToCafe cafe={cafes[0]} />
        <MoveToUserPosition userPosition={userPosition} />

        {/* User's location marker */}
        {userPosition && (
          <CircleMarker
            center={[userPosition.lat, userPosition.lng]}
            radius={8}
            pathOptions={{
              color: "#3399ff",
              fillColor: "#3399ff",
              fillOpacity: 0.6,
            }}
          />
        )}

        {/* Café markers */}
        {cafes.map((cafe) => {
          const lat = parseFloat(cafe.lat);
          const lon = parseFloat(cafe.lon);

          // Skip invalid coordinates
          if (isNaN(lat) || isNaN(lon)) {
            console.error(`Invalid coordinates for cafe: ${cafe.name}. Skipping.`);
            return null;
          }

          return (
            <Marker
              key={cafe.id}
              position={[lat, lon]}
              icon={redIcon}
            >
              <Popup>
                <div style={{ textAlign: "center", width: "180px" }}>
                  <img
                    src={cafe.image}
                    alt={cafe.name}
                    style={{
                      width: "100%",
                      borderRadius: "6px",
                      marginBottom: "8px",
                    }}
                  />
                  <strong>{cafe.name}</strong>
                  <br />
                  <small>
                    {cafe.address}, {cafe.city}
                  </small>
                  <br />
                  <button
                    style={{
                      margin: "4px 0",
                      padding: "6px 12px",
                      backgroundColor: "#007bff",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      width: "100%",
                    }}
                    onClick={() => alert("Details page coming soon!")}
                  >
                    📋 Details
                  </button>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: "4px",
                      padding: "6px 12px",
                      backgroundColor: "#28a745",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "4px",
                      width: "100%",
                    }}
                  >
                    🧭 Directions
                  </a>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainerStyled>
    </MapViewWrapper>
  );
};

export default MapView;
