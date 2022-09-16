import React from 'react'
import { Link } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
import { auth } from '../config/firebase-config';
import 'firebase/compat/auth'
import { signInWithPopup } from 'firebase/auth';
import firebase from "firebase/compat/app"


const Navbar = () => {
    const user = useAuthContext();
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

    const loginWithGoogle = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then((userCred) => {
                if (userCred) {
                    console.log(userCred);
                }
                else {
                    console.log("Auth issue")
                }
            })
    }

    const signOut = () => {
        auth.signOut();
    }


    return (
        <header>
            <div className='container'>
                <Link to='/'>
                    <h1>Movie reviews</h1>
                </Link>
                {user ? (
                    <span className='sign-out' onClick={signOut}>Sign Out</span>
                ) : (
                    <span className='sign-out' onClick={loginWithGoogle}>Sign in</span>
                )}
            </div>
        </header>
    )
}

export default Navbar