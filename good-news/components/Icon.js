import iconStyles from "../styles/Icon.module.css";

const Icon = ({ Icon }) => {
    return (
        <a href="/" className={iconStyles.wrapper}>
            <Icon />   
        </a>
    )
}

export default Icon
