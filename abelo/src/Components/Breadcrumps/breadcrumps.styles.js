import styled from "styled-components";

export const BreadcrumpsWrapper = styled.div`
    background-color: #f3f3f3;
    display: flex;
    align-items: center;
    padding: 25px;

    > svg {
        color: #2b2d2f;
        margin-right: 10px;
        margin-left: 10px
    }
`;

export const BreadLink = styled.a`
    color: ${({ selected}) => (selected ? "#266cfb" : "#2b2d2f")};

`;