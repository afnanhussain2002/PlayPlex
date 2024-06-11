import { Link } from "react-router-dom";


const YellowButton = ({link, text, icon}) => {
    return (
        <>
            <Link to={link}>
          <button className="bg-transparent border-2 flex items-center border-three-color px-2 py-1 rounded-bl-xl rounded-tr-xl text-white font-bold hover:bg-three-color hover:text-black"><span>{icon}</span>{text}</button>
          </Link>  
        </>
    );
};

export default YellowButton;