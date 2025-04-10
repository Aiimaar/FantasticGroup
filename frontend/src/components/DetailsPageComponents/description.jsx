import React from "react";
import {
  ForDesktopName,
  ForDesktopDescription,
} from "../../components/DetailsPageComponents/description.styled";

const Description = () => {
  return (
    <div>
      <ForDesktopDescription>
        <h1 style={{color:"#A37C67"}}> Name of Place</h1>
      </ForDesktopDescription>
      <ForDesktopName>
        <p style={{fontSize: "14px"}}>blabla </p>
      </ForDesktopName>
    </div>
  );
};

export default Description;
