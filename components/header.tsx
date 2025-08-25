"use client"

import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

interface HeaderProps {
  language: "en" | "es"
  setLanguage: (lang: "en" | "es") => void
  translations: any
}

export default function Header({ language, setLanguage, translations: t }: HeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">{t.dashboardTitle}</h1>
        <p className="text-gray-600">{t.dashboardSubtitle}</p>
      </div>
      <Button
        variant="outline"
        onClick={() => setLanguage(language === "en" ? "es" : "en")}
        className="flex items-center gap-2"
      >
        <Languages className="w-4 h-4" />
        {language === "en" ? "Español" : "English"}
      </Button>
    </div>
  )
}
