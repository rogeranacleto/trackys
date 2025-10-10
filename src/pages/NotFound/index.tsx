import { HeaderHome } from "../../components/HeaderHome";
import logoTrackys from "../../assets/logo-trackys-2.png"
import { Link } from "react-router";
import logoCursor from "../../assets/logo-mouse-trackys.png"
export function NotFound(){
    return(
        <div style={{cursor: `url(${logoCursor})16 16, auto`}}>
            <HeaderHome/>
            <div className="max-w-screen min-h-screen flex justify-center">
                <div className="max-w-2xl w-full h-[420px] mt-45 text-center flex justify-center flex-col items-center">
                    <h1 className="text-[#ffffffcb] flex items-center text-center mb-3">
                        <span className="text-8xl">4</span> <img src={logoTrackys} alt="Logo Trackys" className="w-[90px]"/><span className="text-8xl">4</span>               
                    </h1>
                    <p className="text-white text-4xl mb-8">Ops, página não encontrada!</p>
                    <Link to={"/"}>
                        <button className="bg-black cursor pointer border text-[#a6ff00] border-[#a6ff00] hover:bg-[#a6ff00] hover:text-[#000] px-6 py-3 duration-700 ease-in-out cursor-pointer text-lg">Página inicial</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}