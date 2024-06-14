import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {

    // create a user 
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth,email, password)
    }

    // sign user with google
    const google = () =>{
        return signInWithPopup(googleProvider)
    }


    const authInfo = {createUser, loginUser, google}
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;