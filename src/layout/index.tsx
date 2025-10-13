import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from "react-router";

export function Layout(){
    return(
        <div>
            <AppSidebar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}