import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from "react-router";
import { SidebarProvider } from "@/components/ui/sidebar";
export function Layout(){
    return(
        <div>
            <SidebarProvider>
                <div>
                    <AppSidebar/>
                </div>
                <main className="max-w-screen w-full min-h-screen h-full">
                    <Outlet/>
                </main>
            </SidebarProvider>
        </div>
    )
}