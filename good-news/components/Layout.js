import Footer from "./Footer"
import Header from "./Header"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Navbar />
                <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
