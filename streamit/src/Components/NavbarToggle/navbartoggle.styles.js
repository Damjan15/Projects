import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarToggleContainer = styled.div`
    position: fixed;
    background-color: #009bdd;
    z-index: 20;
    width: 100%;
    height: 100%;
    top: ${({ isOpen }) => ( isOpen ? "0" : "-100%")};
    left: 0;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    transition: 0.4s ease-in all;
`;

export const Icon = styled.div`
    width: 20%;
    position: absolute;
    right: 10px;
    top: 10px;
    text-align: right;

    > svg {
        font-size: 35px;
    }
`;

export const NavbarToggleWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 `;

export const NavbarToggleMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const NavbarToggleLink = styled(Link)`
    font-size: 25px;
    margin-bottom: 20px;
    text-decoration: none;
    color: #fff;
`;

export const NavbarToggleForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const NavbarToggleInput = styled.input`
    padding: 15px;
    border-radius: 50px;
    border: none;
    font-size: 16px;
    font-family: inherit;

    &:focus {
        outline: none;
    }
`;

export const NavbarBtn = styled.button`
    border: none;
    margin-top: 15px;
    padding: 15px;
    border-radius: 8px;
    font-size: 18px;
    background-color: #fff;
    color: #009bdd;
    font-family: inherit;

    &:focus {
        outline: none;
    }
`;
