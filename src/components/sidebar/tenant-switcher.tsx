"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function TenantSwitcher({
  associations,
}: {
  associations: {
    tenant: string
    role: string
  }[]
}) {
  const { isMobile } = useSidebar()
  const [activeTenant, setActiveTenant] = React.useState(associations[0])
  const getInitial = (name: string) => name.charAt(0).toUpperCase()

  if (!activeTenant) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="size-8 rounded-lg">
                <AvatarFallback className="rounded-lg bg-sidebar-primary text-sidebar-primary-foreground text-xs font-bold">
                  {getInitial(activeTenant.tenant)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  Tenant: {activeTenant.tenant}
                </span>
                <span className="truncate text-xs">( Role: {activeTenant.role} )</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-auto min-w-max px-2 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Select a Tenant
            </DropdownMenuLabel>
            {associations.map((item) => (
              <DropdownMenuItem
                key={item.tenant}
                onClick={() => setActiveTenant(item)}
                className="gap-2 p-2"
              >
                {item.tenant} ( role: {item.role} )
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
