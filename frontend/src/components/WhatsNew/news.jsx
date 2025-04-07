import { NewsStyled } from "./news.styled.js";
// import useNews 

const WhatsNew = () => {

    const { news, error } = useNews();

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (news.lenght === 0) {
        return <div>No news available</div>;
    }

    // Render news
    return (


        <NewsStyled>
            {/* section titel */}
            <h2>What's New</h2>

            {/* container for news */}
            <div className="news-container">
                {news.map((news) => (
                // Link til individuel news
                <div key={news.id} className="news-item">
                    {/* image of news */}
                    <img src={news.image} alt={news.title} />
                    {/* title of news */}
                    <h3>{news.title}</h3>
                    {/* button to find nearest store */}
                    <button key={news.id} to={`/news/${news.slug}`}>See Store</button>
                </div>
                ))}

            </div>

        </NewsStyled>
        
    );
};

export default WhatsNew;
