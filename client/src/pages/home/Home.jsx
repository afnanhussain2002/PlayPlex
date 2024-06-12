import AboutUsSection from "../../components/aboutUsSection/AboutUsSection";
import ActiveTeam from "../../components/activeTeam/ActiveTeam";
import HomeHeroSection from "../../components/homeHeroSection/HomeHeroSection";
import Products from "../../components/products/Products";


const Home = () => {
    return (
        <>
            <HomeHeroSection/>
            <Products/>
            <AboutUsSection/>
            <ActiveTeam/>
        </>
    );
};

export default Home;