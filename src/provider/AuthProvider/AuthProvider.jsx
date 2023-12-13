/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const singIn = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSingIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

/*  useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }  


            setUser(currentUser)
            console.log('current user', currentUser);
            setLoading(false)
            if (currentUser) {
                axios.post('https://collab-learn-backend.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
            else {
                axios.post('https://collab-learn-backend.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        });
        return () => {
            unSubscribe();
        }
    }, []) 
    
    */

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state', currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])
    
 



    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        googleSingIn,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;