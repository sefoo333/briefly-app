import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-18 max-w-screen-2xl items-center max-md:justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">
            <Image src={"/logo.png"} alt="" width={80} height={80} />
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium max-md:hidden">
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="#features" className="transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="#about" className="transition-colors hover:text-primary">
            About Us
          </Link>
          <Link href="#contact" className="transition-colors hover:text-primary">
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button size="sm">Download Now</Button>
        </div>
      </div>
    </header>
  )
}
