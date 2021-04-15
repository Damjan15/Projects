import { HeroBtn, HeroH1, HeroLeft, HeroP, HeroRight, Wrapper } from "./hero.styles"

const Hero = () => {
    return (
        <Wrapper>
            <HeroLeft>
                <HeroH1>Bobvr Z4 Virtual Reality 3D Glasses</HeroH1>
                <HeroP>Virtual Reality Through A New Lens</HeroP>
                <HeroBtn>Shop Now</HeroBtn>
            </HeroLeft>

            <HeroRight></HeroRight>
        </Wrapper>
    )
}

export default Hero
