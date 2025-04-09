import styled from 'styled-components';
import wave from '../../assets/images/wave.png';

export const NewsStyled = styled.section`

  .news-container {
    display: flex;
    /* justify-content: center; */
    overflow-x: auto;
    gap: 20px;
  }

  .news-container::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

  .news-item {
    width: 250px;
    height: 330px;
    max-width: 100px;
    min-width: 230px;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    scroll-behavior: smooth;
    background-color: green;
    text-align: center;
    max-height: 330px;
    display: flex;
    flex-direction: column;
    

    img {
      width: 100%;
      height: auto;
      z-index: 1;
      position: relative;
      vertical-align: middle;
    }

    .wave-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 150px;
      background-image: url(${wave});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: bottom;
      z-index: 2;
      pointer-events: none;
    }

    .news-content {
      position: relative;
      z-index: 3;
      display: flex;
      flex-direction: column;
      justify-content: end;
      gap: 1rem;
      flex-grow: 1;
      padding: 20px;
      


      h3 {
        margin: 0;
      }
    }

    button {
      border-radius: 20px;
      padding: 8px 20px;
      border: none;
      background-color: #A37C67;
      color: white;
      font-weight: 100;
    }

    /* 🎨 Farvevariationer */
    &.wave-red .wave-overlay {
      filter: hue-rotate(0deg);
    }

    &.wave-blue .wave-overlay {
      filter: hue-rotate(200deg);
    }

    &.wave-green .wave-overlay {
      filter: hue-rotate(100deg);
    }

    &.wave-purple .wave-overlay {
      filter: hue-rotate(270deg);
    }
  }

  @media (min-width: 768px) {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .news-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      
      /* gap: 40px; */
      /* padding: 20px 40px; */
      /* overflow: visible; */
    }
  }
`;
