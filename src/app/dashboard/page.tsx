import { Bookmark, MessageSquare, Settings, User } from "lucide-react";
import Link from "next/link";

export default function UserDashboard() {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 min-h-[calc(100vh-64px)]">
      {/* Sidebar */}
      <div className="w-full md:w-64 shrink-0">
        <div className="bg-background rounded-2xl border border-border p-6 shadow-sm sticky top-24">
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <User className="w-10 h-10" />
            </div>
            <h2 className="font-bold text-lg">Student Profile</h2>
            <p className="text-sm text-muted-foreground">student@example.com</p>
          </div>
          
          <nav className="space-y-2">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary font-medium rounded-lg transition-colors">
              <Bookmark className="w-5 h-5" /> Saved Colleges
            </Link>
            <Link href="/dashboard/reviews" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted font-medium rounded-lg transition-colors">
              <MessageSquare className="w-5 h-5" /> My Reviews
            </Link>
            <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted font-medium rounded-lg transition-colors">
              <Settings className="w-5 h-5" /> Settings
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow space-y-12">
        <section>
          <h1 className="text-3xl font-bold mb-8">Saved Colleges</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mock Saved College Card */}
            <div className="bg-background rounded-xl border border-border p-5 flex gap-4 hover:shadow-md transition-all relative group">
              <button className="absolute top-4 right-4 text-muted-foreground hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                Remove
              </button>
              <div className="w-20 h-20 bg-muted rounded-lg shrink-0"></div>
              <div>
                <h3 className="font-bold text-lg hover:text-primary cursor-pointer">
                  <Link href="/colleges/iit-madras">IIT Madras</Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-2">Chennai, Tamil Nadu</p>
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-semibold text-primary">₹8,55,000</span>
                  <span className="text-muted-foreground text-xs">• Total Fees</span>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl border border-border p-5 flex gap-4 hover:shadow-md transition-all relative group">
              <button className="absolute top-4 right-4 text-muted-foreground hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                Remove
              </button>
              <div className="w-20 h-20 bg-muted rounded-lg shrink-0"></div>
              <div>
                <h3 className="font-bold text-lg hover:text-primary cursor-pointer">
                  <Link href="/colleges/bits-pilani">BITS Pilani</Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-2">Pilani, Rajasthan</p>
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-semibold text-primary">₹2,91,500</span>
                  <span className="text-muted-foreground text-xs">• Total Fees</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Saved Comparisons</h2>
          <div className="bg-background rounded-xl border border-border p-6 hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-xl text-primary mb-1">Top Engineering Colleges Comparison</h3>
                <p className="text-sm text-muted-foreground">Saved 2 days ago</p>
              </div>
              <Link href="/colleges?compare=iit-madras,iit-bombay,bits-pilani" className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary/20 transition-all text-sm inline-block">
                View Comparison
              </Link>
            </div>
            <div className="flex gap-4">
              <span className="bg-muted px-3 py-1.5 rounded-md text-sm font-medium">IIT Madras</span>
              <span className="bg-muted px-3 py-1.5 rounded-md text-sm font-medium">IIT Bombay</span>
              <span className="bg-muted px-3 py-1.5 rounded-md text-sm font-medium">BITS Pilani</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
