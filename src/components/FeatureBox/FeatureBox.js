import {
    Container,
    ImageContainer,
    TextContainer,
} from "./styledFeatureBox";

const FeatureBox = ({ image, title, text }) => {
    return (
        <Container>
            <ImageContainer>
                <img src={image} alt={title} />
            </ImageContainer>
            <TextContainer>
                <h1>{title}</h1>
                <p>{text}</p>
            </TextContainer>
        </Container>
    );
};

export default FeatureBox;
