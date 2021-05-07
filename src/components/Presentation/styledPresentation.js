import styled from "styled-components/macro";

export const Container = styled.div`
    padding-top: 30px;
    width: 100%;
    height: 768px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("/images/presentation.png");
    text-align: center;

    h1 {
        font-size: 2rem;
    }

    @media (max-width: 970px) {
        display: none;
    }
`;