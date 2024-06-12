import { Outlet } from "react-router-dom";
import Header from "../components/header/header/Header";
import Footer from "../components/footer/Footer";

const Root = () => {
    return (
        <>
            <Header/>
            <div className="min-h-screen">
            <Outlet/>

            </div>
            <Footer/>
        </>
    );
};

export default Root;