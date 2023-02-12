import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider } from "firebase/auth";
import firebaseAuthenticationApp from "../Firebase/Firebase.init";


firebaseAuthenticationApp();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const goggleProvider = new GoogleAuthProvider();
    const githuhbProvider = new GithubAuthProvider();

    const auth = getAuth();
    
    const googleSignInUsing = () => {
        signInWithPopup(auth, goggleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            }).catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }


    const githubSignInUsing = () => {
        signInWithPopup(auth, githuhbProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            }).catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }
    
    
    const logout = () => {
        signOut(auth)
        .then(result => {
            setUser({});
        })
    }


    return {
        user,
        error,
        logout,
        googleSignInUsing,
        githubSignInUsing
    }

}

export default useFirebase;