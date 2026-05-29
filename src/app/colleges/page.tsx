"use client";

import Link from "next/link";
import { Filter, Search, MapPin, Star, ChevronDown, Square, CheckSquare, X } from "lucide-react";
import { useState, useEffect } from "react";

const initialColleges = [
  {
    id: "iit-madras",
    name: "Indian Institute of Technology (IIT) Madras",
    location: "Chennai, Tamil Nadu",
    ranking: "#1 NIRF",
    rating: "4.8",
    reviews: 420,
    highlight: "Excellent Infrastructure",
    fees: "₹2,14,000",
    placement: "₹21.48 LPA",
    applyLink: "https://study.iitm.ac.in/es/admissions.html",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "iit-bombay",
    name: "Indian Institute of Technology (IIT) Bombay",
    location: "Mumbai, Maharashtra",
    ranking: "#3 NIRF",
    rating: "4.9",
    reviews: 612,
    highlight: "Top Placements",
    fees: "₹2,30,000",
    placement: "₹23.50 LPA",
    applyLink: "https://www.iitb.ac.in/newacadhome/toadmission.jsp",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "iisc-bangalore",
    name: "Indian Institute of Science (IISc)",
    location: "Bangalore, Karnataka",
    ranking: "#2 NIRF",
    rating: "4.9",
    reviews: 315,
    highlight: "Best for Research",
    fees: "₹1,10,000",
    placement: "₹28.00 LPA",
    applyLink: "https://admissions.iisc.ac.in/",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "bits-pilani",
    name: "BITS Pilani",
    location: "Pilani, Rajasthan",
    ranking: "#25 NIRF",
    rating: "4.7",
    reviews: 840,
    highlight: "No Reservation Policy",
    fees: "₹2,91,500",
    placement: "₹30.37 LPA",
    applyLink: "https://www.bits-pilani.ac.in/admissions/",
    image: "/bits-pilani.jpg"
  }
];

export default function CollegesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('q');
      if (q) setSearchQuery(q);

      const compareParams = params.get('compare');
      if (compareParams) {
        const ids = compareParams.split(',');
        setCompareList(ids);
        if (ids.length >= 2) {
          setShowCompareModal(true);
        }
      }
    }
  }, []);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedFees, setSelectedFees] = useState<string[]>([]);
  
  // Compare State
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const toggleCompare = (id: string) => {
    setCompareList(prev => {
      if (prev.includes(id)) return prev.filter(c => c !== id);
      if (prev.length >= 3) {
        alert("You can only compare up to 3 colleges at once.");
        return prev;
      }
      return [...prev, id];
    });
  };

  const handleLocationChange = (state: string) => {
    setSelectedLocations(prev => 
      prev.includes(state) ? prev.filter(l => l !== state) : [...prev, state]
    );
  };

  const handleFeeChange = (fee: string) => {
    setSelectedFees(prev => 
      prev.includes(fee) ? prev.filter(f => f !== fee) : [...prev, fee]
    );
  };

  const clearFilters = () => {
    setSelectedLocations([]);
    setSelectedFees([]);
    setSearchQuery("");
  };

  const getFeeNumeric = (feeStr: string) => parseInt(feeStr.replace(/[^\d]/g, ''), 10);

  const filteredColleges = initialColleges.filter(college => {
    // 1. Search Query
    const matchesSearch = 
      college.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      college.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;

    // 2. Location Filter
    if (selectedLocations.length > 0) {
      const matchesLocation = selectedLocations.some(loc => college.location.includes(loc));
      if (!matchesLocation) return false;
    }

    // 3. Fees Filter
    if (selectedFees.length > 0) {
      const collegeFee = getFeeNumeric(college.fees);
      const matchesFee = selectedFees.some(feeFilter => {
        if (feeFilter === '< ₹2,00,000') return collegeFee < 200000;
        if (feeFilter === '₹2,00,000 - ₹2,50,000') return collegeFee >= 200000 && collegeFee <= 250000;
        if (feeFilter === '> ₹2,50,000') return collegeFee > 250000;
        return false;
      });
      if (!matchesFee) return false;
    }

    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Explore Colleges</h1>
          <p className="text-muted-foreground">Find the best college based on your preferences</p>
        </div>
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search by name, city..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-80 bg-background border border-border rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 pb-20">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-background border border-border rounded-xl p-5 sticky top-24">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
              <h3 className="font-bold flex items-center"><Filter className="w-4 h-4 mr-2"/> Filters</h3>
              <button onClick={clearFilters} className="text-xs text-primary font-medium hover:underline">Clear All</button>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 flex justify-between items-center text-sm">Location <ChevronDown className="w-4 h-4"/></h4>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                {['Delhi NCR', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Rajasthan', 'Uttar Pradesh', 'West Bengal', 'Gujarat', 'Punjab', 'Telangana', 'Kerala', 'Madhya Pradesh'].map(state => (
                  <label key={state} className="flex items-center text-sm cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedLocations.includes(state)}
                      onChange={() => handleLocationChange(state)}
                      className="rounded border-border text-primary focus:ring-primary mr-2 cursor-pointer" 
                    />
                    {state}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-3 flex justify-between items-center text-sm">Avg Fees (Per Year) <ChevronDown className="w-4 h-4"/></h4>
              <div className="space-y-2">
                {['< ₹2,00,000', '₹2,00,000 - ₹2,50,000', '> ₹2,50,000'].map(fee => (
                  <label key={fee} className="flex items-center text-sm cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedFees.includes(fee)}
                      onChange={() => handleFeeChange(fee)}
                      className="rounded border-border text-primary focus:ring-primary mr-2 cursor-pointer" 
                    />
                    {fee}
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-all">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow space-y-6">
          <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
            <span>Showing {filteredColleges.length} of {initialColleges.length} colleges</span>
            <select className="bg-background border border-border rounded px-3 py-1 outline-none focus:border-primary">
              <option>Sort by: Popularity</option>
              <option>Sort by: Ranking</option>
              <option>Sort by: Fees (Low to High)</option>
              <option>Sort by: Reviews</option>
            </select>
          </div>

          {/* College Listings */}
          {filteredColleges.length > 0 ? filteredColleges.map((college, idx) => (
            <div key={idx} className="bg-background border border-border rounded-xl p-5 flex flex-col md:flex-row gap-6 hover:shadow-md transition-all">
              <div className="w-full md:w-48 h-32 bg-muted rounded-lg shrink-0 overflow-hidden relative">
                 {/* @ts-ignore */}
                 <img src={college.image} alt={college.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-primary hover:underline cursor-pointer">
                      <Link href={`/colleges/${college.id}`}>{college.name}</Link>
                    </h3>
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded hidden md:block">{college.ranking}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm mt-1 mb-3">
                    <MapPin className="h-4 w-4 mr-1" /> {college.location}
                  </div>
                  <div className="flex items-center text-sm font-medium mb-3">
                    <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                    {college.rating} <span className="text-muted-foreground ml-1 font-normal">({college.reviews} reviews) • {college.highlight}</span>
                  </div>
                </div>
                <div className="flex gap-4 pt-4 border-t border-border mt-2 text-sm">
                  <div>
                    <span className="text-muted-foreground block text-xs">B.Tech First Year Fees</span>
                    <span className="font-semibold">{college.fees}</span>
                  </div>
                  <div className="w-px bg-border"></div>
                  <div>
                    <span className="text-muted-foreground block text-xs">Avg Placement</span>
                    <span className="font-semibold">{college.placement}</span>
                  </div>
                  <div className="flex-grow flex justify-end items-center">
                    <button 
                      onClick={() => toggleCompare(college.id)} 
                      className={`font-medium mr-4 flex items-center transition-colors ${compareList.includes(college.id) ? 'text-green-600' : 'text-primary hover:underline'}`}
                    >
                      {compareList.includes(college.id) ? <><CheckSquare className="w-4 h-4 mr-1"/> Added</> : <><Square className="w-4 h-4 mr-1"/> Compare</>}
                    </button>
                    {/* @ts-ignore */}
                    {college.applyLink ? (
                      /* @ts-ignore */
                      <a href={college.applyLink} target="_blank" rel="noopener noreferrer" className="bg-primary/10 text-primary px-4 py-1.5 rounded-lg font-medium hover:bg-primary/20 transition-all inline-block">Apply Now</a>
                    ) : (
                      <button className="bg-primary/10 text-primary px-4 py-1.5 rounded-lg font-medium hover:bg-primary/20 transition-all">Apply Now</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )) : (
            <div className="text-center py-12 text-muted-foreground bg-background rounded-xl border border-border">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>No colleges found matching your current filters.</p>
              <button onClick={clearFilters} className="mt-4 text-primary hover:underline font-medium">Clear all filters</button>
            </div>
          )}
        </div>
      </div>

      {/* Sticky Compare Tray */}
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border shadow-[0_-4px_25px_rgba(0,0,0,0.1)] p-4 z-40 animate-in slide-in-from-bottom flex justify-between items-center">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="font-bold text-lg"><span className="text-primary">{compareList.length}</span> / 3 Colleges Selected</div>
              <div className="hidden md:flex gap-2 text-sm text-muted-foreground">
                {compareList.map(id => {
                  const c = initialColleges.find(col => col.id === id);
                  return <span key={id} className="bg-muted px-3 py-1 rounded-full font-medium border border-border">{c?.name.split(' (')[0]}</span>
                })}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setCompareList([])} className="px-4 py-2 text-sm font-medium hover:underline text-muted-foreground">Clear All</button>
              <button 
                onClick={() => setShowCompareModal(true)}
                disabled={compareList.length < 2}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-bold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm flex items-center"
              >
                Compare Now {compareList.length < 2 && "(Select at least 2)"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Compare Modal */}
      {showCompareModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in">
          <div className="bg-background w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col relative">
            <div className="p-6 border-b border-border flex justify-between items-center sticky top-0 bg-background z-10">
              <div>
                <h2 className="text-2xl font-bold">Compare Colleges</h2>
                <p className="text-muted-foreground text-sm">A side-by-side comparison of your selected institutions.</p>
              </div>
              <button onClick={() => setShowCompareModal(false)} className="p-2 hover:bg-muted rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    <th className="p-4 bg-muted/30 w-1/4 font-semibold text-lg border-r border-border border-b align-top">Feature</th>
                    {compareList.map(id => {
                      const c = initialColleges.find(col => col.id === id);
                      return (
                        <th key={id} className="p-4 w-1/4 border-r border-border border-b bg-white align-top">
                          <h3 className="font-bold text-lg text-primary leading-tight">{c?.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1 flex items-center"><MapPin className="w-3 h-3 mr-1"/>{c?.location}</p>
                        </th>
                      )
                    })}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/5 transition-colors">
                    <td className="p-4 bg-muted/30 font-medium text-muted-foreground border-r border-border">Ranking</td>
                    {compareList.map(id => <td key={id} className="p-4 border-r border-border font-semibold">{initialColleges.find(c => c.id === id)?.ranking}</td>)}
                  </tr>
                  <tr className="hover:bg-muted/5 transition-colors">
                    <td className="p-4 bg-muted/30 font-medium text-muted-foreground border-r border-border">Total Fees (First Year)</td>
                    {compareList.map(id => <td key={id} className="p-4 border-r border-border font-semibold text-red-600">{initialColleges.find(c => c.id === id)?.fees}</td>)}
                  </tr>
                  <tr className="hover:bg-muted/5 transition-colors">
                    <td className="p-4 bg-muted/30 font-medium text-muted-foreground border-r border-border">Average Placement</td>
                    {compareList.map(id => <td key={id} className="p-4 border-r border-border font-semibold text-green-600">{initialColleges.find(c => c.id === id)?.placement}</td>)}
                  </tr>
                  <tr className="hover:bg-muted/5 transition-colors">
                    <td className="p-4 bg-muted/30 font-medium text-muted-foreground border-r border-border">Rating</td>
                    {compareList.map(id => <td key={id} className="p-4 border-r border-border">
                      <div className="flex items-center font-medium">
                        <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                        {initialColleges.find(c => c.id === id)?.rating} 
                        <span className="text-muted-foreground font-normal text-xs ml-1">({initialColleges.find(c => c.id === id)?.reviews} reviews)</span>
                      </div>
                    </td>)}
                  </tr>
                  <tr className="hover:bg-muted/5 transition-colors">
                    <td className="p-4 bg-muted/30 font-medium text-muted-foreground border-r border-border">Action</td>
                    {compareList.map(id => <td key={id} className="p-4 border-r border-border">
                      {/* @ts-ignore */}
                      <a href={initialColleges.find(c => c.id === id)?.applyLink} target="_blank" rel="noopener noreferrer" className="block text-center bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary/20 transition-all">
                        Apply Now
                      </a>
                    </td>)}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
