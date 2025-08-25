"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface EmotionPieChartProps {
  translations: any
}

export default function EmotionPieChart({ translations: t }: EmotionPieChartProps) {
  const emotionData = [
    { name: t.stressEmotion, value: 26, color: "#8B5CF6" },
    { name: t.anxietyEmotion, value: 17, color: "#EF4444" },
    { name: t.fatigueEmotion, value: 13, color: "#F59E0B" },
    { name: t.happinessEmotion, value: 12, color: "#10B981" },
    { name: t.neutralEmotion, value: 9, color: "#6B7280" },
    { name: t.angerEmotion, value: 8, color: "#DC2626" },
    { name: t.surpriseEmotion, value: 15, color: "#3B82F6" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.emotionDistribution}</CardTitle>
        <CardDescription>{t.emotionDistributionDesc}</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={emotionData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={120}
              paddingAngle={2}
              dataKey="value"
            >
              {emotionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
