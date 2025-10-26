import { useContext } from "react"
import { AuthContext } from "@/contexts/AuthContext"
import { Outlet, Navigate } from "react-router";
export function PrivateRoute(){
const { loading, loginAuth} = useContext(AuthContext);
    if(loading){
        return null
    }
    return loginAuth ? <Outlet/> : <Navigate to={"/login"}/>
}