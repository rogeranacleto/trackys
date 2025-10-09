import { HeaderHome } from "../../components/HeaderHome"
import { FaArrowDown } from "react-icons/fa";
import dashboardimg from "../../assets/dashboard-trackys.png"
import { FooterHome } from "../../components/FooterHome";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import logoTrackys from "../../assets/logo-trackys-2.png";
import logoCursor from "../../assets/logo-mouse.png";

export function Home(){
function scrollToSection(id: string){
 const element = document.getElementById(id)
 console.log(element)
 if (element) element.scrollIntoView({behavior: "smooth"})
}

useEffect(() => {
    AOS.init({
        duration: 800,
        once: true,
        offset: 50
    })
},[])
    return(
    <div style={{cursor: `url(${logoCursor})16 16, auto`}}>
        <HeaderHome/>
        <section className="w-screen min-h-screen bg-[#000] relative">
            <section className="relative z-10 flex justify-center top-60 right-5.5 p-5 flex-col items-center">
                <div className="max-w-4xl flex flex-col justify-center items-center">
                    <h1 data-aos="fade-up" data-aos-duration="2300" className="text-[#ffffffcb] text-6xl lg:text-7xl text-center font-medium">Controle seus envios de maneira rápida e eficiente</h1>
                    <p data-aos="fade-up" data-aos-duration="2200" className="text-[#A1A1AA] text-2xl max-w-3xl ml-15 mt-8 text-center mr-15">
                        Agora você consegue gerenciar seus processos logísticos de 
                        maneira rápida, eficiente e totalmente otimizada para o seu negócio. A <span className="font-bold">Trackys</span> conta com diversas ferramentas
                        que ajudam você a resolver problemas logísticos.
                    </p>
                        <div data-aos="fade-up" data-aos-duration="2100" className="flex items-center justify-center flex-col">
                            <button className="cursor-pointer text-[#a6ff00af] text-lg duration-700 ease-in-out mt-10 hover:text-[#a6ff00] hover:scale-110 hover:mb-2" onClick={() => scrollToSection("about")}>Saber mais</button>
                            <FaArrowDown className="text-[#a6ff00af] mt-5"/>
                        </div>
                </div>
            </section>
            <div data-aos="fade-up" data-aos-duration="2000" className="relative flex items-center justify-center min-h-screen mt-20 p-8">
                <img
                    src={dashboardimg}
                    alt="Background Trackys"
                    className="max-w-7xl w-full object-contain border border-solid border-[#a6ff00] rounded-2xl shadow-[0_0_1000px_#a6ff0036] hover:shadow-[0_0_1100px_#a6ff0036,0_0_900px_#a6ff0036] transition-all duration-700"
                />
            </div>
        </section>

        <section id="about" className="w-full items-center flex justify-center mb-50 p-8">
        <div className="flex flex-wrap max-w-6xl w-full gap-10">
            <div data-aos="zoom-in-up" data-aos-duration="2300" className="flex-1 min-w-[350px]">
            <h2 className="text-[#ffffffdc] text-4xl md:text-5xl lg:text-5xl font-medium leading-15 relative text-center">
                Quer ter total controle sobre suas entregas? Vamos juntos
            </h2>
            <div className=" relative hover:scale-110 duration-700 ease-in-out hidden lg:block mt-5">
                <p className=" fixed right-10 bg-[#a6ff00] text-[#000] p-2 lg:text-5xl font-medium">Trackys</p>
                <img src={logoTrackys} alt="Logo Trackys" className="absolute max-bottom-20 right-4 lg:bottom-0 max-w-15"/>
            </div>
            </div>

            <div data-aos="zoom-in-up" data-aos-duration="2200" className="flex-1 min-w-[350px] max-md:m-auto">
            <p className="text-[#A1A1AA] max-w-lg text-lg leading-8 text-center min-md:ml-25">
                A <span className="font-bold text-[#a6ff00af]">Trackys</span> conta com uma solução completa de gestão de entregas terceirizadas, projetada para otimizar operações e melhorar a experiência do cliente.
                O sistema permite <strong>monitorar prazos</strong>, <strong>prevenir atrasos</strong>, <strong>gerenciar custos</strong> e <strong>acompanhar o status de cada entrega</strong> até a confirmação do recebimento.
            </p>
            </div>
        </div>
        </section>
        <section className="bg-[#000] text-[#ffffffdc] px-8 py-16 mb-15">
            <div data-aos="zoom-in-up" data-aos-duration="2600" className="max-w-6xl mx-auto mb-12">
                <h2 className="text-[#ffffffdc] text-4xl md:text-5xl lg:text-5xl font-medium leading-15 max-sm:text-center">O que a Trackys<br />oferece?</h2>
                <p className="text-[#A1A1AA] mt-5 max-w-lg text-lg leading-8 max-sm:text-center">
                Você pode <strong>registrar e acompanhar cotações</strong>, <strong>envios</strong>, <strong>entregas</strong> e <strong>ocorrências de transporte.</strong> O sistema <strong>gera alertas para atrasos e divergências</strong>, possuí <strong>histórico de desempenho de terceiros</strong>. Além disso facilita a tomada de decisões e a comunicação interna.
                </p>
            </div>
            
            <div data-aos="zoom-in-up" data-aos-duration="2500" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8 ">
                <div className="bg-[#151419] rounded-2xl p-6 flex flex-col max-w-[420px] min-h-[480px] hover:scale-110 duration-300 ease-in-out border border-solid border-[#a6ff0036] hover:border-2 max-sm:m-auto">
                    <div className="flex flex-col justify-between">
                        <div className="mt-8">
                            <img src={dashboardimg} alt="" className="rounded-lg w-full" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 mt-15">Dashboard Principal</h3>
                        <p className="text-[#A1A1AA] font-medium">
                            No dashboard principal, acompanhe os principais indicadores do seu negócio. Visualize envios, entregas concluídas, taxas de atraso, economias obtidas e muito mais.</p>
                    </div>
                </div>
                <div className="bg-[#151419] rounded-2xl p-6 flex flex-col max-w-[420px] min-h-[480px] hover:scale-110 duration-300 ease-in-out border border-solid border-[#a6ff0036] hover:border-2 max-sm:m-auto">
                    <div className="mt-8">
                        <img src={dashboardimg} alt="" className="rounded-lg w-full" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 mt-15">Registro de Cotações</h3>
                        <p className="text-[#A1A1AA] font-medium">
                            Aqui você pode registrar suas cotações, informando dados como transportador, valor, prazo de entrega, data e observações. Depois, é possível comparar as opções e selecionar vencedor para o envio do produto.</p>
                    </div>
                </div>
                <div className="bg-[#151419] rounded-2xl p-6 flex flex-col max-w-[420px] min-h-[480px] hover:scale-110 duration-300 ease-in-out border border-solid border-[#a6ff0036] hover:border-2 max-sm:m-auto">
                    <div>
                    <div className="mt-8">
                        <img src={dashboardimg} alt="" className="rounded-lg w-full" />
                    </div>
                        <h3 className="text-2xl font-semibold mb-2 mt-15">Resumo de Envios</h3>
                        <p className="text-[#A1A1AA] font-medium">
                            Permite o registro dos dados da nota fiscal, cliente, destinatário e data de coleta, com associação ao transportador escolhido e acompanhamento do status para um controle eficiente das entregas.
                        </p>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="2400" className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto gap-8 mt-8">
                <div className="bg-[#151419] rounded-2xl p-6 flex flex-col hover:scale-110 duration-300 ease-in-out border border-solid border-[#a6ff0036] hover:border-2 max-sm:m-auto">
                    <div className="mt-8">
                        <img src={dashboardimg} alt="" className="rounded-lg w-full" />
                    </div>
                        <h3 className="text-2xl font-semibold mb-2 mt-15">Controle de Entregas</h3>
                        <p className="text-[#A1A1AA] font-medium">
                        Dashboard intuitivo com resumo dos envios. Visualize facilmente quantos estão em transporte, atrasados ou concluídos, com alertas automáticos para entregas fora do prazo.
                        </p>
                </div>
                <div className="bg-[#151419] rounded-2xl p-6 flex flex-col hover:scale-110 duration-300 ease-in-out border border-solid border-[#a6ff0036] hover:border-2 max-sm:m-auto">
                    <div className="mt-8">
                        <img src={dashboardimg} alt="" className="rounded-lg w-full" />
                    </div>
                        <h3 className="text-2xl font-semibold mb-2 mt-15">Controle de Ocorrências</h3>
                        <p className="text-[#A1A1AA] font-medium">
                        Gerencie ocorrências com eficiência: registre atrasos, <br />extravios, avarias ou diferenças de valor e acompanhe o status de resolução, garantindo mais transparência e agilidade nas entregas.</p>
                </div>
            </div>
        </section>
        <FooterHome/>
    </div>
)
}