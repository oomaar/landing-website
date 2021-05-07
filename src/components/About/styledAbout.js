import styled from "styled-components/macro";

export const Container = styled.div`
    margin-top: 100px;
	width: 100%;
	height: 120vh;
	background-color:#f3fdff;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 50px 5% 0px 5%;
	position: relative;

    @media (max-width: 1100px) {
        flex-direction: column;
        justify-content: center;
    }
    
    @media (max-width: 970px) {
        justify-content: center;
        padding-top: 0px;
        text-align: center;
        margin-top: 0px;
    }
    `;

export const ImageContainer = styled.div`
    width: 50%;
    
    img {
        width: 600px;
        
        @media (max-width: 1190px) {
            height: 400px;
        }
    }

    @media (max-width: 1100px) {
        margin-bottom: 50px;
        display: flex;
        justify-content: center;
    }
`;

export const TextContainer = styled.div`
    width: 45%;
    color: #fff;
    list-style: circle;

    h2 {
        font-size: 2rem;
        color:#00b7ff;
        font-weight: 500;
        margin: 0px;
        padding: 0px;

        @media (max-width: 970px) {
            font-size: 1.5rem;
        }
    }

    p {
        width: 80%;
        font-size: 1.2rem;
        color: #272727;

        @media (max-width: 970px) {
            width: 100%;
        }
    }

    button {
        margin-top: 20px;
        width: 140px;
        height: 45px;
        border-radius: 10px;
        border: none;
        outline: none;
        color: #fff;
        background-color: #00b7ff;

        :hover{
            background-color: rgb(0, 132, 255);
            transition: all ease 0.3s;
            color: #fff;
        }
    }

    @media (max-width: 970px) {
        width: 90%;
    }
`;