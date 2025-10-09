import { Link } from "react-router"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export function FooterHome(){

useEffect(() => {
return () => {
    AOS.refreshHard();
};
  }, []);

    return(
        <footer>
            <section data-aos="fade-up" className="relative bg-[#000000] text-center py-40 flex flex-col justify-between overflow-hidden">
                <div className=" absolute inset-x-0 bottom-0 h-[400px] bg-gradient-to-t from-[#a6ff00c0] via-transparent to-transparent blur-3xl"></div>
                <div className="absolute top-0 left-0 w-full flex justify-between items-start">
                    <div data-aos="fade-right" data-aos-duration="2500" className="h-[1px] w-1/3 bg-gradient-to-r from-[#a6ff00] to-transparent rounded-full"></div>
                    <div data-aos="fade-left" data-aos-duration="2500" className="h-[1px] w-1/3 bg-gradient-to-l from-[#a6ff00] to-transparent rounded-full"></div>
                </div>

                <div className="relative z-10">
                    <h2 data-aos="fade-up" data-aos-duration="2400" className="text-4xl font-medium mb-4 text-[#ffffffcb] leading-15">
                    Sabe o que é ainda mais legal? A plataforma é<br />
                    totalmente <span className="text-[#a6ff00]">grátis!</span>
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="2300" className="text-gray-400 mb-8 text-lg">
                    Crie sua conta, faça login e utilize os recursos sem nenhum custo.
                    </p>
                    <div data-aos="fade-up" data-aos-duration="2200">
                        <Link to={"/signup"}>
                            <button className="max-w-lg w-full m-auto bg-black cursor pointer border text-[#a6ff00] border-[#a6ff00] hover:bg-[#a6ff00] hover:text-[#000] px-6 py-3 duration-700 ease-in-out cursor-pointer text-lg">
                                    Acessar a plataforma
                            </button>
                        </Link>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="2100" className="relative pt-8">
                    <p className="absolute top-25 left-1/2 -translate-x-1/2 font-bold">© 2025 Desenvolvido por Roger Anacleto</p>
                    <div className="flex gap-4 items-center absolute top-40 left-1/2 -translate-x-1/2">
                    <a href="https://github.com/rogerdasilva7" target="_blank">
                        <FaGithub className="text-3xl hover:scale-120 duration-300 ease-in-out"/>
                    </a>
                    <a href="https://www.linkedin.com/in/rogerdasilva7/" target="_blank">
                        <FaLinkedin className="text-3xl hover:scale-120 duration-300 ease-in-out"/>
                    </a>
                    </div>
                </div>
            </section>
        </footer>
    )
}