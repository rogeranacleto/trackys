import { SiteHeader } from "@/components/site-header"
import { IoSearch } from "react-icons/io5";
import { SectionCards } from "@/components/section-cards";
import { BsSendPlus } from "react-icons/bs";
export function Cotacoes(){
    return(
        <div className="max-w-screen w-full min-h-screen h-full bg-[#171717] p-4 box-border">
            <div className="max-w-screen w-full min-h-screen h-full bg-[#000] rounded-2xl">
                <SiteHeader/>
                <SectionCards/>
                <div className="mr-8 ml-8 relative">
                    <IoSearch className="absolute top-2 right-3.5 text-[#333333] text-2xl"/>
                    <input type="text" className="w-full border border-solid border-[#333333] p-2 rounded-sm focus:outline-0 focus:border-[#555353]" placeholder="Procurar cotações"/>
                </div>
                <div className="mr-8 ml-8 mb-8 mt-8">
                    <div className="w-full border border-solid border-[#333333] h-50 rounded-sm flex justify-between items-center p-15">
                        <div>
                            <h1 className="text-[#fff] text-3xl">Adicionar Novo Registro de Cotação</h1>
                            <p className="text-[#a39d9d] mt-2.5">Adicione um novo registro de cotação e escolha uma transportadora para o envio.</p>
                        </div>
                        <div>
                            <button className="border border-solid border-[#333333] p-3.5 rounded-full flex items-center justify-center cursor-pointer">
                                <BsSendPlus className="text-3xl"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mr-8 ml-8">
                    <div className="w-full overflow-x-auto border border-solid border-[#333333] rounded-sm">
                        <table className="w-full text-left border-collapse">
                            <thead className="border-b">
                                <tr className="">
                                    <th className="px-4 py-4 text-[#a39d9d] pl-10">Transportadora</th>
                                    <th className="px-4 py-4 text-[#a39d9d] pl-10">Valor</th>
                                    <th className="px-4 py-4 text-[#a39d9d] pl-10">Prazo de Entrega</th>
                                    <th className="px-4 py-4 text-[#a39d9d] pl-10">Data da Cotação</th>
                                    <th className="px-4 py-4 text-[#a39d9d] pl-10">Número</th>
                                    <th className="px-4 py-4 text-[#a39d9d] pl-10">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                  <tr className="border-b">
                                    <td className="px-6 py-6 pl-10">Expresso RogerDev</td>
                                    <td className="px-6 py-6 pl-10">R$145,00</td>
                                    <td className="px-6 py-6 pl-10">31/08/2026</td>
                                    <td className="px-6 py-6 pl-10">30/08/2026</td>
                                    <td className="px-6 py-6 pl-10">78674</td>
                                    <td className="px-6 py-6 pl-10"><div className="border border-solid border-[#333333] w-20 text-sm flex items-center justify-center rounded-sm">Ativo</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}