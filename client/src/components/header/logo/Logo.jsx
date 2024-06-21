import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <div className="">
            <Link to={'/'}> <h3 className="text-2xl font-bold text-white "><span className="text-7xl">P</span>LAY <span className="text-7xl text-main-color">P</span><span className="text-main-color">LEX</span></h3></Link>
          
        </div>
    );
};

export default Logo;