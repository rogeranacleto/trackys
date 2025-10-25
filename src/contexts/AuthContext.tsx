import { createContext, type ReactNode } from "react";
import { useState } from "react";
import { useEffect } from "react";

interface AuthProps {
    name: string;
    email: string
    senha: string
}

interface ChildrenProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthProps)

const AuthProvider = ({children}: ChildrenProps) => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [loginAuth, setLoginAuth] = useState(false)

useEffect(() => {
    const auth = localStorage.getItem("auth") === "true";
    setLoginAuth(auth)

},[])
const login = () => {
    
}

const logout = () => {
    //aqui a lógica de logout do sistema
}
    return(
        <AuthContext.Provider value={{name, email, senha}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }