import { FaRegEdit } from "react-icons/fa";

const HeaderBtn = () => {
    return (
        <>
           <button className="bg-transparent border-2 flex items-center border-main-color px-2 py-1 rounded-bl-xl rounded-tr-xl text-white font-bold hover:bg-main-color hover:text-black"><span><FaRegEdit/></span> -Sing in</button> 
        </>
    );
};

export default HeaderBtn;