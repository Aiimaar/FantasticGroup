import styled from "styled-components"

export const ContentWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
padding: 20px;

@media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
}
`

export const WrapperFyrst= styled.div`
display: flex;
flex-direction: column;
align-items:center;`

export const WrapperSecond= styled.div`
display: flex;
flex-direction: column;
align-items:left;
width: 472px;
margin-left: 60px; 
justify-content: space-between;
 

@media screen and (max-width: 768px) {
    display: flex;
flex-direction: column;
align-items:left;
width: 372px;
margin-left: 0px;
}
`


















