import * as React from "react"
import logoTrackys from "../../src/assets/logo-trackys-2.png"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconFileAi,
  IconFileDescription,
  IconFolder,
  IconInnerShadowTop,
  IconListDetails,
  IconUsers,
} from "@tabler/icons-react"
import { Link } from "react-router"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Cotações",
      url: "/admin/cotacoes",
      icon: IconListDetails,
    },
    {
      title: "Envios",
      url: "/admin/envios",
      icon: IconChartBar,
    },
    {
      title: "Entregas",
      url: "/admin/entregas",
      icon: IconFolder,
    },
    {
      title: "Ocorrências",
      url: "/admin/ocorrencias",
      icon: IconUsers,
    },
        {
      title: "Indicadores",
      url: "/admin/indicadores",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="bg-[#171717] text-[#fff]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-4 hover:bg-[#171717] hover:text-[#fff]"
            >
              <a href="#">
                <img src={logoTrackys} alt="Logo Trackys" className="w-6"/>
                <span className=" font-semibold text-lg">Trackys</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
        <SidebarContent className="bg-[#171717] pl-4 pr-4">
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild className="text-white mt-1 hover:bg-[#2c2b2b] hover:text-[#fff]">
                  <Link to={item.url} className="flex items-center">
                    <item.icon className="!size-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      <SidebarFooter className="bg-[#171717] text-white">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
