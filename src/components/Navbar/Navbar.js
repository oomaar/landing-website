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
    return (
        <Nav>
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
