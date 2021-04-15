import styled from "styled-components";

export const RowContainer = styled.div`
    margin-top: 10px;

    @media only screen and ( min-width: 768px ) {
        margin-top: 80px;
    }
`;

export const RowH1 = styled.h1`
    font-size: 28px;
    padding-left: 20px;
    font-weight: 400;

    @media only screen and ( min-width: 768px ) {
        font-size: 35px;
    }
`;

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;


    @media only screen and ( min-width: 768px ) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 50px;
    }
`;