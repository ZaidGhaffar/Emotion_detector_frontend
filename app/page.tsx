"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import EmotionCards from "@/components/emotion-cards"
import StatsCards from "@/components/stats-cards"
import EmotionPieChart from "@/components/emotion-pie-chart"
import DailyTrendChart from "@/components/daily-trend-chart"
import WeeklyComparisonChart from "@/components/weekly-comparison-chart"
import EmployeeTable from "@/components/employee-table"
import { translations } from "@/lib/translations"

// Sample employee data for calculations
const employeeData = [
  { id: "EMP001", name: "Andrew Rico", department: "Design" },
  { id: "EMP002", name: "Maria Lopez", department: "Design" },
  { id: "EMP003", name: "Devon Smith", department: "Marketing" },
  { id: "EMP004", name: "Alisha Khan", department: "Development" },
  { id: "EMP005", name: "John Davis", department: "HR" },
  { id: "EMP006", name: "Sarah Wilson", department: "Finance" },
]

export default function HREmotionDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [language, setLanguage] = useState<"en" | "es">("en")

  const t = translations[language]

  // Calculate stats
  const totalEmployees = employeeData.length
  const departments = [...new Set(employeeData.map((emp) => emp.department))].length
  const presentToday = Math.floor(totalEmployees * 0.92)
  const absentToday = totalEmployees - presentToday

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} translations={t} />

      <div className="flex-1 p-8">
        <Header language={language} setLanguage={setLanguage} translations={t} />

        <EmotionCards translations={t} />

        <StatsCards
          totalEmployees={totalEmployees}
          departments={departments}
          presentToday={presentToday}
          absentToday={absentToday}
          translations={t}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <EmotionPieChart translations={t} />
          <DailyTrendChart translations={t} />
        </div>

        <WeeklyComparisonChart translations={t} />

        <EmployeeTable translations={t} />
      </div>
    </div>
  )
}
