import styled from "styled-components";

export const BodyWrapper = styled.div`
    padding: 20px;

    @media only screen and ( min-width: 1024px ) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;


export const BodyLeft = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and ( min-width: 1024px ) {
        width: 35%;
    }
`;

export const ProductImage = styled.img`
    width: 100%;
`;

export const BodyRight = styled.div`
    border: 1px solid #ebebeb;
    padding: 15px;

    @media only screen and ( min-width: 1024px ) {
        width: 50%;
    }
`;

export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 28px;
`;

export const ProductRatings = styled.span`
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;

    > svg {
        color: yellow;
    }
`;

export const ProductPrice = styled.p`
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 10px;

`;

export const ProductDescription = styled.p`
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #777;
    font-weight: 400;
`;

export const ProductBtn = styled.button`
    border: none;
    background-color: #146cda;
    display: block;
    width: 140px;
    height: 45px;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    font-family: inherit;
    border-radius: 5px;
    text-transform: uppercase;
    transition: background 0.3s ease-in-out;
    margin-top: 15px;

    &:hover {
        background-color: #272727;

    }
`;
