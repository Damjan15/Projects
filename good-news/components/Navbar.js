import navbarStyles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <div className={navbarStyles.wrapper}>
            <ul className={navbarStyles.menu}>
                <li>Home</li>
                <li>Features</li>
                <li>Technology</li>
                <li>Politics</li>
            </ul>
        </div>
    )
}

export default Navbar
