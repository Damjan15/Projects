import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;

    @media only screen and ( max-width: 1000px ) {
        display: none;
    }
`;

export const NavbarLogo = styled.div`
    width: 20%;

    > a > svg {
        width: 100%;
        object-fit: contain;
    }
`;

export const NavbarCenter = styled.ul`
    display: flex;
    justify-content: center;
    width: 60%;
`;

export const NavbarItem = styled.li`
    list-style: none;
    margin-right: 40px;
`;

export const NavbarLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 20px;
`;

export const NavbarRight = styled.div`
    width: 20%;
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
`;

export const NavbarInput = styled.input`
    border: none;
    background: transparent;
    font-family: inherit;

    &:focus {
        outline: none;
    }
`;
