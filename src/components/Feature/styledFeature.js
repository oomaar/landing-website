import styled from "styled-components/macro";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 40px ;
    background-color: #fff;

    @media (max-width: 1190px) {
		height: auto;
    }

    @media (max-width: 970px) {
        margin-bottom: 100px;
    }
`;

export const SubContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;

    @media (max-width: 1190px) {
		flex-wrap: wrap;
    }
`;