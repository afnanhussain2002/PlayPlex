import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    // create a user 
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }

    // sign user with google
    const google = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // logout user 
    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // Track the user

    useEffect(() =>{
       const unSubscribe = onAuthStateChanged( auth, currentUser =>{
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)
        })

        return () =>{
            unSubscribe()
        }


    },[])


    const authInfo = {user, loading, createUser, loginUser, google, logout}
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;