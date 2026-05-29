import { LayoutDashboard, Users, School, MessageSquareWarning, Settings } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-muted/20">
      {/* Admin Sidebar */}
      <div className="w-64 bg-background border-r border-border p-6 flex flex-col hidden md:flex">
        <div className="mb-10 text-xl font-bold text-primary flex items-center">
          <LayoutDashboard className="mr-2" /> Admin Panel
        </div>
        
        <nav className="space-y-2 flex-grow">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary font-medium rounded-lg">
            <LayoutDashboard className="w-5 h-5" /> Overview
          </Link>
          <Link href="/admin/colleges" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted font-medium rounded-lg">
            <School className="w-5 h-5" /> Colleges
          </Link>
          <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted font-medium rounded-lg">
            <Users className="w-5 h-5" /> Users
          </Link>
          <Link href="/admin/moderation" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted font-medium rounded-lg">
            <MessageSquareWarning className="w-5 h-5" /> Moderation
          </Link>
        </nav>
        
        <div className="pt-6 border-t border-border">
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted font-medium rounded-lg">
            <Settings className="w-5 h-5" /> Settings
          </Link>
        </div>
      </div>

      {/* Main Admin Content */}
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
            <h3 className="text-muted-foreground text-sm font-medium mb-2">Total Colleges</h3>
            <p className="text-3xl font-bold text-foreground">1,248</p>
            <span className="text-green-500 text-xs font-medium mt-2 block">+12 this week</span>
          </div>
          <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
            <h3 className="text-muted-foreground text-sm font-medium mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-foreground">45.2k</p>
            <span className="text-green-500 text-xs font-medium mt-2 block">+854 this week</span>
          </div>
          <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
            <h3 className="text-muted-foreground text-sm font-medium mb-2">Reviews Submitted</h3>
            <p className="text-3xl font-bold text-foreground">12.8k</p>
            <span className="text-green-500 text-xs font-medium mt-2 block">+320 this week</span>
          </div>
          <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
            <h3 className="text-muted-foreground text-sm font-medium mb-2">Pending Moderation</h3>
            <p className="text-3xl font-bold text-red-500">24</p>
            <span className="text-red-400 text-xs font-medium mt-2 block">Requires action</span>
          </div>
        </div>

        <div className="bg-background rounded-xl border border-border shadow-sm overflow-hidden">
          <div className="p-6 border-b border-border flex justify-between items-center">
            <h2 className="font-bold text-lg">Recent User Registrations</h2>
            <button className="text-sm text-primary font-medium">View All</button>
          </div>
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50 text-muted-foreground">
              <tr>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Email</th>
                <th className="px-6 py-3 font-medium">Role</th>
                <th className="px-6 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-6 py-4 font-medium">Rahul Sharma</td>
                <td className="px-6 py-4 text-muted-foreground">rahul@example.com</td>
                <td className="px-6 py-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">USER</span></td>
                <td className="px-6 py-4 text-muted-foreground">Just now</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Priya Singh</td>
                <td className="px-6 py-4 text-muted-foreground">priya@example.com</td>
                <td className="px-6 py-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">USER</span></td>
                <td className="px-6 py-4 text-muted-foreground">2 hrs ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
