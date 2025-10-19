import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Link } from "react-router"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) p-3.5">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-4" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-6"
        />
        <h1 className="text-base font-medium">Documents</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" className="hidden sm:flex">
            <Link to={"/"}>
              <p className="text-base fomt-medium">Hero</p>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
