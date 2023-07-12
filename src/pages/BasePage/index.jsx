import { Outlet } from "react-router-dom";
import NavbarSite from "../../components/NavbarSite";

const BasePage = () => {
    return (
        <>
            <NavbarSite />
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default BasePage;