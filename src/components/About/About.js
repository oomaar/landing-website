import {
    Container,
    ImageContainer,
    TextContainer,
} from "./styledAbout";

const About = ({ image, title, button }) => {
    return (
        <Container id="about">
            <ImageContainer>
                <img src={image} alt={title} />
            </ImageContainer>
            <TextContainer>
                <h2>{title}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus aperiam, 
                    similique dolores laboriosam impedit aliquid deserunt tempora eligendi veniam.
                </p>
                <button>{button}</button>
            </TextContainer>
        </Container>
    );
};

export default About;
