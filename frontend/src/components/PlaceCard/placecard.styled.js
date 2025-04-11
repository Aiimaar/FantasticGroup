import styled from "styled-components";




export const CardWrapper = styled.div`
border: 1px solid #A37C67;
width: 700px;
height: 240px;
border-radius: 28px;
overflow: hidden;
@media screen and (max-width:768px ){
    width: 360px;
    height: 475px;
    
}`
export const PictureHolder = styled.div`
width: 320px;
height: 240px;
border-radius: 28px;
overflow: hidden;
border: 1px solid #A37C67;

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}


@media screen and (max-width: 768px) {
  width: 360px;
  height: 160px;
}
`;
export const MainInfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: left;
  }
`;

export const InfoHolder= styled.div` 
display: flex;
flex-direction: row;
@media screen and (max-width:768px ){
    flex-direction: column;
    justify-content: center;
    align-items: left;
    
    
}`
export const JourneyInfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
    padding: 10px;
    font-family: 'Noto Sans';

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`;
export const Filter= styled.div` 
border: 1px solid #A37C67;
display: flex;
align-items: center;
justify-content: center;
border-radius: 28px;
height: 24px;
width:114px;
 `

export const NameOfRestaurant= styled.div`
font-family: 'Noto Sans', sans-serif;
font-size: 16px;
font-weight: bold;
color: #A37C67;`

export const AdressInfoHolder= styled.div`
display: flex;
font-size: 14px;
align-items: center;
gap: 8px;
font-family: 'Noto Sans', sans-serif;
color: #86866B;
`
export const TimeInfoHolder= styled.div`
display: flex;
font-size: 14px;
align-items: center;
gap: 8px;
font-family: 'Noto Sans', sans-serif;
color: #86866B;

`

export const FilterHolder = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 10px;
  margin-top: 10px;
  position: relative;

  /*  MOBILE — scroll horizontal */
  @media screen and (max-width: 768px) {
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    width: 100%;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  /*  DESKTOP — wrap normally */
  @media screen and (min-width: 769px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow: visible;
    white-space: normal;
  }
`;
export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 24px;
`;

export const OpenNow = styled.div`
  color: #526343; 
  font-size: 16px;
  font-family: 'Noto Sans', sans-serif;
`;

export const ReviewCount = styled.div`
  font-size: 14px;
  color: #86866B;
font-family: 'Noto Sans', sans-serif;
`;

export const StarsContainer = styled.div`
  display: flex;
  gap: 4px;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DetailsButton = styled.button`
  background-color: #A37C67;
  color: #FFFDFB;
  border: 1px solid #A37C67;
  border-radius: 20px;
  font-family: 'Noto Sans', sans-serif;
    font-size: 14px;
  width: 130px;
    height: 30px;
  cursor: pointer;

  &:hover {
    background-color: #8a6451;
  }
  @media screen and (max-width: 768px) {
        width: 130px;
        height: 30px;
    }
`;

export const StartButton = styled.button`
  background-color: #A37C67;
  color: #FFFDFB;
  border: none;
  border-radius: 20px;
  font-family: 'Noto Sans', sans-serif;
    font-size: 14px;
  width: 130px;
    height: 30px;
  cursor: pointer;

  &:hover {
    background-color: #8a6451;
  }

    @media screen and (max-width: 768px) {
        width: 130px;
        height: 30px;
    }
`;



export const FiltersAndButtons = styled.div`
display: flex;
flex-direction: row;

@media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    
}
`

export const DesktopInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileInfo = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 6px;}
`;