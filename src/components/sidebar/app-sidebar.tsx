"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Frame,
  GalleryVerticalEnd,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/sidebar/nav-main"
import { NavAdmin } from "@/components/sidebar/nav-admin"
import { NavUser } from "@/components/sidebar/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  teams: [
    {
      name: "HPC Portal",
      logo: GalleryVerticalEnd,
    },
  ],
  navMain: [
    {
      title: "Profile",
      url: "/profile",
      icon: SquareTerminal,
      isActive: true,
      items: [],
    },
    {
      title: "Monitoring",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Resource Utilization",
          url: "/monitor/resource",
        },
        {
          title: "License Status",
          url: "monitor/license",
        }
      ],
    },
    {
      title: "Usage",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Workstation",
          url: "/usage/workstation",
        },
        {
          title: "Job",
          url: "/usage/job",
        },
      ],
    },
    {
      title: "Utility",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "File Exchange",
          url: "/utility/exchange",
        },
        {
          title: "License Booking",
          url: "utility/booking",
        },
      ],
    },
  ],
  navAdmin: [
    {
      name: "Cost Trend",
      url: "/admin/cost",
      icon: PieChart,
    },
    {
      name: "Pricing Calculator",
      url: "/admin/price",
      icon: Frame,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">
              {data.teams[0].name}
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavAdmin items={data.navAdmin} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
