"use client"

import * as React from "react"
import { Languages, Check } from "lucide-react"
import { useLocale } from "next-intl"
import { routing, usePathname, useRouter } from "@/lib/i18n/routing"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

import { LANGUAGES } from "@/config/languages"



export function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()

  function onLanguageChange(nextLocale: string) {
    // router.replace from next-intl handles the locale prefixing automatically
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0" />
          <span className="sr-only">Switch Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((locale: string) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => onLanguageChange(locale)}
            className="flex items-center justify-between"
          >
            {LANGUAGES[locale]}
            {currentLocale === locale && <Check className="ml-2 h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}