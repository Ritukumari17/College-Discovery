"use client";

import { useState } from "react";
import { Calculator, CheckCircle2 } from "lucide-react";

export default function PredictorPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResult([
        { name: "IIT Madras", chance: "High", cutoff: "99.5" },
        { name: "IIT Bombay", chance: "Medium", cutoff: "99.8" },
        { name: "NIT Trichy", chance: "Very High", cutoff: "98.5" }
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">College Predictor</h1>
          <p className="text-xl text-muted-foreground">Find out which colleges you can get into based on your exam scores and rank.</p>
        </div>

        <div className="bg-background border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 border-b md:border-b-0 md:border-r border-border">
            <h2 className="text-2xl font-bold mb-6 flex items-center"><Calculator className="mr-2" /> Enter Details</h2>
            <form onSubmit={handlePredict} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Select Exam</label>
                <select className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary">
                  <option>JEE Main</option>
                  <option>JEE Advanced</option>
                  <option>NEET</option>
                  <option>GATE</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Your Score / Percentile</label>
                <input required type="number" step="0.01" placeholder="e.g. 98.5" className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary">
                  <option>General</option>
                  <option>OBC-NCL</option>
                  <option>SC</option>
                  <option>ST</option>
                </select>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 transition-all mt-4 disabled:opacity-70 flex justify-center items-center"
              >
                {loading ? "Analyzing Data..." : "Predict Colleges"}
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 p-8 bg-muted/20">
            <h2 className="text-2xl font-bold mb-6">Prediction Results</h2>
            
            {!result && !loading && (
              <div className="h-full flex flex-col items-center justify-center text-muted-foreground opacity-60 pb-10">
                <Calculator className="h-16 w-16 mb-4" />
                <p>Submit your details to see predictions</p>
              </div>
            )}

            {loading && (
              <div className="h-full flex flex-col items-center justify-center space-y-4 pb-10">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                <p className="text-muted-foreground animate-pulse">Running advanced algorithms...</p>
              </div>
            )}

            {result && !loading && (
              <div className="space-y-4">
                {result.map((item: any, i: number) => (
                  <div key={i} className="bg-background border border-border p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Historical Cutoff: {item.cutoff}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-bold flex items-center
                      ${item.chance === 'Very High' ? 'bg-green-100 text-green-700' : 
                        item.chance === 'High' ? 'bg-emerald-100 text-emerald-700' : 
                        'bg-yellow-100 text-yellow-700'}`}>
                      {item.chance === 'Very High' && <CheckCircle2 className="w-4 h-4 mr-1" />}
                      {item.chance} Chance
                    </div>
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm border border-blue-200">
                  <strong>Note:</strong> These predictions are based on previous year trends and opening/closing ranks. Actual results may vary during counseling.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
