import { NewsStyled } from "./news.styled.js";
import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { Link } from 'react-router-dom'; // Import ajouté pour la navigation

const useNews = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const client = createClient({
          space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
          accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
        });

        const response = await client.getEntries({
          content_type: 'article',
          order: '-sys.createdAt' // Tri par date de création décroissante
        });

        setNews(response.items.map(item => ({
          id: item.sys.id,
          title: item.fields.title,
          excerpt: item.fields.description?.content[0]?.content[0]?.value || '', // Extrait du premier paragraphe
          image: item.fields.image?.fields?.file?.url,
          slug: item.fields.slug || generateSlug(item.fields.title),
          date: new Date(item.sys.createdAt).toLocaleDateString()
        })));
      } catch (err) {
        setError(err);
        console.error('Contentful fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-')
      .slice(0, 50);
  };

  return { news, error, loading };
};

const WhatsNew = () => {
  const { news, error, loading } = useNews();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay message={error.message} />;
  if (!news.length) return <EmptyState />;

  return (
    <NewsStyled>
      <h2>Latest Updates</h2>
      <div className="news-container">
        {news.map((item) => (
          <article key={item.id} className="news-card">
            {item.image && (
              <div className="image-container">
                <img 
                  src={`https:${item.image}`} 
                  alt={item.title}
                  loading="lazy"
                />
              </div>
            )}
            <div className="content">
              <h3>{item.title}</h3>
              <p className="date">{item.date}</p>
              <p className="excerpt">{item.excerpt}</p>
              <Link 
                to={`/news/${item.slug}`} 
                className="read-more"
              >
                Discover
              </Link>
            </div>
          </article>
        ))}
      </div>
    </NewsStyled>
  );
};

// Composants utilitaires
const LoadingSpinner = () => <div className="spinner">Loading...</div>;
const ErrorDisplay = ({ message }) => <div className="error">Error: {message}</div>;
const EmptyState = () => <div className="empty">No news available</div>;

export default WhatsNew;