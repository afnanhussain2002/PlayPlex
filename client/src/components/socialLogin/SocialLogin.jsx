import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {google} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
  const from = location.state?.from?.pathname || "/";

    const handleGoogleSign = () =>{
        google()
        .then(res =>{
            console.log(res.user);
            navigate(from, {replace:true})

        })
        .catch(error =>{
            console.log(error);
        })
    }
  return (
    <div>
      <button onClick={handleGoogleSign} className="flex items-center border-4 border-main-color shadow-lg shadow-green-500/50 justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
        <img
          className="h-5 mr-2"
          src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
          alt=""
        />
        Sign in with Google
      </button>
    </div>
  );
};

export default SocialLogin;
