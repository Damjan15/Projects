import headingStyles from "../styles/Heading.module.css";
const Heading = () => {
    return (
        <h3 className={headingStyles.header}>Heading <span className={headingStyles.title}>Title</span></h3>
    )
}

export default Heading
