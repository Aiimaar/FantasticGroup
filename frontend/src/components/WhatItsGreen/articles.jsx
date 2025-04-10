import { useArticleHook } from "../../hooks/useThisHook.jsx"; 
import { Link } from 'react-router-dom';
import { ArticlesStyled } from "./articles.styled.js";

export const GoGreen = () => {
    const { article, error } = useArticleHook();
  
    if (error) return <div>Error: {error.message}</div>;
  
  
    return (
      <ArticlesStyled>
        <h2>Go <span>Green</span> or Go Home</h2>
        <p>Here at (name) we support sustainability – because every green step matters!</p>
        <p>See how you can be <span>Green</span> too! Are you committed?</p>
    
        {(!article || article.length === 0) ? (
          <div>No articles available</div>
        ) : (
          <div className="article-container">
            {article.map((item) => (
              <div key={item.id} className="article-item">
                <Link to={`/article/${item.slug}`}>
                  {item.image ? (
                    <img src={item.image} alt={item.title} />
                  ) : (
                    <div className="fallback-image">No Image</div>
                  )}
                </Link>
              </div>
            ))}
          </div>
        )}
      </ArticlesStyled>
    );
    
  };
  

