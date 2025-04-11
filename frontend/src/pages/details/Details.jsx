import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Images from "../../components/DetailsPageComponents/images";
import DetailsOfPlaces from "../../components/DetailsPageComponents/detailsOfPlaces";
import { ContentWrapper, WrapperFyrst, WrapperSecond } from "./Details.styled";
import Description from "../../components/DetailsPageComponents/description";
import Reviews from "../../components/DetailsPageComponents/reviews";

function Details() {
  const { id } = useParams(); // Hent caféens ID fra URL
  const [cafeDetails, setCafeDetails] = useState(null);

  useEffect(() => {
    // Fetch caféens detaljer baseret på ID'et
    fetch(`http://localhost:3000/api/locations/${id}`)
      .then((res) => res.json())
      .then((data) => setCafeDetails(data))
      .catch((err) => console.error("Error fetching cafe details:", err));
  }, [id]);

  if (!cafeDetails) return <p>Loading...</p>; // Vent på, at dataene er hentet

  return (
    <ContentWrapper>
      <WrapperFyrst>
        <Images image={cafeDetails.image} />
        <DetailsOfPlaces address={cafeDetails.address} city={cafeDetails.city} />
      </WrapperFyrst>
      <WrapperSecond>
        {/* Vi sender cafeDetails til Description-komponenten */}
        {cafeDetails && <Description cafeDetails={cafeDetails} />}
        <Reviews />
      </WrapperSecond>
    </ContentWrapper>
  );
}

export default Details;
