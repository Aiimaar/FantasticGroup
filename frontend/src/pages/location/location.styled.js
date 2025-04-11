import styled from 'styled-components';

export const PlaceCardHolder = styled.div`
 display: flex;
  justify-content: flex-end; 
  padding: 20px;
    @media screen and (max-width: 768px) {
        justify-content: center; 
        padding: 10px;
    }
`

export const WrapperLocation = styled.div`

  @media screen and (min-width: 900px) {
    
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    
  }
 `