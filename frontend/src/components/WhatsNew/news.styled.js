import styled from 'styled-components';
import wave from '../../assets/images/wave.png';

export const NewsStyled = styled.section`
  padding: 3rem;


  .news-container {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding: 3rem 1rem;
  }

  .news-container::-webkit-scrollbar {
    display: none;
  }

  h2 {
  position: relative;
  display: inline-block;
  font-size: 2rem;
  padding-left: 1rem;
  margin-bottom: 1.5rem;

  &::after {
    content: '';
    position: absolute;
    left: 65px;
    bottom: -10px;
    width: 80px;
    height: 1.5px;
    background-color:rgb(25, 25, 25); /* vælg en farve der matcher dit tema */
    border-radius: 2px;
  }
}

  .news-item {
    min-height: 350px;
    min-width: 250px;
    max-height: 350px;
    max-width: 250px;

    position: relative;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    scroll-behavior: smooth;
    text-align: center;
    flex-direction: column;

    img {
      width: 100%;
      height: 100%;
      max-height: 210px;
      z-index: 1;
      position: relative;
      vertical-align: middle;
    }

    

    .wave-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 170px;
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
      cursor: pointer;
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
    }
  }
`;
