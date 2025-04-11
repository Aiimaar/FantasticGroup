import styled from "styled-components";

export const TextOnlyCardWrapper = styled.div`
  border: 1px solid #A37C67;
  width: 380px;
  border-radius: 28px;
  overflow: hidden;
  padding: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  background-color: #FFFFFF;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 350px;
  }
`;

export const CardWrapper = styled.div`
  border: 1px solid #A37C67;
  width: 700px;
  height: 240px;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 475px;
  }
`;

export const PictureHolder = styled.img`
  width: 320px;
  height: 240px;
  object-fit: cover;
  overflow: hidden;
  
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 160px;
  }
`;

export const MainInfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: left;
  }
`;

export const InfoHolder = styled.div` 
  display: flex;
  flex-direction: row;
  height: 100%;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }
`;

export const JourneyInfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px;
  font-family: 'Noto Sans', sans-serif;

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`;




export const NameOfRestaurant = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const AdressInfoHolder = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
  gap: 8px;
  font-family: 'Noto Sans', sans-serif;
  color: #666;
`;

export const TimeInfoHolder = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
  gap: 8px;
  font-family: 'Noto Sans', sans-serif;
  color: #666;
`;

export const FilterHolder = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 10px;
  margin-top: 10px;
  position: relative;

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
  gap: 12px;
  align-items: flex-end;
`;

export const OpenNow = styled.div`
  color: ${props => props.children === "Open now" ? "#5e8f3f" : "#d32f2f"};
  font-size: 14px;
  font-weight: 500;
  font-family: 'Noto Sans', sans-serif;
`;

export const ReviewCount = styled.div`
  font-size: 14px;
  color: #666;
  font-family: 'Noto Sans', sans-serif;
`;

export const StarsContainer = styled.div`
  display: flex;
  gap: 2px;
  margin: 4px 0;
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
  background-color: #f1f1f1;
  color: #333;
  border: none;
  border-radius: 20px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  width: 130px;
  height: 36px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {

    background-color: #8a6451;

    background-color: #e5e5e5;
    transform: scale(1.03);
  }
  
  &:active {
    transform: scale(0.98);

  }
  
  @media screen and (max-width: 768px) {
    width: 130px;
    height: 36px;
  }
`;

export const StartButton = styled.button`
  background-color: #A37C67;
  color: white;
  border: none;
  border-radius: 20px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  width: 130px;
  height: 36px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #8a6854;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 768px) {
    width: 130px;
    height: 36px;
  }
`;

export const FiltersAndButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

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
    padding-left: 10px;
  }
`;

// Nouveaux composants pour le carrousel
export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  color: #666;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  font-weight: bold;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-50%) scale(1.1);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
    background: rgba(255, 255, 255, 1);
  }
`;

export const PrevButton = styled(NavButton)`
  left: 10px;
`;

export const NextButton = styled(NavButton)`
  right: 10px;
`;

export const CarouselDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 6px;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.$active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.7);
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const Star = styled.span`
  color: ${props => props.$filled ? '#ffb400' : '#e0e0e0'};
  font-size: 16px;
`;

export const Filter = styled.div` 
  border: 1px solid #A37C67;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 28px;
  height: 24px;
  width: auto;
  min-width: 80px;
  padding: 0 12px;
  font-size: 12px;
  color: #666;
  background-color: ${props => props.children === "Non disponible" ? "#ffebee" : "#f8f8f8"};
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.children === "Non disponible" ? "#ffcdd2" : "#f1e8e0"};
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  
  &:active {
    transform: translateY(0);
  }
`;