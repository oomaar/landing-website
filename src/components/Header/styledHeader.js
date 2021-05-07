import styled from "styled-components/macro";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('/images/background.png');

    @media(max-width: 1190px) {
        background-size: 1150px !important;
    }
`;

export const TextContainer = styled.div`
	font-family: 'Montserrat';
	width: 500px;
	position: absolute;
    left: 22%;
	top: 50%;
	transform: translate(-22%,-50%);

    @media(max-width: 1190px) {
        left: 50%;
		top: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
    }

    @media(max-width: 970px) {
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
    }

    @media(max-width: 600px){
		width: 60%;
    }
`;

export const Title = styled.h1`
	font-family: 'Montserrat';
	font-size: 40px;
	margin: 0px;
	letter-spacing: 2px;
	color: #000;

    span {
        color: #00b7ff;
    }
`;

export const Text = styled.p`
    color: #969696;
`;

export const Button = styled.button`
	width: 110px;
	height: 40px;
	display: flex;
	justify-content: center;
    align-items: center;
    background-color: #00b7ff;
    box-shadow: 5px 10px 30px rgba(2, 238, 255, 0.336);
    border-radius: 10px;
	color: #fff;

    :hover {
        background-color: #0099ff;
        transition: all ease 0.5s;
        color: #fff;
    }

    @media (max-width: 970px) {
        margin-left: 27%;
        margin-top: 20px;
    }
`;