import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarToggleWrapper = styled.div`
    display: none;

    @media only screen and ( max-width: 1000px ) {
        display: block;
    }
`;

export const NavbarToggleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export const NavbarToggleLogo = styled.div`
    width: 150px;

    > svg {
        width: 100%;
        object-fit: contain;
    }
`;

export const NavbarToggleMenu = styled.div``;

export const NavbarToggleList = styled.ul`
    position: fixed;
    top: -100%;
    background-color: #009BDD;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    padding: 20px;
`;

export const NavbarToggleItem = styled.li`
    list-style: none;
    margin-bottom: 10px;
`;

export const NavbarToggleLink = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    color: #fff;
    font-weight: 600;
`;

export const NavbarToggleSearch = styled.input``;
