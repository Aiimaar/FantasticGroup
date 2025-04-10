import { FrontPageStyled } from "./frontpage.styled";
import BckImage from "../../assets/images/mainimg.png"
import { WhatsNew } from "../../components/WhatsNew/news";
import { Deals } from "../../components/WhatADeal/Deals";


import { GoGreen } from "../../components/WhatItsGreen/articles";


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



                <section>
                    <GoGreen />
                </section>

            
        </FrontPageStyled>
    )
};

export default FrontPage;