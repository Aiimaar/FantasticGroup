import React from "react";

// Importer styled-components for desktop visning
import {
  ForDesktopName,
  ForDesktopDescription,
} from "../../components/DetailsPageComponents/description.styled";

const Description = ({ cafeDetails }) => { 
  // Tjek om cafeDetails er defineret før brug
  if (!cafeDetails) {
    return <p>Loading description...</p>;
  }

  return (
    <div>
      <ForDesktopDescription>
        {/* Vis caféens navn med ønsket stil */}
        <h1 style={{ color: "#A37C67" }}>{cafeDetails.name}</h1>
      </ForDesktopDescription>
      <ForDesktopName>
        {/* Vis caféens beskrivelse */}
        <p style={{ fontSize: "14px" }}>{cafeDetails.description}</p>
      </ForDesktopName>
    </div>
  );
};

export default Description;
