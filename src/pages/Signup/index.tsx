import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export function Signup(){

useEffect(() => {
    AOS.init({
        once: true,
        offset: 50
    })
},[])

    return(
        <div data-aos="zoom-in" data-aos-duration="1000" className="w-screen h-screen bg-[#000] flex flex-col justify-center items-center p-5">
            <section className="flex flex-col max-w-2xl w-full relative">
                <h1 className="text-white text-3xl text-center mb-3.5">Criar Conta</h1>
                <p className="text-gray-100/60 mb-4.5 text-center">Preencha os campos abaixo para criar uma conta na Trackys</p>
                <label className="text-white mb-2">Nome</label>
                <FaRegUser className="absolute text-[#a6ff00af] text-lg top-33.5 left-5 max-sm:top-40"/>
                <input type="email" placeholder="Crie um nome de usuário" className="border border-solid border-[#a6ff00af] text-gray-100/60 focus:outline-none focus:shadow-lg focus:ring-2 focus:ring-[#a6ff00] transition-shadow duration-300 pt-2.5 pb-2.5 pl-15 mb-10"/>
                <label className="text-white mb-2">Email</label>
               <MdOutlineMail className="absolute text-[#a6ff00af] text-2xl top-63 left-5 max-sm:top-69"/> 
                <input type="email" placeholder="email@exemplo.com" className="border border-solid border-[#a6ff00af] text-gray-100/60 focus:outline-none focus:shadow-lg focus:ring-2 focus:ring-[#a6ff00] transition-shadow duration-300 pt-2.5 pb-2.5 pl-15 mb-10"/>
                <label className="text-white mb-2">Senha</label>    
                <RiLockPasswordLine className="absolute text-[#a6ff00af] text-2xl left-5 bottom-50.5"/>
                <input type="password" placeholder="Crie uma senha" className="border border-solid border-[#a6ff00af] text-gray-100/60 focus:outline-none focus:shadow-lg focus:ring-2 focus:ring-[#a6ff00] transition-shadow duration-300 pt-2.5 pb-2.5 pl-15 mb-10 w-full"/>
                <button className="text-[#000] bg-[#a6ff00af] border border-solid border-[#a6ff00] cursor-pointer hover:bg-[#a6ff00] duration-700 ease-in-out p-2.5">Entrar</button>
                <Link to={"/login"}>
                    <p className="text-[#a6ff00] font-bold text-center mt-20">Já tem uma conta? Faça login</p>
                </Link>
            </section>
        </div>
    )
}