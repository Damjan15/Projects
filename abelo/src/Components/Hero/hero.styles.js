import styled from "styled-components";
import HeroCover from "../../assets/HPPavilion.png";

export const Wrapper = styled.div`
    background-color: #F7F7F7;
    width: 100%;
    height: 100%;
    padding: 20px;

    @media only screen and ( min-width: 768px ) {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`

export const HeroLeft = styled.div`
    width: 100%;

    @media only screen and ( min-width: 768px ) {
        width: 50%;
    }
`

export const HeroH1 = styled.h1`
    color: #272727;
    
    @media only screen and ( min-width: 768px ) {
        font-weight: 700px;
    }

    @media only screen and ( min-width: 1024px ) {
        font-size: 48px;
    }
`

export const HeroP = styled.p`
    color: #585858;
    margin-top: 20px;
    margin-bottom: 20px;

    @media only screen and ( min-width: 1024px ) {
        font-size: 20px;
    }
`

export const HeroBtn = styled.button`
    border: none;
    background-color: #146cda;
    display: block;
    width: 140px;
    height: 45px;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    font-family: inherit;
    border-radius: 5px;
    text-transform: uppercase;
    transition: background 0.3s ease-in-out;

    &:hover {
        background-color: #272727;
    }
`

export const HeroRight = styled.div`
    background-image: url("${HeroCover}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 60vh;

    @media only screen and ( min-width: 768px ) {
        width: 35%;
    }
`;