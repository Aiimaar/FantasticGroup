import styled from "styled-components";

export const SearchBarStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 100%; 
  margin: 0 auto; 
`;

export const SearchInput = styled.input`
  width: auto; 
  padding: 15px 16px;
  font-size: 13px;
  border: none; 
  border-radius: 30px; 
  background-color: #f1f1f1; 
  color: #555; 
  outline: none; 
  
  &::placeholder {
    color: #888; 
  }

  &:focus {
    background-color: white; 
  }
`;
