import styled from "styled-components";

export const CartRowWrapper = styled.div`
    border: 1px solid #ebebeb;
    margin-bottom: 30px;
    

    @media only screen and ( min-width: 768px ) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const CartRowImageBox = styled.div`
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #ebebeb;

    @media only screen and ( min-width: 768px ) {
        width: 25%;
        border: none;
    }
`;

export const CartRowImage = styled.img`
    width: 50%;
`;

export const CartRowTitleBox = styled.div`
    width: 100%;
    margin-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid #ebebeb;
    padding: 30px;

    @media only screen and ( min-width: 768px ) {
        width: 25%;
        border: none;
    }
`;

export const CartRowTitle = styled.h3`
    font-size: 20px;
    font-weight: 450;
    color: #666;
`;

export const CartRowPriceBox = styled.div`
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #ebebeb;
    padding: 30px;

    @media only screen and ( min-width: 768px ) {
        width: 25%;
        border: none;
    }
`;


export const CartRowPrice = styled.h3`
    font-size: 20px;
    font-weight: 450;
    color: #666;
`;

export const CartRowClose = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
`;

export const CartCloseH3 = styled.h3`
    color: #666;

    @media only screen and ( min-width: 768px ) {
        display: none;
    }
`;