import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PlaceCardHolder } from "./Location.styled";
import MapView from "../../components/BemaMap/mapView";  
import PlaceCard from "../../components/PlaceCard/placecard";  
import { WrapperLocation } from "./Location.styled";  

function LocationPage() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState(""); 

  const location = useLocation();  
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";  

  useEffect(() => {
    fetch("http://localhost:3000/api/locations") 
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

  // Filtrer caféer baseret på searchText
  const filteredLocations = locations.filter((location) => {
    const searchLower = searchQuery.toLowerCase(); 
    return (
      location.name.toLowerCase().includes(searchLower) || 
      location.city.toLowerCase().includes(searchLower) ||  
      location.address.toLowerCase().includes(searchLower) ||  
      location.country?.toLowerCase().includes(searchLower) ||  
      location.place?.toLowerCase().includes(searchLower)  
    );
  });

  if (loading) return <p>Loading cafés...</p>;

  return (
    <WrapperLocation>

      <div>
        <MapView cafes={filteredLocations} />  
      </div>

      <div>
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location) => (
            <PlaceCardHolder key={location.id}>
              <PlaceCard
                name={location.name}
                address={location.address}
                timeFromUser={location.timeFromUser || 5}
                image={location.image}
                features={location.features || []}
                open={location.openH && location.closeH ? "Open now" : "Closed"}
                id={location.id}
              />
            </PlaceCardHolder>
          ))
        ) : (
          <p>No cafés found matching your search.</p>
        )}
      </div>
    </WrapperLocation>
  );
}

export default LocationPage;
