import styled from "styled-components";


export const PosterLargeImage = styled.img`
    width: 100%;
    height: 250px;
    border-radius: 8px;
    overflow: hidden;

`;

export const PosterLargeOverview = styled.div`
    background-color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 20px;
    transition: opacity 0.3s ease;
    opacity: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const PosterLargeTitle = styled.h3``;

export const PosterLargeWrapper = styled.div`
    width: 400px;
    height: 250px;
    border-radius: 10px;
    position: relative;
    margin-right: 20px;
    margin-bottom: 20px;
    -webkit-box-shadow: 5px 5px 17px -1px rgba(0,0,0,0.4); 
    box-shadow: 5px 5px 17px -1px rgba(0,0,0,0.4);

    &:hover ${PosterLargeOverview} {
        opacity: 1;
    } 

    @media only screen and ( max-width: 770px ) {
        width: 100%;
    }
`;


