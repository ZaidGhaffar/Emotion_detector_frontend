"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Frown, AlertTriangle, Battery, Smile, Meh, Angry, Zap } from "lucide-react"

const emotionData = [
  { name: "Stress", value: 26, color: "#8B5CF6", icon: Frown },
  { name: "Anxiety", value: 17, color: "#EF4444", icon: AlertTriangle },
  { name: "Fatigue", value: 13, color: "#F59E0B", icon: Battery },
  { name: "Happiness", value: 12, color: "#10B981", icon: Smile },
  { name: "Neutral", value: 9, color: "#6B7280", icon: Meh },
  { name: "Anger", value: 8, color: "#DC2626", icon: Angry },
  { name: "Surprise", value: 15, color: "#3B82F6", icon: Zap },
]

interface EmotionCardsProps {
  translations: any
}

export default function EmotionCards({ translations: t }: EmotionCardsProps) {
  const getEmotionText = (emotion: string) => {
    switch (emotion) {
      case "Stress":
        return t.stressEmotion
      case "Anxiety":
        return t.anxietyEmotion
      case "Fatigue":
        return t.fatigueEmotion
      case "Happiness":
        return t.happinessEmotion
      case "Neutral":
        return t.neutralEmotion
      case "Anger":
        return t.angerEmotion
      case "Surprise":
        return t.surpriseEmotion
      default:
        return emotion
    }
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
      {emotionData.map((emotion) => {
        const IconComponent = emotion.icon
        return (
          <Card key={emotion.name} className="relative overflow-hidden">
            <CardContent className="p-3">
              <div className="flex flex-col items-center text-center">
                <div className={`p-1.5 rounded-lg mb-2`} style={{ backgroundColor: `${emotion.color}20` }}>
                  <IconComponent className="w-4 h-4" style={{ color: emotion.color }} />
                </div>
                <div className="text-lg font-bold mb-1">{emotion.value}%</div>
                <p className="text-xs text-gray-600">{getEmotionText(emotion.name)}</p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
