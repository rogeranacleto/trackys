import { SiteHeader } from "@/components/site-header"
import { IoSearch } from "react-icons/io5";

export function Cotacoes(){
    return(
        <div className="max-w-screen w-full min-h-screen h-full bg-[#171717] pt-3 pb-3 pr-3 pl-10 box-border">
            <div className="max-w-screen w-full min-h-screen h-full bg-[#000] rounded-2xl">
                <SiteHeader/>
                <div className="m-5 relative">
                    <IoSearch className="absolute top-2 right-3.5 text-[#333333] text-2xl"/>
                    <input type="text" className="w-full border border-solid border-[#333333] p-2 rounded-sm focus:outline-0 focus:border-[#555353]" placeholder="Procurar cotações"/>
                </div>
            </div>
        </div>
    )
}