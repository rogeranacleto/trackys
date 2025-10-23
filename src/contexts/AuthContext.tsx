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

const AuthContext = createContext({} as AuthProps)

const AuthProvider = ({children}: ChildrenProps) => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
    return(
        <AuthContext.Provider value={{name, email, senha}}>
            {children}
        </AuthContext.Provider>
    )
}