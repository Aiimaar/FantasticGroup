import styled from "styled-components";

export const AllPicrturesWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: left;
gap: 20px; 
padding-bottom: 20px;
@media screen and ( max-width: 768px){
    display: flex;
    align-items: center;
} `

export const PictureHolder = styled.div`
border: 1px solid #A37C67;
display: flex;
border-radius: 28px;
display: flex;
align-items: center;
justify-content: center;
width: 474px;
height: 322px;
@media screen and (max-width: 768px) {
    width: 372px;
    height: 240px;
    justify-content: center;
   
}`

export const SmallPictureWrapper = styled.div`
border: 1px solid #A37C67;
width: 146px;
height: 102px;
border-radius: 10px;
@media screen and (max-width:768px){
    width: 110px;
    height: 78px;
    display: flex;
    justify-content: center;
    
}`
