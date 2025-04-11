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
};

export default SearchBar;
