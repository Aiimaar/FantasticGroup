
import React from "react";
import { SearchInput } from "./search.styled";  // Importer den nye SearchInput komponent

const SearchBar = ({ searchText, setSearchText, handleSearch }) => {
  return (
    <SearchInput
      type="text"
      placeholder="Search for places..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
    />
  );

import { useState } from "react";
import { SearchBarStyled } from "./search.styled";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

    return (
        <SearchBarStyled>
             <input
        type="text"
        placeholder="Søg café, by eller adresse..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "15px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
        </SearchBarStyled>
    );

};

export default SearchBar;