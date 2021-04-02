import styled from "styled-components";


export const PosterImage = styled.img`
    width: 100%;
`;

export const PosterInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem 1rem;
`;

export const PosterH3 = styled.h3`
    font-weight: 450;
`;

export const PosterSpan = styled.span`
    font-weight: 550;
    color: #C32323;
`;

export const PosterOverview = styled.div`
    background-color: #fff;
    padding: 2rem;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    max-height: 100%;
    transform: translateY(101%);
    transition: transform 0.3s ease;
`;


export const PosterWrapper = styled.div`
    width: 300px;
    margin: 1rem;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    border-radius: 3px;
    -webkit-box-shadow: 5px 5px 17px -1px rgba(0,0,0,0.4); 
    box-shadow: 5px 5px 17px -1px rgba(0,0,0,0.4);

    &:hover ${PosterOverview} {
        transform: translateY(0);
    }
`;