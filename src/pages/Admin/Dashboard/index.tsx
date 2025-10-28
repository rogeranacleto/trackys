import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import data from "../../../app/dashboard/data.json"

export function Dashboard(){
    return(
        <div className="max-w-screen w-full min-h-screen h-full bg-[#171717] p-4">
            <div className="max-w-screen w-full min-h-screen h-full bg-[#000] rounded-2xl">
                <SiteHeader/>
                <SectionCards/>
                <ChartAreaInteractive/>
                <DataTable data={data}/>
            </div>
        </div>
    )
}