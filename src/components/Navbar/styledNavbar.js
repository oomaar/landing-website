import styled from "styled-components/macro";

export const Nav = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 1;
    background-color: transparent;
    transition: 0.6s ease-in-out;

    &.active {
        box-shadow: 5px 10px 30px rgba(0, 247, 255, 0.157);
        background-color: #fff;
    }

    @media (max-width: 1100px) {
            justify-content: space-between;
            height: 65px;
            padding: 0px 30px;
    }
`;

export const LogoLink = styled.a`
    img {
        width: 90px;

        @media (max-width: 1100px) {
            width:70px;
        }
    }
`;

export const MenuIcon = styled.label`
    display: none;

    @media(max-width:1100px){
        display: block;
        cursor: pointer;
        float: right;
        padding: 28px 20px;
        position: relative;
        user-select: none;
    }
`;

export const NavIcon = styled.span`
    @media (max-width: 1100px) {
        background-color: #333;
        display: block;
        height: 2px;
        position: relative;
        transition: background 0.2s ease-out;
        width: 18px;

        ::before,
        ::after {
            background: #333;
            content: "";
            display: block;
            height: 100%;
            position: absolute;
            transition: all ease-out 0.2s;
            width: 100%;
        }

        ::before {
            top: 5px;
        }

        ::after {
            top: -5px;
        }
    }
`;

export const Menu = styled.ul`
    display: flex;

    @media(max-width: 1100px) {
        display: none;
        position: absolute;
        top: 65px;
        left: 0px;
        background-color: #fff;
        border-bottom: 4px solid #1db096;
        width: 100%;
        padding: 0px;
        margin: 0px;
    }
`;

export const MenuBtn = styled.input`
    display: none;

    :checked ~ ${MenuIcon} ${NavIcon} {
        background: transparent;
    }

    :checked ~ ${MenuIcon} ${NavIcon}:before{
        transform: rotate(-45deg);
        top: 0;
        background: #f00;
    }

    :checked ~ ${MenuIcon} ${NavIcon}:after{
        transform: rotate(45deg);
        top: 0;
        background: #f00;
    }

    @media (max-width: 1100px) {
        display: none;

        :checked ~ ${Menu} {
            display: block;
        }
    }
`;

export const MenuItem = styled.li`
    @media(max-width: 1100px) {
        width: 100%;
    }
`;

export const Link = styled.a`
	height: 40px;
	line-height: 43px;
	margin: 3px;
	padding: 0px 22px;
	display: flex;
	font-size: 0.9rem;
	text-transform: uppercase;
	font-weight: 500;
	color: #000;
    letter-spacing: 1px;
    border-radius: 3px;
    transition: 0.2s ease-in-out;

    :hover {
        background-color: #00b7ff;
        color: #fff;
        box-shadow: 5px 10px 30px rgba(2, 238, 255, 0.336);
        transition: all ease 0.2s;
    }

    @media (max-width: 1100px) {
        width: 100%;
        height: 40px;
        justify-content: center;
        align-items: center;
        margin: 0px;
        padding: 25px;
        border: 1px solid rgba(38,38,38,0.03);
    }
`;