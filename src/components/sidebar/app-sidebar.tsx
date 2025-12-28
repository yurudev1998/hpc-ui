"use client"

import * as React from "react"

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

import { NAVIGATION_CONFIG } from "@/config/navigation"

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
              {NAVIGATION_CONFIG.teams[0].name}
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={NAVIGATION_CONFIG.navMain} />
        <NavAdmin items={NAVIGATION_CONFIG.navAdmin} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={NAVIGATION_CONFIG.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
