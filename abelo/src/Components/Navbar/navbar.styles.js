import styled from "styled-components";

export const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    /* box-shadow: 0px 0px 32px 5px rgba(0,0,0,0.26);
    -webkit-box-shadow: 0px 0px 32px 5px rgba(0,0,0,0.26);
    -moz-box-shadow: 0px 0px 32px 5px rgba(0,0,0,0.26); */

`;

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > svg {
        display: none;
        font-size: 28px;
    }

    @media only screen and ( max-width: 680px ) {
        > svg {
            display: block;
        }
    }
`;

export const NavLogo = styled.div`
    width: 50%;

    > img {
        width: 100%;
    }
`;

export const NavHamburger = styled.div`
    width: 50%;
`;

export const NavMenu = styled.ul`
    display: flex;

    @media only screen and ( max-width: 680px ) {
        display: none;
    }
`;

export const NavItem = styled.li`
    list-style: none;
    margin-right: 35px;
    font-size: 16px;
    font-weight: 400;
`;

export const NavLink = styled.a`
    color: #272727;
`;

export const NavTotal = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SpanTotal = styled.span`
    background-color: #266CFB;
    text-align: center;
    display: block;
    width: 20px;
    border-radius: 99px;
    padding: 2px;
    color: #fff;
    font-size: 11px;
`;

export const Span = styled.span`
    color: #999;
    font-size: 13px;
`;

export const NavBox = styled.div`
    padding-right: 10px;

    > svg {
        font-size: 28px;
        color: #999;
    }
`;

export const NavCart = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover ${NavBox} > svg {
        cursor: pointer;
        color: #007bff;
        transition: all .3s ease-in-out;
    }

    &:hover ${Span} {
        color: #007bff;
        transition: all .3s ease-in-out;
    }

    @media only screen and ( max-width: 680px ) {
        display: none;
    }
`;

