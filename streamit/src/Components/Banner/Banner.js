import { BannerH1, BannerOverlay, BannerWrapper } from "./banner.styles"

const Banner = ({ title }) => {
    return (
        <BannerWrapper>
            <BannerOverlay>
                <BannerH1>{title}</BannerH1>
            </BannerOverlay>
        </BannerWrapper>
    )
}
export default Banner;