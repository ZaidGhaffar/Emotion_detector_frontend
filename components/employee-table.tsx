"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Settings } from "lucide-react"

const employeeData = [
  {
    id: "EMP001",
    name: "Andrew Rico",
    email: "andrew@gmail.com",
    department: "Design",
    role: "UI Designer",
    status: "Full-time",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "EMP002",
    name: "Maria Lopez",
    email: "maria@yahoo.com",
    department: "Design",
    role: "UX Researcher",
    status: "Part-time",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "EMP003",
    name: "Devon Smith",
    email: "devon@hotmail.com",
    department: "Marketing",
    role: "Product Manager",
    status: "Internship",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "EMP004",
    name: "Alisha Khan",
    email: "alisha@outlook.com",
    department: "Development",
    role: "Front-end Developer",
    status: "Contract",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "EMP005",
    name: "John Davis",
    email: "john@company.com",
    department: "HR",
    role: "HR Manager",
    status: "Full-time",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "EMP006",
    name: "Sarah Wilson",
    email: "sarah@company.com",
    department: "Finance",
    role: "Financial Analyst",
    status: "Full-time",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

interface EmployeeTableProps {
  translations: any
}

export default function EmployeeTable({ translations: t }: EmployeeTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")

  const getDepartmentText = (department: string) => {
    switch (department) {
      case "Design":
        return t.designDept
      case "Development":
        return t.developmentDept
      case "Marketing":
        return t.marketingDept
      case "HR":
        return t.hrDept
      case "Finance":
        return t.financeDept
      default:
        return department
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "Full-time":
        return t.fullTimeStatus
      case "Part-time":
        return t.partTimeStatus
      case "Contract":
        return t.contractStatus
      case "Internship":
        return t.internshipStatus
      default:
        return status
    }
  }

  const filteredEmployees = employeeData.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = departmentFilter === "all" || employee.department === departmentFilter
    return matchesSearch && matchesDepartment
  })

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{t.employeeList}</CardTitle>
            <CardDescription>{t.employeeListDesc}</CardDescription>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder={t.searchEmployees}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder={t.department} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.allDepartments}</SelectItem>
                <SelectItem value="Design">{t.designDept}</SelectItem>
                <SelectItem value="Development">{t.developmentDept}</SelectItem>
                <SelectItem value="Marketing">{t.marketingDept}</SelectItem>
                <SelectItem value="HR">{t.hrDept}</SelectItem>
                <SelectItem value="Finance">{t.financeDept}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-600">{t.employee}</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">{t.email}</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">{t.role}</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">{t.department}</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">{t.status}</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">{t.actions}</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={employee.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {employee.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{employee.name}</div>
                        <div className="text-sm text-gray-500">{employee.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{employee.email}</td>
                  <td className="py-3 px-4 text-gray-600">{employee.role}</td>
                  <td className="py-3 px-4">
                    <Badge variant="outline" className="text-purple-600 border-purple-200">
                      {getDepartmentText(employee.department)}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Badge
                      variant={employee.status === "Full-time" ? "default" : "secondary"}
                      className={
                        employee.status === "Full-time"
                          ? "bg-green-100 text-green-800"
                          : employee.status === "Part-time"
                            ? "bg-blue-100 text-blue-800"
                            : employee.status === "Contract"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-purple-100 text-purple-800"
                      }
                    >
                      {getStatusText(employee.status)}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
