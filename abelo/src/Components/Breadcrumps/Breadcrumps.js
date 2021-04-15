import { IoIosArrowForward } from "react-icons/io";
import { BreadcrumpsWrapper, BreadLink } from "./breadcrumps.styles";
const Breadcrumps = () => {
    return (
        <BreadcrumpsWrapper>
            <BreadLink href="/">Home</BreadLink>
            <IoIosArrowForward />
            <BreadLink href="/" selected>Product Name</BreadLink>
        </BreadcrumpsWrapper>
    )
}

export default Breadcrumps
