import React from "react";
import {
  ForDesktopName,
  ForDesktopDescription,
} from "./description.styled";

const Description = ({ name, description }) => {
  return (
    <div>
      <ForDesktopDescription>
        <h1 style={{ color: "#A37C67" }}>{name || "Name not available"}</h1>
      </ForDesktopDescription>
      <ForDesktopName>
        <p style={{ fontSize: "14px" }}>{description || "No description available"}</p>
      </ForDesktopName>
    </div>
  );
};

export default Description;
