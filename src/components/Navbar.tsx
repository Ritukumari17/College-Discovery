import Link from 'next/link'
import { Search, GraduationCap, Menu, UserCircle } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
              CollegeDiscovery
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/colleges" className="transition-colors hover:text-primary text-foreground/80">Colleges</Link>

            <Link href="/predictor" className="transition-colors hover:text-primary text-foreground/80">Predictor</Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:block relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search colleges..."
              className="h-9 w-64 rounded-md border border-border bg-muted/50 px-8 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
          <Link href="/login" className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
            <UserCircle className="h-5 w-5" />
            Login
          </Link>
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}
