import styled from "styled-components";
import Background from "../../assets/background.jpg";

export const BannerWrapper = styled.div`
    background: url(${Background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 50vh;
    position: relative;
`;

export const BannerOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(3,37,65, 0.7);
    width: 100%;
    height: 50vh;
`;

export const BannerH1 = styled.h1`
    position: absolute;
    z-index: 2;
    color: #fff;
    top: 50%;
    bottom: 50%;
    left: 20px;
    font-size: 55px;
    font-weight: 450;
`;