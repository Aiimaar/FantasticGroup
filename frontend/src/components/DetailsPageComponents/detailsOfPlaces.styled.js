import styled from "styled-components";

export const DetailsInfo= styled.div`
display: flex;
flex-direction:row;
align-items: center;
justify-content: space-between;
width: 472px;
padding-top: 20px;
padding-bottom: 20px;

@media screen and (max-width: 768px) {
    display: flex;
flex-direction:row;
align-items: center;
justify-content: space-around;
width: 372px;
gap:110px;
padding-top: 20px;
padding-bottom: 20px;
    
}
`
export const StreetHolder = styled.div`
display: flex;
align-items: center;
gap: 10px;
padding-top:8px

`

export const Location = styled.div`


width: 372px;`

export const AdressWrapper = styled.div`
display:flex;
flex-direction: column;
width:472px;
@media screen and (max-width: 768px){
    width: 372px;
}
`


export const FilterWrapper= styled.div`
 display: flex;
 width: 472px;
 justify-content: space-between;


@media screen and (max-width: 768px){
    display: flex;
justify-content  :center ;
gap: 18px;
    width:372px
  
    
}`