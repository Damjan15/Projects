import styled from "styled-components";

export const TotalContainer = styled.div`
    width: 100%;
    background-color: #f9f9f9;
    border: 1px solid #ebebeb;
    padding: 20px;
    margin-top: 30px;

    @media only screen and ( min-width: 768px ) {
        width: 50%;
    }
`;

export const TotalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TotalTitle = styled.span`
    color: #266cfb;
    font-size: 20px;
    font-weight: 700;
`;

export const TotalPrice = styled.span`
    color: #266cfb;
    font-size: 20px;
    font-weight: 700;
`;

export const TotalButton = styled.button`
    display: block;
    background: #266cfb;
    border: none;
    color: #fff;
    width: 200px;
    height: 40px;
    font-weight: 400;
    font-size: 12px;
    font-family: inherit;
    border-radius: 5px;
    text-transform: uppercase;
    transition: background 0.3s ease-in-out;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
`;