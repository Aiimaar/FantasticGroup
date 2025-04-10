import { NewsStyled } from "./news.styled.js";
import { useNewsHook } from "../../hooks/useNewsHook.jsx"; 
import { Link } from 'react-router-dom';

export const WhatsNew = () => {
    const { news, error } = useNewsHook();

    if (error) return <div>Error: {error.message}</div>;
    if (news.length === 0) return <div>No news available</div>;

    // Farveklasser til bølgen
    const waveColors = ['wave-red', 'wave-blue', 'wave-green', 'wave-purple'];

    return (
        <NewsStyled>
            <h2>What's New!</h2>
            <div className="news-container">
                {news.map((item, index) => {
                    const waveClass = waveColors[index % waveColors.length]; // Fast farve pr. item

                    return (
                        <div key={item.id} className={`news-item ${waveClass}`}>
                            {item.image && <img src={item.image} alt={item.title} />}

                            <div className="wave-overlay" />

                            <div className="news-content">      
                                <h3>{item.title}</h3>
                                
                                <Link to={`/news/${item.slug}`}>
                                    <button>See Store</button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </NewsStyled>
    );
};
