import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header";
import { Outlet } from "react-router";

export function Layout(){
    return(
        <div>
            <div className="flex">
                <AppSidebar/>
                <SiteHeader/>
            </div>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}