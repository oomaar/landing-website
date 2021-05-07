import styled from "styled-components/macro";

export const Container = styled.div`
    background-color: #fff;
    width: 300px;
    height: 450px;
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 10px 12px rgba(0,0,0,0.1);
    transition: 0.3s ease-in-out;
    position: relative;

    :hover {
        box-shadow: 2px 2px 12px rgba(0,0,0,0.1);
    }

    @media (max-width: 1190px) {
		flex-grow: 1;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 60%;

    img {
        padding: 15px;
        width:100%;
        height: 100%;
        
        @media (max-width: 1190px) {
            object-fit:contain;
        }
    }
`;

export const TextContainer = styled.div`
    width: 100%;
    height: 40%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;

    p {
        margin: 0px;
        color: #000266a6;
        font-size: 1.1rem;
        font-family: calibri;
        display: block;
        display: -webkit-box;
        max-width: 80%;
        margin-top: 25px;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

        :hover {
            color: #000266;
        }
    }

    a {
        margin-top: 15px;
    }
`;