// import BckImage from "../../assets/images/bck.png"

import styled from "styled-components";

export const NavigationWrapper = styled.header`
  background-color: #E1D3C6;
  padding: 10px 20px;;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .svg-inline--fa {
  vertical-align: -0.5rem; 
  }

  .logo {
    position: relative;
    display: flex;
    height: 11vw;
    max-height: 70px;

    img{
      
    }
  }

  .right-side {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .search-toggle {
    position: relative;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: white;
    transition: width 0.3s ease, border-radius 0.3s ease;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;

    &.open {
      width: 240px;
      border-radius: 30px;
    }

    input {
      border: none;
      outline: none;
      font-size: 10px;
      background: transparent;
      color: #8b6d5c;
      padding: 0 0 0 50px;
      width: 110%;
      opacity: 0;
      transition: opacity 0.3s ease;

      &::placeholder {
        font-size: 1px;
      }
    }

    &.open input {
      opacity: 1;
    }

    .icon-button {
      position: absolute;
      left: 0;
      top: 0;
      width: 60px;
      height: 60px;
      background: none;
      border: none;
      font-size: 20px;
      color: #8b6d5c;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      cursor: pointer;
      outline: none;

    }
  }

  .navbox {
    background-color: #f6f1ed;
    border-radius: 40px;
    padding: 0 10px;
    display: flex;
    height: 60px;
    width: fit-content;
    align-items: center;
    gap: 30px;
    flex: 1;
    position: relative;
    margin: 0;
    width: 100%;
  }

  ul {
    display: flex;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul li a {
    padding: 10px 20px;
    border-radius: 30px;
    font-weight: 500;
    color: #8b6d5c;
    text-decoration: none;
    transition: background 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    gap: 8px;
  }

  ul li a.active {
    background-color: #8b6d5c;
    color: white;
  }

  ul li a:hover:not(.active) {
    background-color: #ded0c6;
  }

  .hamburger {
    display: none;
  }

  @media (max-width: 768px) {
  
    padding: 8px 15px 8px 15px;

    .open {
          max-width: 45vw;
        }

    .search-toggle {
      position: absolute;
      right: 4rem;
      border-radius: 30px !important;
      height: 45px;
        width: 45px;
        align-items: center;
        justify-content: center;

      .icon-button {
        position: relative;
        font-size: 18px;
      }

 

      input {
        /* position: relative; */
        padding: 0;
        width: 100%;
        /* font-size: ; */
       
      }

    }

    .navbox {
      position: absolute;
      top: 0;
      right: 0;
      width: 100vw; 
      height: 100vh; 
      background: #f6f1ed;
      flex-direction: column;
      z-index: 20;
      display: none;
      border-radius: 0 0 20px 20px;
      padding-top: 100px; /* Luft til top logo/nav */
        }

    .navbox.open {
      display: block;

      
    }

    .hamburger {
      display: block;
      padding: 0;
      top: 16px;
      right: 16px;
      background: none;
      border: none;
      font-size: 2rem;
      color: #8b6d5c;
      cursor: pointer;
      z-index: 25;
    }

    ul {
      position: relative;
      flex-direction: column;
      width: 90%;
      gap: 10px;
      margin-top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }

    ul li a {
      width: 100%;
      position: relative;
      padding: 16px 0;
      font-size: 18px;
      border-radius: 30px;
    }
  }

`;
