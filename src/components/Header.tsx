import { Menu, Search, User } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6 text-white" />
          </Button>
          
          <div className="flex items-center space-x-8">
            <img src="/lovable-uploads/59350df8-5389-4d55-a852-713c5206b11c.png" alt="Witz Africa Logo" className="h-8" />
          </div>

          <div className="flex-1 max-w-2xl mx-auto px-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search Categories"
                className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              />
            </div>
          </div>

          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>
    </header>
  );
};