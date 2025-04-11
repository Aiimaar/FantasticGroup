import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Images from "../../components/DetailsPageComponents/images";
import DetailsOfPlaces from "../../components/DetailsPageComponents/detailsOfPlaces";
import { ContentWrapper, WrapperFyrst, WrapperSecond } from "./Details.styled";
import Description from "../../components/DetailsPageComponents/description";
import Reviews from "../../components/DetailsPageComponents/reviews";
import {
  ForMobileName,
  ForMobileDescription,
} from "../../components/DetailsPageComponents/description.styled";

function Details() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [features, setFeatures] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocationDetails = async () => {
      try {
        setLoading(true);

        // Récupérer les détails de la location
        const locationRes = await fetch(`http://localhost:3000/api/locations/${id}`);
        if (!locationRes.ok) {
          throw new Error("Failed to fetch location details");
        }
        const locationData = await locationRes.json();

        // Récupérer les features associées
        const featuresRes = await fetch(
          `http://localhost:3000/api/relations/locations/${id}/features`
        );
        const featuresData = await featuresRes.json();

        // Récupérer les avis associés
        const reviewsRes = await fetch(
          `http://localhost:3000/api/reviews/loc/${id}`
        );
        const reviewsData = await reviewsRes.json();

        setLocation(locationData);
        setFeatures(featuresData || []);
        setReviews(reviewsData || []);
      } catch (err) {
        console.error("Error fetching location details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLocationDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!location) return <div>Location not found</div>;

  return (
    <ContentWrapper>
      <ForMobileName>
        <h1>{location.name}</h1>
      </ForMobileName>
      <WrapperFyrst>
        <Images images={location.images} />
        <ForMobileDescription>
          <p>{location.description || "Some description in here"}</p>
        </ForMobileDescription>
        <DetailsOfPlaces
          address={location.address}
          openH={location.openH}
          closeH={location.closeH}
          phone={location.phone || "+354 1234567"}
          features={features}
        />
      </WrapperFyrst>
      <WrapperSecond>
        <Description
          name={location.name}
          description={location.description || "Some description in here"}
        />
        <Reviews reviews={reviews} />
      </WrapperSecond>
    </ContentWrapper>
  );
}

export default Details;