import Link from "next/link";
import { Search, MapPin, Star, TrendingUp, ShieldCheck, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/header-bg.jpg" alt="Campus Library" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4 drop-shadow-lg">
            CollegeDiscovery
          </h1>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-200 mb-6 drop-shadow-md">
            Find Your <span className="text-blue-400">Dream College</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto drop-shadow">
            Discover the best colleges and courses. Use our predictor to know your chances.
          </p>
          
          <form action="/colleges" className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-full shadow-2xl border border-white/20 p-2 flex items-center">
            <div className="pl-6 flex-grow flex items-center">
              <Search className="h-6 w-6 text-white/70 mr-3" />
              <input 
                type="text" 
                name="q"
                placeholder="Search for colleges or courses..." 
                className="w-full bg-transparent border-none outline-none text-lg text-white placeholder:text-white/60"
              />
            </div>
            <button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-semibold transition-all">
              Search
            </button>
          </form>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-300">
            <span className="flex items-center"><TrendingUp className="w-4 h-4 mr-1"/> Trending:</span>
            <Link href="/colleges/iit-bombay" className="hover:text-white transition-colors">IIT Bombay</Link>
            <Link href="/colleges/bits-pilani" className="hover:text-white transition-colors">BITS Pilani</Link>
          </div>
        </div>
      </section>



      {/* Top Colleges Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Top Ranked Colleges</h2>
              <p className="text-muted-foreground">Explore the best institutions across India</p>
            </div>
            <Link href="/colleges" className="text-primary font-medium hover:underline">View All →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Dummy College Card 1 */}
            <div className="group rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all bg-background">
              <div className="h-48 bg-muted relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" className="absolute inset-0 w-full h-full object-cover z-0" alt="IIT Madras" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">#1 NIRF</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">IIT Madras</h3>
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1" /> Chennai, Tamil Nadu
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div className="flex items-center text-sm font-medium">
                    <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                    4.8
                  </div>
                </div>
              </div>
            </div>

            {/* Dummy College Card 2 */}
            <div className="group rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all bg-background">
              <div className="h-48 bg-muted relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=600" className="absolute inset-0 w-full h-full object-cover z-0" alt="IISc Bangalore" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">#2 NIRF</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">IISc Bangalore</h3>
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1" /> Bangalore, Karnataka
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div className="flex items-center text-sm font-medium">
                    <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                    4.9
                  </div>
                </div>
              </div>
            </div>

             {/* Dummy College Card 3 */}
             <div className="group rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all bg-background">
              <div className="h-48 bg-muted relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=600" className="absolute inset-0 w-full h-full object-cover z-0" alt="IIT Bombay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">#3 NIRF</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">IIT Bombay</h3>
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1" /> Mumbai, Maharashtra
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div className="flex items-center text-sm font-medium">
                    <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                    4.7
                  </div>
                </div>
              </div>
            </div>

             {/* Dummy College Card 4 */}
             <div className="group rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all bg-background">
              <div className="h-48 bg-muted relative overflow-hidden">
                <img src="/bits-pilani.jpg" className="absolute inset-0 w-full h-full object-cover z-0" alt="BITS Pilani" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">#25 NIRF</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">BITS Pilani</h3>
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1" /> Pilani, Rajasthan
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div className="flex items-center text-sm font-medium">
                    <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                    4.7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Study Places Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Top Study Places</h2>
            <p className="text-muted-foreground">Discover colleges in India's top educational hubs</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/colleges" className="group relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=600" alt="Delhi NCR" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-white text-xl font-bold mb-1">Delhi NCR</h3>
                <p className="text-white/80 text-sm">250+ Colleges</p>
              </div>
            </Link>
            
            <Link href="/colleges" className="group relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <img src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=600" alt="Maharashtra" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-white text-xl font-bold mb-1">Maharashtra</h3>
                <p className="text-white/80 text-sm">320+ Colleges</p>
              </div>
            </Link>
            
            <Link href="/colleges" className="group relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <img src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=600" alt="Karnataka" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-white text-xl font-bold mb-1">Karnataka</h3>
                <p className="text-white/80 text-sm">280+ Colleges</p>
              </div>
            </Link>
            
            <Link href="/colleges" className="group relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=600" alt="Tamil Nadu" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-white text-xl font-bold mb-1">Tamil Nadu</h3>
                <p className="text-white/80 text-sm">410+ Colleges</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Ready to shape your future?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10">Join thousands of students who have found their ideal educational path with CollegeDiscovery.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/colleges" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all shadow-lg text-center inline-block">
              Explore Colleges
            </Link>
            <Link href="/predictor" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-white border border-white/20 px-8 py-4 rounded-lg font-bold transition-all text-center inline-block">
              Try Predictor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
