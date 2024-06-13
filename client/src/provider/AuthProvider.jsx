import { createContext } from "react";
import auth from "../firebase/firebase.config";

const AuthContext = createContext(null)


const AuthProvider = () => {

    const authInfo = {}
    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;