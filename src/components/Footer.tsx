export default function Footer() {
  return (
    <footer className="bg-muted py-12 mt-auto border-t border-border">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4 text-foreground">CollegeDiscovery</h3>
          <p className="text-muted-foreground text-sm">
            Empowering students to find their dream colleges with accurate data, reviews, and insights.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-foreground">Top Colleges</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Engineering Colleges</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Medical Colleges</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Management Colleges</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Law Colleges</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">College Predictor</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Compare Colleges</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Exam Calendar</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Career Advice</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} CollegeDiscovery. All rights reserved.
      </div>
    </footer>
  )
}
