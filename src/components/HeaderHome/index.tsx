import { Link } from "react-router"
import logo from "../../assets/logo-trackys-2.png"
import { Button } from "../ui/button"
export function HeaderHome(){

    return(
        
            <header className="flex justify-center p-5 absolute top-0 left-0 w-full bg-black/0.2 backdrop-blur-md z-50">
                <div className="flex items-center max-w-6xl w-full justify-between mt-4">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo Trackys" className="w-6"/>
                        <Link to={"/"}>
                            <p className="text-[#DEDEDE] text-2xl font-bold">trackys</p>
                        </Link>
                    </div>
                    <div className="flex items-center gap-8">
                        <Link to={"login"}>
                            <button className="text-[#DEDEDE] font-bold text-lg cursor-pointer hover:scale-110 duration-400 ease-in-out ">Entrar</button>
                        </Link>
                        <Link to={"/signup"}>
                            <Button className="cursor-pointer text-[#000] text-lg pl-3.5 pr-3.5 pt-1 pb-1 bg-[#dedede88] hover:bg-[#DEDEDE] duration-400 ease-in-out">Crie sua conta</Button>
                        </Link>
                    </div>
                </div>
            </header>
    )
}