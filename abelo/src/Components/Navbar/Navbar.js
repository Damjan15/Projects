import { useState } from "react";
import Logo from "../../assets/logo.jpg";
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart, AiFillTwitterCircle, AiFillGoogleCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { Nav, NavLogo, NavContainer, NavImage, NavMenu, DrawerHeader, DrawerMenu, DrawerFooter, DrawerItem, DrawerContainer, NavList, NavItem, NavLink, NavContent,  NavSpan, NavTitle, NavCartContainer } from "./navbar.styles";



const Navbar = () => {
    const [ toggle, setToggle ] = useState(false);

    const toggleMenu = () => {
        setToggle(!toggle);
    }


    return (
        <Nav>
            <NavContainer>
                <NavImage>
                    <NavLogo src={Logo} />
                </NavImage>

                <NavMenu>
                    <FiMenu onClick={toggleMenu}/>
                </NavMenu>

                <DrawerContainer anchor="left" open={toggle} onClose={toggleMenu}>

                    <DrawerHeader>
                        <GrClose />
                    </DrawerHeader>

                    <DrawerMenu>
                        <DrawerItem>Home</DrawerItem>
                        <DrawerItem>New Arrivals</DrawerItem>
                        <DrawerItem>Categories</DrawerItem>
                        <DrawerItem>Best Sellers</DrawerItem>
                        <DrawerItem>
                            My Cart
                            <AiOutlineShoppingCart />
                        </DrawerItem>
                    </DrawerMenu>

                    <DrawerFooter>
                        <FaFacebook />
                        <AiFillTwitterCircle />
                        <AiFillGoogleCircle />
                        <AiFillYoutube />
                        <AiFillInstagram />
                    </DrawerFooter>
                </DrawerContainer>

                <NavList>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/">New Arrivals</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/">Categories</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/">Best Sellers</NavLink>
                    </NavItem>
                </NavList>

                <NavCartContainer>
                    <AiOutlineShoppingCart />

                    <NavContent>
                        <NavSpan>0</NavSpan>
                        <NavTitle>My cart</NavTitle>
                    </NavContent>
                </NavCartContainer>


            </NavContainer>
        </Nav>
    )
}

export default Navbar
