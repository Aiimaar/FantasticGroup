import { DealsStyled } from "./Deals.styled.js";
import { useDealsHook } from "../../hooks/useDealsHook.jsx"; 
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Deals = () => {
  const { deals, error } = useDealsHook();
  const [activeId, setActiveId] = useState(null);
  const navigate = useNavigate();

  if (error) return <div>Error: {error.message}</div>;
  if (deals.length === 0) return <div>No news available</div>;

  const waveColors = ['wave-red', 'wave-blue', 'wave-green', 'wave-purple'];

  const handleClick = (id, slug) => {
    if (activeId === id) {
      navigate(`/deal/${slug}`);
    } else {
      setActiveId(id);
    }
  };

  return (
    <DealsStyled>
      <h2>What a Deal!</h2>
      <div className="deals-container">
        {deals.map((item, index) => {
          const waveClass = waveColors[index % waveColors.length];
          const isActive = activeId === item.id;

          return (
            <div
              key={item.id}
              className={`deal-item ${waveClass} ${isActive ? "active" : ""}`}
              onClick={() => handleClick(item.id, item.slug)}
            >
              <div className="wave-overlay" />
              <div className="deal-content">
                <h3 className="deal-title">{item.title}</h3>
              </div>
              <img className="deal-image" src={item.image} alt={item.title} />
            </div>
          );
        })}
      </div>
    </DealsStyled>
  );
};
