"use client"

import { Menu, Command } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { DropDownUser } from "@/components/sidebar/dropdown-user";
import { NAVIGATION_CONFIG } from "@/lib/constants/navigation";
import Link from "next/link"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-[--header-height] w-full items-center gap-2 px-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
          >
            <Menu className="size-5" />
          </Button>

          <Link href="/" className="flex items-center gap-2 px-2 transition-opacity hover:opacity-80">
            <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <Command className="size-5" />
            </div>
            <span className="truncate text-lg font-bold tracking-tight">
              HPC Cloud Portal
            </span>
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center gap-2 hidden sm:flex">
            <ThemeToggle />
            <LanguageToggle />
          </div>
          <DropDownUser user={NAVIGATION_CONFIG.user}/>
        </div>
      </div>
    </header>
  )
}
