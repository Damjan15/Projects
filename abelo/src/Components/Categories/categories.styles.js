import styled from "styled-components";

export const CategoriesContainer = styled.div`
    text-align: center;

    @media only screen and ( min-width: 1024px ) {
        margin-top: 40px;
    }
`;

export const CategoriesH1 = styled.h1`
    font-weight: 400;
    font-size: 28px;

    @media only screen and ( min-width: 1024px ) {
        font-size: 35px;
    }
`;

export const CategoriesMenu = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-left: 0;
    list-style: none;
    margin-bottom: 20px;
    margin-top: 20px;

    @media only screen and ( min-width: 768px ) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;
    }
`;

export const CategoriesItems = styled.li`
    font-size: 18px;
    margin-bottom: 10px;
    color: #585858;
    transition: color .3s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #266cfb;
        font-weight: 600;
    }

    @media only screen and ( min-width: 768px ) {
        margin-right: 45px;
    }

    @media only screen and ( min-width: 1024px ) {
        font-size: 25px;
    }
`;

export const CategoriesBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and ( min-width: 768px ) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }

`;