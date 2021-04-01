import styled from "styled-components";

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