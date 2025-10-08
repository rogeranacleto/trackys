import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export function Login(){
    return(
        <div>
            <div className="w-screen h-screen bg-[#000] flex flex-col justify-center items-center p-5">
                <section className="flex flex-col max-w-2xl w-full relative">
                    <h1 className="text-white text-3xl text-center mb-3.5">Bem vindo à <span className="text-[#a6ff00]">Trackys</span></h1>
                    <p className="text-gray-100/60 mb-4.5 text-center">Insira seu e-mail e senha, para começar a usar a trackys</p>
                    <label className="text-white mb-2">Email</label>
                    <MdOutlineMail className="absolute text-[#a6ff00af] text-2xl top-33.5 left-5"/>
                    <input type="email" placeholder="email@exemplo.com" className="border border-solid border-[#a6ff00af] text-[#a6ff00] focus:outline-none focus:shadow-lg focus:ring-2 focus:ring-[#a6ff00] transition-shadow duration-300 pt-2.5 pb-2.5 pl-15 mb-10"/>
                    <label className="text-white mb-2">Senha</label>
                    <RiLockPasswordLine className="absolute text-[#a6ff00af] text-2xl bottom-50.5 left-5"/>
                    <input type="password" placeholder="Insira sua senha" className="border border-solid border-[#a6ff00af] text-[#a6ff00] focus:outline-none focus:shadow-lg focus:ring-2 focus:ring-[#a6ff00] transition-shadow duration-300 pt-2.5 pb-2.5 pl-15 mb-10 w-full"/>
                    <button className="text-[#000] bg-[#a6ff00af] border border-solid border-[#a6ff00] cursor-pointer hover:bg-[#a6ff00] duration-700 ease-in-out p-2.5">Entrar</button>
                        <p className="text-[#a6ff00] font-bold text-center mt-20">Não tem uma conta? Cadastre-se</p>
                </section>
            </div>
        </div>
    )
}