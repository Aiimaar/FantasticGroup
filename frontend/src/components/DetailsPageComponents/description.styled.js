import styled from 'styled-components';
export const ForMobileName = styled.div`
  display: none;

@media screen and (max-width: 768px) {
  display: flex;
justify-content:left;
  font-family: 'Noto Sans', sans-serif;
  color: #A37C67;
  width: 372px;
}
`;


export const ForMobileDescription = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
     width: 372px;
    font-family: 'Noto Sans', sans-serif;
    color: #333;
  }
`;

export const ForDesktopName = styled.div`
  display: block;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ForDesktopDescription = styled.div`
  display: block;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;