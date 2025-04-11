import styled from 'styled-components';


export const FrontPageStyled = styled.div`

span {
  color: #86866B;
}

.bigWave {
  position: absolute;
  object-fit: contain;
  width: 100%;
  height: auto;
  overflow: hidden;
}

.BckImage {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: contain;
    z-index: -1;
  }

  .headerText {
    position: absolute;
    top: 100px;
    left: 3rem;

    font-size: 2vw;
  }

  section {
    display: flex;
    flex-direction: column;
    /* padding: 3rem; */


    margin: 0;

  }

`;