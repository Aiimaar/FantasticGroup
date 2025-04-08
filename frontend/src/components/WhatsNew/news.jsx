import { NewsStyled } from "./news.styled.js";
import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { Link } from 'react-router-dom'; // Import ajouté pour la navigation

const useNews = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const client = createClient({
      space: "q9cy9f1xl4w0",
      accessToken: "Vazz_9-yxEzrQhYMW6AnPHEGwlDXMv_IofqfX8q-PSw"
    });

    client.getEntries({
      content_type: 'articles', // Notez le 's' à la fin (d'après votre JSON)
      include: 2 // Pour inclure les assets liés
    })
    .then(response => {
      setNews(response.items.map(item => ({
        id: item.sys.id,
        title: item.fields.titre, // Champ 'titre' dans votre JSON
        description: extractTextFromRichText(item.fields.description),
        image: getFirstImageUrl(item.fields.image, response.includes),
        slug: generateSlug(item.fields.titre),
        date: new Date(item.sys.createdAt).toLocaleDateString()
      })));
    })
    .catch(err => setError(err))
    .finally(() => setLoading(false));
  }, []);

  // Helper functions
  const extractTextFromRichText = (richText) => {
    return richText?.content?.[0]?.content?.[0]?.value || '';
  };

  const getFirstImageUrl = (images, includes) => {
    if (!images?.[0]?.sys?.id) return null;
    const asset = includes?.Asset?.find(a => a.sys.id === images[0].sys.id);
    return asset?.fields?.file?.url ? `https:${asset.fields.file.url}` : null;
  };

  const generateSlug = (title) => {
    return title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
  };

  return { news, error, loading };
};

const WhatsNew = () => {
  const { news, error, loading } = useNews();

  if (loading) return <div className="loading">Chargement...</div>;
  if (error) return <div className="error">Erreur : {error.message}</div>;
  if (!news.length) return <div className="empty">Aucune actualité</div>;

  return (
    <NewsStyled>
      <h2>Actualités</h2>
      <div className="news-container">
        {news.map(item => (
          <div key={item.id} className="news-item">
            {item.image && (
              <img 
                src={item.image} 
                alt={item.title}
                loading="lazy"
              />
            )}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="date">{item.date}</span>
          </div>
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