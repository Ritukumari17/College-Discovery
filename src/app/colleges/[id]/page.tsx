import { MapPin, Star, Building, CheckCircle2, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const mockColleges = {
  "iit-madras": {
    name: "Indian Institute of Technology (IIT) Madras",
    shortName: "IITM",
    location: "Chennai, Tamil Nadu",
    ranking: "#1 NIRF 2023",
    rating: "4.8",
    reviews: "420",
    estd: "1959",
    about: "Indian Institute of Technology Madras is a public technical university located in Chennai, Tamil Nadu. It is recognized as an Institute of National Importance by the Government of India. Founded in 1959 with technical and financial assistance from the former government of West Germany, it was the third IIT established by the Government of India.",
    campusSize: "617 Acres",
    faculty: "600+",
    students: "10,000+",
    exams: "JEE Advanced",
    btechFees: "₹8,55,000",
    highestPackage: "₹1.98 Cr",
    avgPackage: "₹21.48 LPA",
    address: "Sardar Patel Road, Adyar, Chennai - 600036",
    website: "https://www.iitm.ac.in/",
    applyLink: "https://study.iitm.ac.in/es/admissions.html"
  },
  "iit-bombay": {
    name: "Indian Institute of Technology (IIT) Bombay",
    shortName: "IITB",
    location: "Mumbai, Maharashtra",
    ranking: "#3 NIRF 2023",
    rating: "4.9",
    reviews: "612",
    estd: "1958",
    about: "Indian Institute of Technology Bombay is a public technical and research university in Powai, Mumbai, Maharashtra, India. IIT Bombay was founded in 1958. In 1961, the Parliament decreed IITs as Institutes of National Importance.",
    campusSize: "545 Acres",
    faculty: "680+",
    students: "12,000+",
    exams: "JEE Advanced",
    btechFees: "₹9,12,000",
    highestPackage: "₹3.67 Cr",
    avgPackage: "₹23.50 LPA",
    address: "Main Gate Rd, IIT Area, Powai, Mumbai - 400076",
    website: "https://www.iitb.ac.in/",
    applyLink: "https://www.iitb.ac.in/newacadhome/toadmission.jsp"
  },
  "iisc-bangalore": {
    name: "Indian Institute of Science (IISc)",
    shortName: "IISC",
    location: "Bangalore, Karnataka",
    ranking: "#2 NIRF 2023",
    rating: "4.9",
    reviews: "315",
    estd: "1909",
    about: "The Indian Institute of Science is a public, deemed, research university for higher education and research in science, engineering, design, and management. It is located in Bangalore, in the Indian state of Karnataka.",
    campusSize: "400 Acres",
    faculty: "500+",
    students: "4,000+",
    exams: "JEE Advanced",
    btechFees: "₹1,10,000",
    highestPackage: "₹85.00 LPA",
    avgPackage: "₹28.00 LPA",
    address: "CV Raman Rd, Bengaluru - 560012",
    website: "https://iisc.ac.in/about/",
    applyLink: "https://admissions.iisc.ac.in/"
  },
  "bits-pilani": {
    name: "Birla Institute of Technology and Science (BITS)",
    shortName: "BITS",
    location: "Pilani, Rajasthan",
    ranking: "#25 NIRF 2023",
    rating: "4.7",
    reviews: "840",
    estd: "1964",
    about: "Birla Institute of Technology & Science, Pilani is a private deemed university in Pilani, India. It focuses primarily on higher education and research in engineering and sciences. After expansion to a campus in Dubai, it has become the first international deemed university.",
    campusSize: "328 Acres",
    faculty: "850+",
    students: "17,000+",
    exams: "BITSAT",
    btechFees: "₹25,85,000",
    highestPackage: "₹60.75 LPA",
    avgPackage: "₹30.37 LPA",
    address: "Vidya Vihar, Pilani - 333031",
    website: "https://www.bits-pilani.ac.in/",
    applyLink: "https://www.bits-pilani.ac.in/admissions/"
  }
};

export default async function CollegeDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const college = mockColleges[resolvedParams.id as keyof typeof mockColleges];

  if (!college) {
    notFound();
  }

  return (
    <div className="bg-muted/10 min-h-screen pb-20">
      {/* Hero Banner */}
      <div className="bg-primary text-primary-foreground pt-12 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="w-24 h-24 bg-white rounded-xl shadow-lg border-4 border-white/20 flex-shrink-0 flex items-center justify-center text-primary font-bold text-2xl">
              {college.shortName}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">{college.ranking}</span>
                <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded border border-white/30">Public/Government</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3">{college.name}</h1>
              <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80 text-sm">
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-1"/> {college.location}</span>
                <span className="flex items-center"><Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400"/> {college.rating} ({college.reviews} Reviews)</span>
                <span className="flex items-center"><Building className="w-4 h-4 mr-1"/> Estd {college.estd}</span>
              </div>
            </div>
            <div className="md:ml-auto flex gap-3 mt-4 md:mt-0">
              {/* @ts-ignore */}
              {college.applyLink ? (
                /* @ts-ignore */
                <a href={college.applyLink} target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-6 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-md inline-block">Apply Now</a>
              ) : (
                <button className="bg-white text-primary px-6 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-md">Apply Now</button>
              )}
              <button className="bg-primary-foreground/10 text-white border border-white/30 px-4 py-2.5 rounded-lg font-medium hover:bg-primary-foreground/20 transition-all">Save</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-background rounded-xl shadow-sm border border-border p-2 flex overflow-x-auto whitespace-nowrap mb-8 sticky top-16 z-40">
          <button className="px-6 py-2 text-sm font-semibold text-primary border-b-2 border-primary">Overview</button>
          <button className="px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Courses & Fees</button>
          <button className="px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Placements</button>
          <button className="px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Reviews</button>
          <button className="px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Facilities</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (Main Info) */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-background rounded-xl p-6 border border-border shadow-sm">
              <h2 className="text-xl font-bold mb-4">About {college.shortName}</h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                {college.about}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-muted/50 p-3 rounded-lg border border-border">
                  <span className="text-xs text-muted-foreground block mb-1">Campus Size</span>
                  <strong className="text-sm">{college.campusSize}</strong>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg border border-border">
                  <span className="text-xs text-muted-foreground block mb-1">Total Faculty</span>
                  <strong className="text-sm">{college.faculty}</strong>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg border border-border">
                  <span className="text-xs text-muted-foreground block mb-1">Total Students</span>
                  <strong className="text-sm">{college.students}</strong>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg border border-border">
                  <span className="text-xs text-muted-foreground block mb-1">Accepted Exams</span>
                  <strong className="text-sm text-primary">{college.exams}</strong>
                </div>
              </div>
            </section>

            <section className="bg-background rounded-xl p-6 border border-border shadow-sm">
              <h2 className="text-xl font-bold mb-4">Popular Courses & Fees</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3 rounded-tl-lg">Course Name</th>
                      <th className="px-4 py-3">Duration</th>
                      <th className="px-4 py-3 rounded-tr-lg text-right">Total Fees</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-muted/30">
                      <td className="px-4 py-4 font-medium">B.Tech Computer Science and Engineering</td>
                      <td className="px-4 py-4 text-muted-foreground">4 Years</td>
                      <td className="px-4 py-4 text-right font-bold">{college.btechFees}</td>
                    </tr>
                    <tr className="hover:bg-muted/30">
                      <td className="px-4 py-4 font-medium">B.Tech Electrical Engineering</td>
                      <td className="px-4 py-4 text-muted-foreground">4 Years</td>
                      <td className="px-4 py-4 text-right font-bold">{college.btechFees}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-background rounded-xl p-6 border border-border shadow-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center"><TrendingUp className="mr-2 text-green-600"/> Placement Statistics (2023)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-green-50 border border-green-100 p-5 rounded-xl text-center">
                  <span className="text-green-800 text-sm font-medium block mb-2">Highest Package</span>
                  <span className="text-3xl font-bold text-green-700">{college.highestPackage}</span>
                </div>
                <div className="bg-blue-50 border border-blue-100 p-5 rounded-xl text-center">
                  <span className="text-blue-800 text-sm font-medium block mb-2">Average Package</span>
                  <span className="text-3xl font-bold text-blue-700">{college.avgPackage}</span>
                </div>
                <div className="bg-purple-50 border border-purple-100 p-5 rounded-xl text-center">
                  <span className="text-purple-800 text-sm font-medium block mb-2">Top Recruiters</span>
                  <span className="text-3xl font-bold text-purple-700">380+</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column (Sidebar widgets) */}
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 border border-border shadow-sm">
              <h3 className="font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-3 shrink-0 text-foreground" />
                  {college.address}
                </li>
              </ul>
              <a href={college.website} target="_blank" rel="noopener noreferrer" className="block text-center w-full mt-6 border border-primary text-primary font-medium py-2 rounded-lg hover:bg-primary/5 transition-colors">Visit Official Website</a>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border shadow-sm">
              <h3 className="font-bold mb-4">Facilities</h3>
              <div className="flex flex-wrap gap-2">
                {["Boys Hostel", "Girls Hostel", "Library", "Cafeteria", "Sports Complex", "Hospital", "Wi-Fi Campus", "Auditorium"].map(fac => (
                  <span key={fac} className="bg-muted text-xs font-medium px-3 py-1.5 rounded-full text-muted-foreground border border-border">
                    {fac}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
