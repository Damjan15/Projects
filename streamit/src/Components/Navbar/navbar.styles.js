import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    position: relative;

    @media only screen and ( max-width: 960px ) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavbarLogo = styled(Link)`
    width: 15%;

    > img {
        width: 100%;
    }

    @media only screen and ( max-width: 1000px ) {
        width: 50%;
    }
`;


export const MobileIcon = styled.div`
    display: none;
    width: 20%;
    position: absolute;
    right: 0;

    @media only screen and ( max-width: 1000px ) {
        display: block;
    }
`;
export const NavbarMenu = styled.ul`
    display: flex;
    justify-content: center;
    width: 60%;

    @media only screen and ( max-width: 1000px ) {
        display: none;
    }
`;

export const NavbarItem = styled.li`
    list-style: none;
    margin-right: 80px;
`;

export const NavbarLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 20px;

    &:hover {
        transition: 0.5s ease-in-out;
        color: #009bdd;
    }
`;

export const NavbarForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E8E8E8;
    padding: 12px;
    border-radius: 30px;
    margin-right: 30px;

    > button {
        display: none;
    }

    @media only screen and ( max-width: 1000px ) {
        display: none;
    }
`;

export const NavbarInput = styled.input`
    border: none;
    background: transparent;
    font-family: inherit;

    &:focus {
        outline: none;
    }
`;
