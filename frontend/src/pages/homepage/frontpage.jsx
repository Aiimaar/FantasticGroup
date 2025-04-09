import { FrontPageStyled } from "./frontpage.styled";
import BckImage from "../../assets/images/mainimg.png"
import { WhatsNew } from "../../components/WhatsNew/news";

const FrontPage = () => {
    return (
        <FrontPageStyled>
                <img className="BckImage" src={BckImage} alt="" />

                <section className="contentContainer">
                    <WhatsNew />
                </section>
            
        </FrontPageStyled>
    )
};

export default FrontPage;