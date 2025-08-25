"use client"

import { Users, Calendar, UserCheck, Settings } from "lucide-react"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  translations: any
}

export default function Sidebar({ activeSection, setActiveSection, translations: t }: SidebarProps) {
  const navigationItems = [
    { id: "dashboard", label: t.dashboard, icon: Users },
    { id: "attendance", label: t.attendance, icon: UserCheck },
    { id: "schedule", label: t.schedule, icon: Calendar },
    { id: "employee", label: t.employee, icon: Users },
    { id: "department", label: t.department, icon: Users },
    { id: "settings", label: t.settings, icon: Settings },
  ]

  return (
    <div className="w-64 bg-white shadow-sm border-r">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold">{t.appName}</span>
        </div>

        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeSection === item.id
                  ? "bg-purple-50 text-purple-600 border border-purple-200"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
