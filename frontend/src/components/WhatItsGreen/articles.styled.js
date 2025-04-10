import styled from "styled-components";

export const ArticlesStyled = styled.section`
  padding: 2rem 1rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;

    span {
      color: green;
    }
  }

  p {
    max-width: 700px;
    margin: 0 auto 1.5rem;
    font-size: 1rem;
    color: #333;
  }

  .article-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  .article-item {
    width: 100%;
    max-width: 360px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    background-color: #fff;
    transition: transform 0.3s ease;
  }

  .article-item:hover {
    transform: translateY(-4px);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  .fallback-image {
    width: 100%;
    height: 200px;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #555;
    font-style: italic;
  }

  /* 💻 Desktop view */
  @media (min-width: 768px) {
    text-align: left;

    h2, p {
      text-align: left;
      margin-left: 0;
    }

    p {
      margin: 0 0 1.5rem 0;
    }

    .article-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      justify-items: center;
    }

    .article-item {
      width: 100%;
      max-width: none;
    }
  }
`;
