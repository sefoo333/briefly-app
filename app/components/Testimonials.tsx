import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "StreamLine has completely transformed how our team collaborates. The integration of all our tools in one place is a game-changer!",
    author: "Seifeldeen Ali",
    company: "Tech Innovators Inc.",
    role: "Product Manager",
    rating: 5,
  },
  {
    quote:
      "The best project management tool we've ever used. Our productivity increased by 40% in just the first month.",
    author: "Mostafa mshakl",
    company: "Creative Solutions LLC",
    role: "Team Lead",
    rating: 5,
  },
  {
    quote: "Finally, a tool that replaces multiple apps without compromising on functionality. Highly recommended!",
    author: "Abdullah Ahmed",
    company: "Startup Ventures",
    role: "CEO",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="container space-y-16 py-24 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">What our customers say</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Join thousands of teams who trust StreamLine to power their productivity.
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg border bg-background p-8 shadow-sm">
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-lg mb-6">"{testimonial.quote}"</blockquote>
            <div className="flex items-center space-x-4">
              {/* <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold">
                {testimonial.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div> */}
              <Image src={"/person1.png"} alt="" width={50} height={50} className="rounded-full" />
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
