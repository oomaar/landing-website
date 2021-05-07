import { Navbar } from "..";
import {
    HeaderContainer,
    TextContainer,
    Title,
    Text,
    Button,
} from "./styledHeader";

const Header = () => {
    return (
        <HeaderContainer id="main">
            <Navbar />
        </HeaderContainer>
    );
};

export default Header;
