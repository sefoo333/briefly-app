import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Users, Zap } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-16 py-24 md:py-32 text-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse hidden lg:block"></div>
        <div className="absolute top-1/3 right-10 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-lg animate-pulse hidden lg:block"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-lg animate-pulse hidden lg:block"></div>
      </div>

      {/* Social Proof Banner */}
      {/* <div className="flex items-center space-x-6 text-sm text-muted-foreground bg-muted/30 backdrop-blur-sm px-6 py-3 rounded-full border">
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-1">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-white"></div>
          </div>
          <span>Trusted by 10,000+ teams</span>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span>4.9/5 rating</span>
        </div>
      </div> */}

      {/* Main Content - Centered */}
      <div className="space-y-8 max-w-5xl relative z-10">
        <div className="space-y-6">
          {/* <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border">
            <Zap className="w-4 h-4 text-primary" />
            <span>New: AI-powered task automation</span>
          </div> */}

          <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
            Finish Your Exams
            <br />
            <span className="bg-gradient-to-r from-muted-foreground to-muted-foreground/60 bg-clip-text text-transparent">
              in a Less Time
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-8 md:text-2xl md:leading-9">
            Write your summries and your study time in a less time and more effective
            <br />

          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-primary via-blue-600 to-accent hover:from-primary/90 hover:via-blue-500 hover:to-accent/90 text-white font-semibold text-lg px-12 py-8 rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 border-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10 flex items-center">
              Download Now
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group relative text-lg px-8 py-8 bg-transparent border-2 border-muted-foreground/20 hover:border-primary/50 rounded-2xl backdrop-blur-sm hover:bg-primary/5 transition-all duration-300"
          >
            <Play className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            Watch Demo
          </Button>
        </div>

        {/* Feature highlights */}
        {/* <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Cancel anytime</span>
          </div>
        </div> */}
      </div>

      {/* Enhanced Phone Mockup */}
    <Image src={"/phone.png"} alt="" width={300} className="mt-0" height={200} />
    </section>
  )
}
