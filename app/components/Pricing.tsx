import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "$9",
    description: "Perfect for small teams getting started",
    features: ["Up to 5 team members", "10 projects", "Basic analytics", "Email support", "5GB storage"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$29",
    description: "Best for growing teams and businesses",
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "100GB storage",
      "Custom integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Everything in Professional",
      "Custom features",
      "Dedicated account manager",
      "On-premise deployment",
      "24/7 phone support",
      "Unlimited storage",
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Simple, transparent pricing</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Choose the perfect plan for your team. Upgrade or downgrade at any time.
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg border p-8 ${plan.popular ? "border-primary shadow-lg scale-105" : "bg-background"}`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                Most Popular
              </div>
            )}
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-muted-foreground">{plan.description}</p>
              <div className="space-y-2">
                <div className="text-4xl font-bold">
                  {plan.price}
                  {plan.price !== "Custom" && <span className="text-lg font-normal text-muted-foreground">/month</span>}
                </div>
              </div>
            </div>
            <ul className="mt-8 space-y-3">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className={`w-full mt-8 ${plan.popular ? "" : "variant-outline"}`}
              variant={plan.popular ? "default" : "outline"}
            >
              {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
