"use client"

import { Card, CardHeader, CardContent, CardDescription } from "@/components/ui/card"
import { Users, UserCheck, UserX } from "lucide-react"

interface StatsCardsProps {
  totalEmployees: number
  departments: number
  presentToday: number
  absentToday: number
  translations: any
}

export default function StatsCards({
  totalEmployees,
  departments,
  presentToday,
  absentToday,
  translations: t,
}: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardDescription>{t.totalEmployees}</CardDescription>
            <Users className="w-5 h-5 text-purple-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{totalEmployees}</div>
          <p className="text-sm text-green-600">{t.vsLastWeek}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardDescription>{t.departments}</CardDescription>
            <Users className="w-5 h-5 text-blue-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{departments}</div>
          <p className="text-sm text-gray-600">{t.activeDepartments}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardDescription>{t.todayPresent}</CardDescription>
            <UserCheck className="w-5 h-5 text-green-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{presentToday}</div>
          <p className="text-sm text-green-600">{t.vsYesterday}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardDescription>{t.todayAbsent}</CardDescription>
            <UserX className="w-5 h-5 text-red-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{absentToday}</div>
          <p className="text-sm text-red-600">{t.vsYesterdayNeg}</p>
        </CardContent>
      </Card>
    </div>
  )
}
