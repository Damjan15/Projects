import Logo from "../../assets/logo.jpg";
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Nav, NavBox, NavCart, NavContainer, NavHamburger, NavItem, NavLink, NavLogo, NavMenu, NavTotal, Span, SpanTotal } from "./navbar.styles"

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo>
                    <img src={Logo} alt=""/>
                </NavLogo>


                <NavHamburger>
                    <FiMenu />
                </NavHamburger>
            </NavContainer>

            <NavMenu>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/">Categories</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/">New Arrivals</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/">Featured Products</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/">Best Sellers</NavLink>
                </NavItem>
            </NavMenu>


            <NavCart>
                <NavBox>
                    <AiOutlineShoppingCart />
                </NavBox>

                <NavTotal>
                    <SpanTotal>0</SpanTotal>
                    <Span>My cart</Span>
                </NavTotal>
            </NavCart>
        </Nav>
    )
}

export default Navbar
