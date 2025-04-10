import { FrontPageStyled } from "./frontpage.styled";
import BckImage from "../../assets/images/mainimg.png"
import { WhatsNew } from "../../components/WhatsNew/news";
import { Deals } from "../../components/WhatADeal/Deals";


import { GoGreen } from "../../components/WhatItsGreen/articles";


const FrontPage = () => {
    return (
        <FrontPageStyled>
                <img className="BckImage" src={BckImage} alt="" />
                <div className="headerText">
                    <h1>Where should we look?</h1>
                    <h2>Remote working Space <span>finder</span></h2>
                </div>

                <section>
                    <WhatsNew />
                </section>

                <section>
                    <Deals />
                </section>



                <section>
                    <GoGreen />
                </section>

            
        </FrontPageStyled>
    )
};

export default FrontPage;