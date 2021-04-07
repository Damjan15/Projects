import Sidebar from "../Components/Sidebar/Sidebar";
import "./layout.css";

export const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Sidebar />
            <main className="main">{children}</main>
        </div>
    )
}
