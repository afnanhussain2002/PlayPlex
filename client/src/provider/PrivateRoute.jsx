import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation} from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    

    if (loading) {
        return <div className="grid h-screen place-items-center">
            <span className="loading loading-spinner text-success"></span>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
    
};

export default PrivateRoute;