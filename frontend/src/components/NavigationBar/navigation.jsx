import { NavigationStyled } from "./navigation.styled";
import SearchBar from "../SearchBar/searchEngine";

const Navigation = () => {
    return (
        <NavigationStyled>
            <img src="" alt="#" /> // Logo

            <nav>
                <ul>
                    <SearchBar />
                    <li>Home</li>
                    <li>Location</li>
                    <li>Contact</li>
                    <li><img src="" alt="#" /></li> // User Login
                </ul>
            </nav>
        </NavigationStyled>
    )
}