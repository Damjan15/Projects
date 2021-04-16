import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 80%;
    padding: 20px;
    border: 1px solid #EEE;
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.35);
    -webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.35);
    -moz-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.35);
    border-radius: 6px;
    margin-bottom: 40px;
    


    @media only screen and ( min-width: 768px ) {
        width: 45%;
    }

    @media only screen and ( min-width: 1024px ) {
        width: 30%;
    }

    @media only screen and ( min-width: 1280px ) {
        width: 20%;
    }

    @media only screen and ( min-width: 1536px ) {
        width: 18%;
    }
`;

export const CardThumbnail = styled.div`
    width: 100%;
`;

export const CardImage = styled.img`
    width: 100%;
`;

export const CardContent = styled.div`
    text-align: center;
`;

export const CardH3 = styled.h3`
    font-weight: 400;
`;

export const CardDescription = styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 14px;
    color: #9d9c9c;
`;

export const CardP = styled.p`
    margin-bottom: 15px;
    margin-top: 15px;
    font-weight: 600;
    font-size: 16px;
`;

export const CardBtn = styled.button`
    background: #266cfb;
    border: none;
    padding: 10px 30px;
    font-family: inherit;
    text-transform: uppercase;
    color: #fff;
    border-radius: 5px;
    transition: background 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #272727;
    }
`;