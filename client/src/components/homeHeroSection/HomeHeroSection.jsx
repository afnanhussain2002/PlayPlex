import HeaderBtn from "../buttons/headerBtn/HeaderBtn";


const HomeHeroSection = () => {
    return (
        <section className="bg-[url('https://themedox.com/mykd/wp-content/uploads/2023/10/slider_bg.jpg')] bg-cover bg-center border-b-8 border-main-color min-h-[600px] flex flex-col justify-center gap-10 items-center py-10 lg:flex-row lg:gap-32 lg:min-h-[800px]">
            <div className="mt-16 lg:mt-0">
                <h3 className="text-main-color font-bold text-xl bg-main-color p-1 bg-opacity-40 w-40 rounded-lg">Game On! </h3>
                <h5 className="text-5xl text-white font-bold shadow-3xl lg:text-8xl">PlayPlex -</h5>
                <p className="text-white text-xl font-bold mt-4">Your Gateway to Endless Worlds of Fun</p>
                <div className="mt-4">

                <HeaderBtn link={'/'} text={'Contact Us'}/>
                </div>
            </div>
            <div>
                <img className="w-96" src="https://i.ibb.co/g7WLRsL/slider-img01.png" alt="Hero image" />
            </div>
        </section>
    );
};

export default HomeHeroSection;