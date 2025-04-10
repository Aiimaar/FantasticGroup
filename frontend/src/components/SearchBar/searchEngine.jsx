import { useState, useEffect, useRef } from "react";
import { SearchBarStyled } from "./search.styled";

const SearchBar = ({ autoFocus = false }) => {
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <SearchBarStyled>
      <input
        ref={inputRef}
        type="text"
        placeholder="Søg café, by eller adresse..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </SearchBarStyled>
  );
};

export default SearchBar;
