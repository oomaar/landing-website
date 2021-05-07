import { useState } from "react";
import {
    Nav,
    LogoLink,
    MenuBtn,
    MenuIcon,
    NavIcon,
    Menu,
    MenuItem,
    Link,
} from "./styledNavbar";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const changeBackground = () => (window.scrollY >= 50) ? setNav(true) : setNav(false);
    window.addEventListener("scroll", changeBackground);

    return (
        <Nav className={nav && "active"}>
            <LogoLink href="#">
                <img src="/images/logo.png" alt="Logo" />
            </LogoLink>
            <MenuBtn type="checkbox" id="menu-btn" />
            <MenuIcon for="menu-btn">
                <NavIcon></NavIcon>
            </MenuIcon>
            <Menu>
                <MenuItem>
                    <Link href="#">Home</Link>
                </MenuItem>
                <MenuItem>
                    <Link href="#">Features</Link>
                </MenuItem>
                <MenuItem>
                    <Link href="#">About</Link>
                </MenuItem>
                <MenuItem>
                    <Link href="#">UI SS</Link>
                </MenuItem>
                <MenuItem>
                    <Link href="#">Download</Link>
                </MenuItem>
            </Menu>
        </Nav>
    );
};

export default Navbar;
