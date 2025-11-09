import { HeaderHome } from "../../components/HeaderHome";
import logoTrackys from "../../assets/logo-trackys-2.png"
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
export function NotFound(){
    return(
        <div>
            <HeaderHome/>
            <div className="max-w-screen min-h-screen flex justify-center">
                <div className="max-w-2xl w-full h-[420px] mt-45 text-center flex justify-center flex-col items-center">
                    <h1 className="text-[#ffffffcb] flex items-center text-center mb-3">
                        <span className="text-8xl">4</span> <img src={logoTrackys} alt="Logo Trackys" className="w-[90px]"/><span className="text-8xl">4</span>               
                    </h1>
                    <p className="text-white text-4xl mb-8">Ops, página não encontrada!</p>
                    <Link to={"/"}>
                        <Button className="max-w-lg w-full m-auto bg-[#dedede88] cursor pointer text-[#000] hover:bg-[#dedede] pl-3.5 pr-3.5 pt-1 pb-1 duration-400 ease-in-out cursor-pointer text-lg">Página inicial</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}