import { Search, Plus, X, Check } from "lucide-react";

export default function ComparePage() {
  // Static mockup data
  const colleges = [
    {
      id: "1",
      name: "IIT Madras",
      location: "Chennai",
      ranking: "1 (NIRF)",
      fees: "₹8,55,000",
      placement: "₹21.48 LPA",
      highestPlacement: "₹1.98 Cr",
      exams: "JEE Advanced",
      facilities: ["Hostel", "Library", "Gym", "WiFi"]
    },
    {
      id: "2",
      name: "IIT Bombay",
      location: "Mumbai",
      ranking: "3 (NIRF)",
      fees: "₹9,12,000",
      placement: "₹23.50 LPA",
      highestPlacement: "₹3.67 Cr",
      exams: "JEE Advanced",
      facilities: ["Hostel", "Library", "Sports", "WiFi"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-3">Compare Colleges</h1>
        <p className="text-muted-foreground">Select up to 4 colleges to compare their fees, placements, rankings and more side-by-side.</p>
      </div>

      <div className="bg-background rounded-2xl shadow-sm border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-border">
                <th className="p-6 bg-muted/30 w-1/4 font-semibold text-lg border-r border-border">
                  Feature
                </th>
                
                {colleges.map((college) => (
                  <th key={college.id} className="p-6 w-1/4 border-r border-border bg-white align-top">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-xs mb-3">
                        Logo
                      </div>
                      <button className="text-muted-foreground hover:text-red-500 transition-colors">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <h3 className="font-bold text-lg text-primary leading-tight hover:underline cursor-pointer">
                      {college.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{college.location}</p>
                    <button className="mt-4 w-full bg-primary/10 text-primary py-2 rounded-lg text-sm font-semibold hover:bg-primary/20 transition-colors">
                      Apply Now
                    </button>
                  </th>
                ))}
                
                {colleges.length < 4 && (
                  <th className="p-6 w-1/4 bg-muted/10 align-top border-dashed border-2 border-border m-2 relative">
                    <div className="h-full flex flex-col items-center justify-center text-center py-10 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="w-12 h-12 bg-border rounded-full flex items-center justify-center mb-3">
                        <Plus className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <span className="font-semibold text-sm">Add College</span>
                    </div>
                  </th>
                )}
              </tr>
            </thead>
            
            <tbody className="divide-y divide-border">
              {/* Ranking */}
              <tr className="hover:bg-muted/10 transition-colors">
                <td className="p-4 bg-muted/30 font-medium text-muted-foreground border-r border-border">Ranking</td>
                {colleges.map(c => (
                  <td key={c.id} className="p-4 border-r border-border font-semibold">{c.ranking}</td>
                ))}
                {colleges.length < 4 && <td></td>}
              </tr>
              
              {/* Fees */}
              <tr className="hover:bg-muted/10 transition-colors">
                <td className="p-4 bg-muted/30 font-medium text-muted-foreground border-r border-border">Total Fees (B.Tech)</td>
                {colleges.map(c => (
                  <td key={c.id} className="p-4 border-r border-border font-semibold text-red-600">{c.fees}</td>
                ))}
                {colleges.length < 4 && <td></td>}
              </tr>

              {/* Avg Placement */}
              <tr className="hover:bg-muted/10 transition-colors">
                <td className="p-4 bg-muted/30 font-medium text-muted-foreground border-r border-border">Average Placement</td>
                {colleges.map(c => (
                  <td key={c.id} className="p-4 border-r border-border font-semibold text-green-600">{c.placement}</td>
                ))}
                {colleges.length < 4 && <td></td>}
              </tr>

              {/* Highest Placement */}
              <tr className="hover:bg-muted/10 transition-colors">
                <td className="p-4 bg-muted/30 font-medium text-muted-foreground border-r border-border">Highest Placement</td>
                {colleges.map(c => (
                  <td key={c.id} className="p-4 border-r border-border font-medium">{c.highestPlacement}</td>
                ))}
                {colleges.length < 4 && <td></td>}
              </tr>

              {/* Exams */}
              <tr className="hover:bg-muted/10 transition-colors">
                <td className="p-4 bg-muted/30 font-medium text-muted-foreground border-r border-border">Accepted Exams</td>
                {colleges.map(c => (
                  <td key={c.id} className="p-4 border-r border-border text-sm">{c.exams}</td>
                ))}
                {colleges.length < 4 && <td></td>}
              </tr>

              {/* Facilities */}
              <tr className="hover:bg-muted/10 transition-colors">
                <td className="p-4 bg-muted/30 font-medium text-muted-foreground border-r border-border align-top">Facilities</td>
                {colleges.map(c => (
                  <td key={c.id} className="p-4 border-r border-border">
                    <ul className="space-y-2">
                      {c.facilities.map(fac => (
                        <li key={fac} className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2 shrink-0" /> {fac}
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
                {colleges.length < 4 && <td></td>}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
