import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Clock, Users } from "lucide-react"

export default function ContactUs() {
  return (
    <section id="contact" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Get in touch</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Ready to transform your workflow? Let's discuss how support can help you succeed.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Let's start a conversation</h3>
            <p className="text-muted-foreground text-lg">
              We're here to help you streamline your team's productivity. Reach out to us and let's discuss your needs.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Email us</h4>
                <p className="text-muted-foreground">briefly@sefoo.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Call us</h4>
                <p className="text-muted-foreground">01110343035</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Visit us</h4>
                <p className="text-muted-foreground">
                  29 Farag Salama
                  <br />
                  Egypt, Cairo
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 pt-8 border-t">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-5 w-5 text-primary mr-2" />
              </div>
              <div className="text-2xl font-bold">24h</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-5 w-5 text-primary mr-2" />
              </div>
              <div className="text-2xl font-bold">10k+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative">
          <div className="rounded-2xl border bg-background p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="Seifeldeen"
                    className="rounded-lg border-muted-foreground/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Ali"
                    className="rounded-lg border-muted-foreground/20 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seifali@yourmail.com"
                  className="rounded-lg border-muted-foreground/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  placeholder="Your phone"
                  className="rounded-lg border-muted-foreground/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project and how we can help..."
                  className="min-h-[120px] rounded-lg border-muted-foreground/20 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="group w-full relative overflow-hidden bg-gradient-to-r from-primary via-blue-600 to-accent hover:from-primary/90 hover:via-blue-500 hover:to-accent/90 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center">
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </form>
          </div>

          {/* Background decoration */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 blur-xl opacity-30 -z-10 rounded-2xl"></div>
        </div>
      </div>
    </section>
  )
}
