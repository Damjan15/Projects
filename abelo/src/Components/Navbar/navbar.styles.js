import styled from "styled-components";
import Drawer from '@material-ui/core/Drawer'

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
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* justify-content: space-between; */
`;

export const NavImage = styled.div`
    width: 50%;

    @media only screen and ( min-width: 768px ) {
        width: 20%;
    }

    @media only screen and ( min-width: 1024px ) {
        width: 10%;
    }
`;

export const NavLogo = styled.img`
    width: 100%;
`;

export const NavMenu = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;

    > svg {
        font-size: 25px;
    }

    @media only screen and ( min-width: 768px ) {
        display: none;
        visibility: hidden;
    }
`;

export const DrawerContainer = styled(Drawer)`
    display: flex;
    flex-direction: column;
    
    > .MuiDrawer-paper {
        padding: 20px !important;
    }

    @media only screen and ( min-width: 768px ) {
        display: none;
        visibility: hidden;
    }
`;

export const DrawerHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #eee;

    > svg {
        margin-bottom: 15px;
    }
`;

export const DrawerMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 30px;
`;

export const DrawerItem = styled.a`
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 30px;
    color: #7e7e7e;
    font-weight: 450;
    display: flex;
    align-items: center;

    > svg {
        font-size: 25px;
        margin-left: 10px;
    }
`;

export const DrawerFooter = styled.div`
    > svg { 
        margin-right: 10px;
        font-size: 25px;
        color: #247cea;
    }
`;

export const NavList = styled.ul`
    display: none;

    @media only screen and ( min-width: 768px ) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 0;
    }
`;

export const NavItem = styled.li`
    list-style: none;
    font-size: 15px;
    margin-right: 30px;

    @media only screen and ( min-width: 768px ) {
        font-size: 20px;
    }
`;

export const NavLink = styled.a`
    color: #272727;
    transition: all .3s ease-in-out;

    &:hover {
        color: #146cda;
    }
`;

export const NavContent = styled.div``;

export const NavSpan = styled.span`
    background-color: #146cda;
    padding: 2px;
    border-radius: 30px;
    font-size: 14px;
    display: block;
    width: 19px;
    font-size: 11px;
    color: #fff;
    text-align: center;
`;

export const NavTitle = styled.p`

    @media only screen and ( min-width: 768px ) {
        color: #999;
        font-size: 13px;
    }

    @media only screen and ( min-width: 1024px ) {
        font-size: 18px;
    }
`;

export const NavCartContainer = styled.div`
    display: none;
    cursor: pointer;
    > svg {
        font-size: 28px;
        margin-right: 10px;
        color: #999;
    }

    @media only screen and ( min-width: 768px ) {
        display: flex;
        align-items: center;
    }

    @media only screen and ( min-width: 1024px ) {
        > svg {
            font-size: 32px;
        }
    }

    &:hover ${NavTitle} {
        color: #146cda;
        transition: all .3s ease-in-out;
    }

    &:hover > svg {
        color: #146cda;
        transition: all .3s ease-in-out;
    }
`;