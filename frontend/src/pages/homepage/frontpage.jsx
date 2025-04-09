import { FrontPageStyled } from "./frontpage.styled";
import BckImage from "../../assets/images/mainimg.png"
import { WhatsNew } from "../../components/WhatsNew/news";
import { Deals } from "../../components/WhatADeal/Deals";

const FrontPage = () => {
    return (
        <FrontPageStyled>
                <img className="BckImage" src={BckImage} alt="" />


                <section>
                    <WhatsNew />
                </section>

                <section>
                    <Deals />
                </section>
            
        </FrontPageStyled>
    )
};

export default FrontPage;