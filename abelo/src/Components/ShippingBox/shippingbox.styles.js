import styled from "styled-components";

export const BoxWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 30px;

    @media only screen and ( min-width: 768px ) {
        padding: 10px;
    }

    @media only screen and ( min-width: 1024px ) {
        padding: 30px;
    }
    
`;

export const BoxIcon = styled.div`
    margin-right: 20px;

    > svg {
        font-size: 30px;
    }
`;

export const BoxContent = styled.div``;

export const BoxH3 = styled.h3`
    color: #272727;
    font-size: 14px;

`;

export const BoxP = styled.p`
    color: #9d9c9c;
    font-weight: 300;
`;