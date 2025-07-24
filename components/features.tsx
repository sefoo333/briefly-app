import { Brain, Cloud, Shield, Zap, CheckCircle, Users, TrendingUp, MessageSquare, AirVent, Bot } from "lucide-react"

const features = [
  {
    name: "Task Management",
    description: "Organize and prioritize tasks with ease using our intuitive interface.",
    icon: CheckCircle,
  },
  {
    name: "Community",
    description: "Work together seamlessly with your team members.",
    icon: Users,
  },
  {
    name: "Share Summries",
    description: "Share summeries with your friends",
    icon: MessageSquare,
  },
  {
    name: "Write Smarter",
    description: "Write summries smarter",
    icon: Brain,
  },
  {
    name: "AI-Powered Insights",
    description: "Harness the power of AI to get intelligent recommendations and insights.",
    icon: Bot,
  },
  {
    name: "Cloud Integration",
    description: "Seamlessly integrate with your favorite cloud services and tools.",
    icon: Cloud,
  },
  {
    name: "Enterprise Security",
    description: "Bank-level security to keep your data safe and compliant.",
    icon: Shield,
  },
  {
    name: "Lightning Fast",
    description: "Optimized for speed and performance across all devices.",
    icon: Zap,
  },
]

export default function Features() {
  return (
    <section id="features" className="container space-y-16 py-15 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Everything you need</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Birefly App provides you all you need for your success
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">{feature.name}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
