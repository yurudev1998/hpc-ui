"use client"

import * as React from "react"

import { NavMain } from "@/components/sidebar/nav-main"
import { NavAdmin } from "@/components/sidebar/nav-admin"
import { NavUser } from "@/components/sidebar/nav-user"
import { NAVIGATION_CONFIG } from "@/lib/constants/navigation"
import { TenantSwitcher } from "@/components/sidebar/tenant-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-[--header-height] h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <TenantSwitcher associations={NAVIGATION_CONFIG.associations} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={NAVIGATION_CONFIG.navMain} />
        <NavAdmin items={NAVIGATION_CONFIG.navAdmin} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={NAVIGATION_CONFIG.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
