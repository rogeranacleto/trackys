"use client"
import * as React from "react"
import logo from "../../src/assets/logo-trackys-2.png"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"
import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
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
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Cotações",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Envios",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Entregas",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Ocorrências",
      url: "#",
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
  navSecondary: [
    {
      title: "Configurações",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Ajuda",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Pesquisar",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Indicadores",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Relatórios",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Suporte",
      url: "#",
      icon: IconFileWord,
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props} className="border-none">
      <SidebarHeader className="bg-[#171717] text-[#fff] pt-6 pl-4" >
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 hover:bg-transparent hover:text-[#fff]"
            >
              <a href="#">
                <img src={logo} alt="Logo Trackys" className="w-5"/>
                <span className="text-base font-semibold">Trackys</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-[#171717] text-[#fff] pl-2.5">
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents}/>
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="bg-[#171717] text-[#fff] pl-4">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}