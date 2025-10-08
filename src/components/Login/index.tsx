import logo from "../../assets/logo-trackys-2.png"
export function Login(){
    return(
        <div>
            <div className="w-screen h-screen bg-[#000] flex flex-col justify-center items-center">
                <section className="flex flex-col max-w-lg">
                    <h1 className="text-white text-3xl text-center mb-3.5">Bem vindo à Trackys</h1>
                    <p className="text-gray-100/60 mb-3.5">Insira seu e-mail e senha, para começar a usar a trackys</p>
                    <label className="text-white mb-2">Email</label>
                    <input type="email" placeholder="email@exemplo.com" className="border border-solid border-[#a6ff00af] text-white focus:outline-none focus:shadow-lg focus:ring-2 focus:ring-[#a6ff00] transition-shadow duration-300 p-2.5 mb-10"/>
                    <label className="text-white mb-2">Senha</label>    
                        {/* <img src={logo} alt="Logo trackys" className="w-10 absolute left-200 top-160"/> */}
                        <input type="password" placeholder="Insira sua senha" className="border border-solid border-[#a6ff00af] text-white focus:outline-none focus:shadow-lg focus:ring-2 focus:ring-[#a6ff00] transition-shadow duration-300 p-2.5 mb-10 w-full"/>
                    <button className="text-white bg-transparent border border-solid border-[#a6ff00] cursor-pointer hover:bg-[#a6ff00] hover:text-[#000] ease-in-out duration-700 p-2.5">Entrar</button>
                    <p>Não tem uma conta? Cadastre-se</p>
                </section>
            </div>
        </div>
    )
}