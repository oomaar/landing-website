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
            <TextContainer>
                <Title><span>Launch Your App</span> With Confidence And Creativity</Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, 
                    alias corrupti vitae aliquid qui maiores.
                </Text>
                <Button>Download</Button>
            </TextContainer>
        </HeaderContainer>
    );
};

export default Header;
