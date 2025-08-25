"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const dailyTrendData = [
  { time: "9:00", stress: 15, anxiety: 8, fatigue: 12, happiness: 25, neutral: 20, anger: 5, surprise: 15 },
  { time: "11:00", stress: 22, anxiety: 12, fatigue: 18, happiness: 20, neutral: 15, anger: 8, surprise: 5 },
  { time: "13:00", stress: 18, anxiety: 10, fatigue: 25, happiness: 15, neutral: 18, anger: 6, surprise: 8 },
  { time: "15:00", stress: 28, anxiety: 15, fatigue: 20, happiness: 12, neutral: 15, anger: 7, surprise: 3 },
  { time: "17:00", stress: 35, anxiety: 20, fatigue: 15, happiness: 8, neutral: 12, anger: 10, surprise: 0 },
]

interface DailyTrendChartProps {
  translations: any
}

export default function DailyTrendChart({ translations: t }: DailyTrendChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded shadow-lg">
          <p className="font-medium">{`Time: ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {`${
                entry.dataKey === "stress"
                  ? t.stressEmotion
                  : entry.dataKey === "happiness"
                    ? t.happinessEmotion
                    : entry.dataKey === "fatigue"
                      ? t.fatigueEmotion
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
      <ul className="flex justify-center gap-4 mt-4">
        {payload.map((entry: any, index: number) => (
          <li key={index} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></span>
            <span className="text-sm">
              {entry.dataKey === "stress"
                ? t.stressEmotion
                : entry.dataKey === "happiness"
                  ? t.happinessEmotion
                  : entry.dataKey === "fatigue"
                    ? t.fatigueEmotion
                    : entry.dataKey}
            </span>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.dailyEmotionTrends}</CardTitle>
        <CardDescription>{t.dailyEmotionTrendsDesc}</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dailyTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
            <Line type="monotone" dataKey="stress" stroke="#8B5CF6" strokeWidth={2} />
            <Line type="monotone" dataKey="happiness" stroke="#10B981" strokeWidth={2} />
            <Line type="monotone" dataKey="fatigue" stroke="#F59E0B" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
