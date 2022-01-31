import { createContext } from "react"
import useFirebase from "../hooks/useFirebase"


// Creating Auth Context
export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    // Firebase State
    const allContext = useFirebase()

    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
