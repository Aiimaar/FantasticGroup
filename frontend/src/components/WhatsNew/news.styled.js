import styled from 'styled-components';

export const NewsStyled = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    color: #2c3e50;
  }

  .news-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }

  .news-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }

    .image-container {
      height: 200px;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
    }

    &:hover img {
      transform: scale(1.05);
    }

    .content {
      padding: 1.5rem;

      h3 {
        margin: 0 0 0.5rem;
        font-size: 1.25rem;
        color: #34495e;
      }

      .date {
        color: #7f8c8d;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }

      .excerpt {
        color: #34495e;
        margin-bottom: 1rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .read-more {
        display: inline-block;
        padding: 0.5rem 1rem;
        background: #3498db;
        color: white;
        border-radius: 4px;
        text-decoration: none;
        transition: background 0.2s;

        &:hover {
          background: #2980b9;
        }
      }
    }
  }

  /* États spéciaux */
  .spinner, .error, .empty {
    text-align: center;
    padding: 2rem;
    font-size: 1.2rem;
  }
`;