

const VideoBanner = ({videoLink}) => {
    return (
        <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden border-b-8 border-main-color">
        <div className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
            Welcome to my site!
        </div>
        <iframe
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            src={"https://www.youtube.com/embed/lYtJUlx7mak?si=qugjcRZMNOhdbKSW"}
            allowFullScreen
        ></iframe>
    </header>
    );
};

export default VideoBanner;