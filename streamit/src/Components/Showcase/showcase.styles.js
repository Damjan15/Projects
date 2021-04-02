import styled from "styled-components";

export const ShowcaseWrapper = styled.div`
    margin-top: 80px;
`;

export const ShowcaseH1 = styled.h1`
    font-weight: 450;
    margin-left: 50px;
    margin-bottom: 20px;

    @media only screen and ( max-width: 768px ) {
        margin-left: 10px;
    }
`;

export const ShowcaseBody = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media only screen and ( max-width: 770px ) {
        justify-content: flex-start;
    }
`;