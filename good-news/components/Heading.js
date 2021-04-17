import headingStyles from "../styles/Heading.module.css";
const Heading = ({ title, subtitle }) => {
    return (
        <h3 className={headingStyles.header}>{title} <span className={headingStyles.title}>{subtitle}</span></h3>
    )
}

export default Heading
