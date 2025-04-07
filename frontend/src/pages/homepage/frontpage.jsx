import { FrontPageStyled } from "./frontpage.styled";
import BckImage from "../../assets/images/bck.svg"

const FrontPage = () => {
    return (
        <FrontPageStyled>
                <img className="BckImage" src={BckImage} alt="" />
            
        </FrontPageStyled>
    )
};

export default FrontPage;