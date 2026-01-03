  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  import { Beaker, FlaskConical, LineChart, Microscope } from "lucide-react"

  const services = [
    {
      icon: FlaskConical,
      title: "Fertilizer Manufacturing & Blending",
      description:
        "Tailor-made NPK fertilizer formulations designed to match specific soil and crop requirements. Our advanced blending technology ensures consistent quality and optimal nutrient distribution.",
      features: ["Custom NPK formulations", "Bulk blending services", "Quality assurance testing", "Technical support"],
    },
    {
      icon: Microscope,
      title: "Soil Laboratory Services",
      description:
        "Comprehensive soil analysis using advanced testing methods to determine nutrient levels, pH, organic matter, and other critical parameters for informed farming decisions.",
      features: [
        "Nutrient analysis (N, P, K)",
        "pH and EC testing",
        "Organic matter assessment",
        "Micronutrient evaluation",
      ],
    },
    {
      icon: Beaker,
      title: "Fertilizer Testing Laboratory",
      description:
        "Rigorous quality control testing for fertilizer products to ensure compliance with national standards and optimal performance in the field.",
      features: [
        "NPK content verification",
        "Physical properties testing",
        "Heavy metal screening",
        "Certification support",
      ],
    },
    {
      icon: LineChart,
      title: "Agricultural Consulting",
      description:
        "Expert agronomic advice and crop nutrition planning based on soil test results and crop requirements to maximize yields and profitability.",
      features: [
        "Soil health assessments",
        "Fertilizer recommendations",
        "Crop nutrition planning",
        "Yield optimization strategies",
      ],
    },
  ]

  export function ServicesSection() {
    return (
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive agricultural solutions backed by science and decades of expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
