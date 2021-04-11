import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CompanyLogo1 from "../../assets/c-logo-1.png"
import CompanyLogo2 from "../../assets/c-logo-2.png"
import CompanyLogo3 from "../../assets/c-logo-3.png"
import CompanyLogo4 from "../../assets/c-logo-4.png"
import CompanyLogo5 from "../../assets/c-logo-5.png"
import "./companies.css"

const Companies = () => {
    return (
        <div className="companies">
            <img src={CompanyLogo1} alt=""/>
            <img src={CompanyLogo2} alt=""/>
            <img src={CompanyLogo3} alt=""/>
            <img src={CompanyLogo4} alt=""/>
            <img src={CompanyLogo5} alt=""/>
        </div>
    )
}

export default Companies
