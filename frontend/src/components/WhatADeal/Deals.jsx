import { DealsStyled } from "./Deals.styled";
// import dealscontentful 

const Deals = () => {

    return (
        <DealsStyled>
            {/* Titel */}
            <h2>What a Deal!</h2>

            {/* content container */}       
            <div className="deal-container">
                {deal.map((deal) => (
                    // Link til individuel deal
                    <NavLink key={deal.id} to={`/deals/${deal.slug}`} className="deal-item">

                        <div className="deal-content">
                            <h2 className="deal-title">{deal.title}</h2>
                        </div>
                       
                        <img className="deal-image" src={deal.image} alt={deal.title} />
                        
                    </NavLink>
                ))}
            </div>

        </DealsStyled>
    )
}