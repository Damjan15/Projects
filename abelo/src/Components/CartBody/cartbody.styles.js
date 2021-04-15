import styled from "styled-components";

export const CartWrapper = styled.div`
    padding: 20px;

    @media only screen and ( min-width: 768px ) {
        padding: 0;
    }
`;

export const CartContainer = styled.div`
    width: 100%;

    @media only screen and ( min-width: 768px ) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const CartTitle = styled.h2`
    font-size: 28px;
    font-weight: 400;
    margin-top: 30px;
    margin-bottom: 30px;

    @media only screen and ( min-width: 768px ) {
        font-size: 35px;
    }
`;

export const CartButtons = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    @media only screen and ( min-width: 768px ) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const CartBtn = styled.button`
    margin-bottom: 10px;
    border: none;
    background-color: ${({ selected }) => selected ? "#266cfb" : "#f2f2f2"};
    color: ${({ selected }) => selected ? "#fff" : "#1d1d1d"};
    width: 200px;
    height: 45px;
    font-weight: 400;
    font-size: 14px;
    font-family: inherit;
    border-radius: 5px;
    text-transform: uppercase;
    transition: background 0.3s ease-in-out;
`;