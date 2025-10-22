import { SiteHeader } from "@/components/site-header"
export function Cotacoes(){
    return(
        <div className="max-w-screen w-full min-h-screen h-full bg-[#171717] pt-3 pb-3 pr-3 pl-10">
            <div className="max-w-screen w-full min-h-screen h-full bg-[#000] rounded-2xl">
                <SiteHeader/>
                <h1>Seção de registro de cotações</h1>
            </div>
        </div>
    )
}