import { Link } from "react-router"
import logo from "../../assets/logo-trackys-2.png"
export function HeaderHome(){

    return(
            <header className="flex justify-center p-5 absolute top-0 left-0 w-full bg-black/0.2 backdrop-blur-md z-50">
                <div className="flex items-center max-w-6xl w-full justify-between mt-4">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo Trackys" className="w-6"/>
                        <Link to={"/"}>
                            <p className="text-[#a6ff00] text-2xl">trackys</p>
                        </Link>
                    </div>
                    <div className="flex items-center gap-8">
                        <Link to={"login"}>
                            <button className="text-[#a6ff00af] text-lg cursor-pointer hover:text-[#a6ff00] hover:scale-110 duration-700 ease-in-out ">Entrar</button>
                        </Link>
                        <Link to={"/signup"}>
                            <button className=" cursor-pointer text-[#a6ff00] text-lg border border-solid border-[#a6ff00 pl-3.5 pr-3.5 pt-1 pb-1 hover:bg-[#a6ff00] hover:text-[#000] duration-700 ease-in-out">Crie sua conta</button>
                        </Link>
                    </div>
                </div>
            </header>
    )
}