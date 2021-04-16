import { HeroBtn, HeroH1, HeroLeft, HeroP, HeroRight, Wrapper } from "./hero.styles"

const Hero = () => {
    return (
        <Wrapper>
            <HeroLeft>
                <HeroH1>HP Pavilion</HeroH1>
                <HeroP>The most beautiful gaming exeperience</HeroP>
                <HeroBtn>Shop Now</HeroBtn>
            </HeroLeft>

            <HeroRight></HeroRight>
        </Wrapper>
    )
}

export default Hero
