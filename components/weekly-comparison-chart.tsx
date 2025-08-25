"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const weeklyData = [
  { day: "Mon", stress: 45, anxiety: 32, fatigue: 28, happiness: 52, neutral: 38, anger: 15, surprise: 22 },
  { day: "Tue", stress: 38, anxiety: 28, fatigue: 35, happiness: 48, neutral: 42, anger: 12, surprise: 18 },
  { day: "Wed", stress: 52, anxiety: 35, fatigue: 42, happiness: 35, neutral: 45, anger: 18, surprise: 15 },
  { day: "Thu", stress: 48, anxiety: 30, fatigue: 38, happiness: 42, neutral: 40, anger: 20, surprise: 12 },
  { day: "Fri", stress: 35, anxiety: 25, fatigue: 30, happiness: 58, neutral: 35, anger: 8, surprise: 25 },
]

interface WeeklyComparisonChartProps {
  translations: any
}

export default function WeeklyComparisonChart({ translations: t }: WeeklyComparisonChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded shadow-lg">
          <p className="font-medium">{`Day: ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {`${
                entry.dataKey === "stress"
                  ? t.stressEmotion
                  : entry.dataKey === "anxiety"
                    ? t.anxietyEmotion
                    : entry.dataKey === "happiness"
                      ? t.happinessEmotion
                      : entry.dataKey === "neutral"
                        ? t.neutralEmotion
                        : entry.dataKey
              }: ${entry.value}`}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  const CustomLegend = (props: any) => {
    const { payload } = props
    return (
      <ul className="flex justify-center gap-4 mt-4 flex-wrap">
        {payload.map((entry: any, index: number) => (
          <li key={index} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></span>
            <span className="text-sm">
              {entry.dataKey === "stress"
                ? t.stressEmotion
                : entry.dataKey === "anxiety"
                  ? t.anxietyEmotion
                  : entry.dataKey === "happiness"
                    ? t.happinessEmotion
                    : entry.dataKey === "neutral"
                      ? t.neutralEmotion
                      : entry.dataKey}
            </span>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>{t.weeklyEmotionComparison}</CardTitle>
        <CardDescription>{t.weeklyEmotionComparisonDesc}</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={weeklyData} barCategoryGap="20%">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
            <Bar dataKey="stress" fill="#8B5CF6" maxBarSize={15} />
            <Bar dataKey="anxiety" fill="#EF4444" maxBarSize={15} />
            <Bar dataKey="happiness" fill="#10B981" maxBarSize={15} />
            <Bar dataKey="neutral" fill="#6B7280" maxBarSize={15} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
