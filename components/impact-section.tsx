import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Sprout, Award } from "lucide-react"

const impacts = [
  {
    icon: TrendingUp,
    title: "Increased Productivity",
    description:
      "Our precision formulations have helped farmers achieve up to 40% yield improvements across various crops.",
  },
  {
    icon: Users,
    title: "Empowering Farmers",
    description:
      "Training programs and field support services have equipped over 500 farmers with modern agronomic knowledge.",
  },
  {
    icon: Sprout,
    title: "Sustainable Agriculture",
    description: "Promoting soil health and environmental stewardship through balanced nutrient management practices.",
  },
  {
    icon: Award,
    title: "Quality Standards",
    description:
      "Maintaining international quality certifications and contributing to Malawi's agricultural sector development.",
  },
]

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Strategic Impact on Malawi</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
            Driving agricultural transformation through innovation, quality, and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-primary-foreground">{impact.title}</h3>
                  <p className="text-sm text-primary-foreground/80 leading-relaxed">{impact.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
