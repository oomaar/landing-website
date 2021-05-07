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
                <h2>{title}</h2>
                <p>{text}</p>
            </TextContainer>
        </Container>
    );
};

export default FeatureBox;
