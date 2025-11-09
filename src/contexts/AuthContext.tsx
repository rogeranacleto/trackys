import { createContext, type ReactNode } from "react";
import { useState } from "react";
import { useEffect } from "react";

interface AuthProps {
    userLoginDetail: {};
    loginAuth: boolean;
    loading: boolean;
    login: (details: {}) => void;
    logout: () => void;
}

interface ChildrenProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthProps)

const AuthProvider = ({children}: ChildrenProps) => {
const [userLoginDetail, setUserLoginDetail] = useState({});
const [loginAuth, setLoginAuth] = useState(false);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const auth = localStorage.getItem("auth") === "true";
    setLoginAuth(auth)
    setLoading(false)

},[])
const login = (details: {}) => {
    localStorage.setItem("auth", "true")
    setUserLoginDetail(details)
    setLoginAuth(true)
}

const logout = () => {
    setUserLoginDetail({});
    setLoginAuth(false);
}
    return(
        <AuthContext.Provider value={{userLoginDetail, loginAuth, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }