import styled from "styled-components";
import wave from "../../assets/images/wave.png";

export const DealsStyled = styled.div`

  .deals-container {
    display: flex;
    overflow-x: auto;
    gap: 20px;
  }

  .deals-container::-webkit-scrollbar {
    display: none;
  }

  .deal-item {
    width: 250px;
    height: 350px;
    max-height: 350px;
    max-width: 250px;
    min-width: 230px;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    scroll-behavior: smooth;
    text-align: center;
    flex-direction: column;
    text-decoration: none;

    &:hover .wave-overlay {
      top: -100px;
      transform: rotate(180deg) scaleY(0.8);
    }

    &:hover .deal-content {
      opacity: 0;
      transform: translateY(-10px);
    }
  }

  img {
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative;;
    vertical-align: middle;
    border-radius: 20px;
    object-fit: cover;
    }


    .wave-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 130px;
    background-image: url(${wave});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    transform: rotate(180deg);
    z-index: 2;
    transition: transform 0.4s ease, top 0.4s ease;
    border-radius: 20px 20px 0 0;
    pointer-events: none;
  }

.deal-item:hover .wave-overlay {
  top: -120px;
  transform: rotate(180deg) scaleY(0.8);
}


    .deal-content {
    position: absolute;
    z-index: 3;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);

    .deal-title {
      font-size: 1.2rem;
      font-weight: 700;
      margin: 0;
      color: black;
    }
  }

  /* 🎨 Farvevariationer */
  & .wave-red .wave-overlay {
    filter: hue-rotate(0deg);
  }

  & .wave-blue .wave-overlay {
    filter: hue-rotate(200deg);
  }

  & .wave-green .wave-overlay {
    filter: hue-rotate(100deg);
  }

  & .wave-purple .wave-overlay {
    filter: hue-rotate(270deg);
  }

  @media (min-width: 768px) {

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.deals-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  

}
}
`;
