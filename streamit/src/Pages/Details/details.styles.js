import styled from "styled-components";

export const DetailsWrapper = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 50px;
    height: 90vh;

    &::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }


    @media only screen and ( max-width: 600px ) {
        height: 100%;
        padding: 20px;

    }
`;

export const DetailsLeft = styled.div`
    position: relative;
    z-index: 2;
    width: 20%;


    @media only screen and ( max-width: 600px ) {
        width: 100%;
    }
`;

export const DetailsImage = styled.img`
    width: 100%;
`;

export const DetailsRight = styled.div`
    width: 70%;
    position: relative;
    z-index: 2;
    color: #fff;

    @media only screen and ( max-width: 600px ) {
        width: 100%;
    }
`;

export const DetailsH1 = styled.h1`
    font-size: 40px;

    @media only screen and ( max-width: 600px ) {
        font-size: 35px;
    }
`;

export const DetailsRating = styled.span`
    background-color: blue;
    padding: 10px;
    width: 43px;
    border-radius: 50px;
    margin-top: 10px;
    margin-bottom: 12px;
    display: block;
    font-size: 15px;
`;

export const DetailsH3 = styled.h3`
    margin-bottom: 10px;
    font-weight: 450;
`;
