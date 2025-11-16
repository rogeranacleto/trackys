import { SiteHeader } from "@/components/site-header";
import { DataTable } from "@/components/data-table";
import data from "../../../app/dashboard/data.json"

export function Envios(){
    return(
        <div className="max-w-screen w-full min-h-screen h-full bg-[#171717] p-4 box-border">
            <div className="max-w-screen w-full min-h-screen h-full bg-[#000] rounded-2xl">
                <SiteHeader/>
                <DataTable data={data}/>
            </div>
        </div>
    )
}