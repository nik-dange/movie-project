import * as React from "react"
import { auth } from "../config/firebase-config";

export const firebaseAuthContext = React.createContext();
const FirebaseAuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const value = { user };

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(setUser);
        return unsubscribe;
    }, [])

    return (
        <firebaseAuthContext.Provider value={value}>
            {children}
        </firebaseAuthContext.Provider>
    )
}

export default FirebaseAuthProvider