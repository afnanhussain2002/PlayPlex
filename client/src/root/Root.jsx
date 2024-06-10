import { Outlet } from "react-router-dom";
import Header from "../components/header/header/Header";
import Footer from "../components/footer/Footer";

const Root = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Root;