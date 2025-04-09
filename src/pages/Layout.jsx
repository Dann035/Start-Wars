import { Outlet , useLocation} from "react-router-dom/dist";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/Header/Navbar";
import { Footer } from "../components/Footer/Footer";
import Login from "./Login/Login";

export const Layout = () => {
    const location = useLocation();

    const isLoginPage = location.pathname === "/";

    return (
        <ScrollToTop>
            {!isLoginPage && <Navbar />}
            <Outlet />
            {!isLoginPage && <Footer />}
        </ScrollToTop>
    );
};
