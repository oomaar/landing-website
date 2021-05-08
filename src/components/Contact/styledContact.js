import styled from "styled-components/macro";

export const Container = styled.div`
    background-color: #00b7ff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    padding: 30px 0px;
    margin-top: 50px;

    h3 {
        font-size: 2.5rem;
        margin: 20px;
        color: #fff;
    }
`;

export const InputContainer = styled.div`
	width: 400px;
	height: 50px;
	background-color: #fff;
	display: flex;
	justify-content: center;
	border-radius: 50px;
	box-shadow: 2px 2px 30px rgba(0,0,0,0.15);

    input {
        width: 100%;
        background-color: transparent;
        color: #242425;
        padding: 20px;
    }

    a {
        width: 200px;
        height: 35px;
        background-color: #00b7ff;
        color: #fff;
        display: flex;
        font-size: 0.9rem;
        justify-content: center;
        align-items: center;
        margin: auto 10px;
        border-radius: 20px;
        font-weight: 500;
        transition: 0.4s ease-out;

        :hover{
            background-color: #0099ff;
        }
    }
`;