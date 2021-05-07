import {
    Container,
    InputContainer,
} from "./styledContact";

const Contact = () => {
    return (
        <Container>
            <h3>Contact Us</h3>
            <InputContainer>
                <input type="email" placeholder="example@email.com" />
                <a href="#">Contact</a>
            </InputContainer>
        </Container>
    );
};

export default Contact;
