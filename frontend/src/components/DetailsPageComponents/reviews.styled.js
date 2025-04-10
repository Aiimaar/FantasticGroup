import styled from 'styled-components';
export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
width: 100%;
  @media screen and (max-width: 748px){
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-top: 20px;
  }
`;

export const ReviewCard = styled.div`
  border: 1px solid #A37C67;
  border-radius: 8px;
  padding: 12px;
  font-family: 'Noto Sans', sans-serif;
  width: 100%;
  
`;



export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;

  @media screen and (max-width: 748px){
    display: flex;
    align-items: center;
    
  }
`;

export const ReviewerName = styled.span`
  font-size: 14px;
  color: #333;
`;

export const RatingBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Stars = styled.span`
  color: #F1D742; // gold
  font-size: 20px;
`;

export const EmptyStars = styled.div`
color: #CDCDCD;
font-size: 20px;
`;

export const Rating = styled.span`
  font-size: 14px;
  color: #333;
`;

export const ReviewContent = styled.p`
  font-size: 13px;
  margin-top: 8px;
  color: #444;
`;

export const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    gap: 8px;
  }
`;

export const ActionButton = styled.button`
  background-color: #A37C67;
  color: #FFFDFB;
  border: none;
  border-radius: 20px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
width: 120px;
height: 30px;
  cursor: pointer;

  &:hover {
    background-color: #8d6652;
  }
`;
