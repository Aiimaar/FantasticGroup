import { DealsStyled } from "./Deals.styled.js";
import { useDealsHook } from "../../hooks/useDealsHook.jsx"; 
import { Link } from 'react-router-dom';



export const Deals = () => {
    const { deals, error } = useDealsHook();

    if (error) return <div>Error: {error.message}</div>;
    if (deals.length === 0) return <div>No news available</div>;

    // Farveklasser til bølgen
    const waveColors = ['wave-red', 'wave-blue', 'wave-green', 'wave-purple'];

    return (
        <DealsStyled>
            <div className="bckLeafs"/>
            <h2>What a Deal!</h2>
            <div className="deals-container">
                {deals.map((item, index) => {
                    const waveClass = waveColors[index % waveColors.length];

                    return (
                        <Link key={item.id} className={`deal-item ${waveClass}`}>
                            <div className="wave-overlay" />
                            <div className="deal-content">
                                <h3 className="deal-title">{item.title}</h3>
                            </div>
                            <img className="deal-image" src={item.image} alt={item.title} />
                        </Link>
                    );
                })}
            </div>
        </DealsStyled>
    );
};
