import styled from "styled-components";
import wave from "../../assets/images/wave.png";

export const DealsStyled = styled.div`
  padding: 3rem;

  .deals-container {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding: 3rem 1rem;
  }

  .deals-container::-webkit-scrollbar {
    display: none;
  }

  .deal-item {
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
    text-decoration: none;

    /* Desktop hover */
    &:hover .wave-overlay {
      top: -120px;
      transform: rotate(180deg) scaleY(0.8);
    }

    &:hover .deal-content {
      opacity: 0;
      transform: translateY(-15px);
    }
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
    left: 110px;
    bottom: -10px;
    transform: translateX(-50%);
    width: 80px;
    height: 1.5px;
    background-color:rgb(25, 25, 25); /* vælg en farve der matcher dit tema */
    border-radius: 2px;
  }
}


  img {
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative;
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
    transition: transform 0.8s ease-in-out, top 0.7s ease-in-out;
    border-radius: 20px 20px 0 0;
    pointer-events: none;
  }

  .deal-content {
  position: absolute;
  padding: 0 15px;
  z-index: 3;
  top: 30px;
  left: 0;
  right: 0;
  text-align: center;
  transform: translateY(0);
  transition:
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.10s ease 0.3s;
  opacity: 1;

  .deal-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0;
    color: black;
  }
}


  /* Touch devices: aktiver via .active class */
  @media (hover: none) and (pointer: coarse) {
    .deal-item.active .wave-overlay {
      top: -120px;
      transform: rotate(180deg) scaleY(0.8);
    }

    .deal-item.active .deal-content {
      opacity: 0;
      transform: translateY(-15px);
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
