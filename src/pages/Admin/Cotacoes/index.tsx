import { SiteHeader } from "@/components/site-header"
import { IoSearch } from "react-icons/io5";
import { SectionCards } from "@/components/section-cards";
export function Cotacoes(){
    return(
        <div className="max-w-screen w-full min-h-screen h-full bg-[#171717] pt-3 pb-3 pr-3 pl-10 box-border">
            <div className="max-w-screen w-full min-h-screen h-full bg-[#000] rounded-2xl">
                <SiteHeader/>
                <SectionCards/>
                <div className="m-5 relative">
                    <IoSearch className="absolute top-2 right-3.5 text-[#333333] text-2xl"/>
                    <input type="text" className="w-full border border-solid border-[#333333] p-2 rounded-sm focus:outline-0 focus:border-[#555353]" placeholder="Procurar cotações"/>
                </div>
                <div className="m-5">
                    <div className="w-full overflow-x-auto border border-solid border-[#333333] rounded-sm">
                        <table className="w-full text-left border-collapse">
                            <thead className="border-b">
                                <tr className="">
                                    <th className="px-4 py-4 text-[#a39d9d]">TRANSPORTADORA</th>
                                    <th className="px-4 py-4 text-[#a39d9d]">VALOR</th>
                                    <th className="px-4 py-4 text-[#a39d9d]">PRAZO DE ENTREGA</th>
                                    <th className="px-4 py-4 text-[#a39d9d]">DATA COTAÇÃO</th>
                                    <th className="px-4 py-4 text-[#a39d9d]">NÚMERO</th>
                                    <th className="px-4 py-4 text-[#a39d9d]">STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                  <tr className="border-b">
                                    <td className="px-6 py-6">Expresso RogerDev</td>
                                    <td className="px-6 py-6">R$145,00</td>
                                    <td className="px-6 py-6">31/08/2026</td>
                                    <td className="px-6 py-6">30/08/2026</td>
                                    <td className="px-6 py-6">78674</td>
                                    <td className="px-6 py-6"><div className="border border-solid border-[#333333] w-20 text-sm flex items-center justify-center rounded-sm">Ativo</div></td>
                                </tr>
                                  <tr className="border-b">
                                    <td className="px-6 py-6">Expresso RogerDev</td>
                                    <td className="px-6 py-6">R$145,00</td>
                                    <td className="px-6 py-6">31/08/2026</td>
                                    <td className="px-6 py-6">30/08/2026</td>
                                    <td className="px-6 py-6">78674</td>
                                    <td className="px-6 py-6"><div className="border border-solid border-[#333333] w-20 text-sm flex items-center justify-center rounded-sm">Ativo</div></td>
                                </tr>
                                  <tr className="border-b">
                                    <td className="px-6 py-6">Expresso RogerDev</td>
                                    <td className="px-6 py-6">R$145,00</td>
                                    <td className="px-6 py-6">31/08/2026</td>
                                    <td className="px-6 py-6">30/08/2026</td>
                                    <td className="px-6 py-6">78674</td>
                                    <td className="px-6 py-6"><div className="border border-solid border-[#333333] w-20 text-sm flex items-center justify-center rounded-sm">Ativo</div></td>
                                </tr>
                                  <tr>
                                    <td className="px-6 py-6">Expresso RogerDev</td>
                                    <td className="px-6 py-6">R$145,00</td>
                                    <td className="px-6 py-6">31/08/2026</td>
                                    <td className="px-6 py-6">30/08/2026</td>
                                    <td className="px-6 py-6">78674</td>
                                    <td className="px-6 py-6"><div className="border border-solid border-[#333333] w-20 text-sm flex items-center justify-center rounded-sm">Ativo</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}