import { MessageSquare, ThumbsUp, User } from "lucide-react";
import Link from "next/link";

export default function DiscussionsPage() {
  const discussions = [
    {
      id: 1,
      title: "Is IIT Bombay CS better than IIT Delhi CS?",
      author: "Aman Gupta",
      replies: 24,
      upvotes: 156,
      time: "2 hours ago"
    },
    {
      id: 2,
      title: "Expected cutoff for NIT Trichy OBC-NCL this year?",
      author: "Riya Sharma",
      replies: 8,
      upvotes: 42,
      time: "5 hours ago"
    },
    {
      id: 3,
      title: "Placements at BITS Pilani vs newer IITs",
      author: "Vikram Singh",
      replies: 45,
      upvotes: 312,
      time: "1 day ago"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 min-h-screen">
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Discussions Forum</h1>
            <p className="text-muted-foreground">Ask questions, share advice, and connect with peers.</p>
          </div>
          <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-md">
            Start Discussion
          </button>
        </div>

        <div className="space-y-4">
          {discussions.map((post) => (
            <div key={post.id} className="bg-background border border-border p-5 rounded-xl hover:shadow-md transition-all flex gap-4">
              <div className="flex flex-col items-center gap-1 shrink-0 bg-muted/30 p-2 rounded-lg min-w-[60px]">
                <button className="text-muted-foreground hover:text-primary"><ThumbsUp className="w-5 h-5" /></button>
                <span className="font-bold">{post.upvotes}</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold hover:text-primary cursor-pointer mb-2">{post.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                  <span className="flex items-center"><User className="w-4 h-4 mr-1"/> {post.author}</span>
                  <span className="flex items-center"><MessageSquare className="w-4 h-4 mr-1"/> {post.replies} Replies</span>
                  <span>{post.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-80 shrink-0 space-y-6">
        <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-2">Community Guidelines</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>Be respectful to others.</li>
            <li>No spam or self-promotion.</li>
            <li>Search before posting duplicate questions.</li>
            <li>Provide accurate information.</li>
          </ul>
        </div>
        
        <div className="bg-background border border-border p-6 rounded-xl shadow-sm">
          <h3 className="font-bold text-lg mb-4">Trending Topics</h3>
          <div className="flex flex-wrap gap-2">
            {['JEE Main', 'Placements 2024', 'College Comparison', 'Drop Year', 'NITs vs IITs'].map(topic => (
              <span key={topic} className="bg-muted px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors">
                #{topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
