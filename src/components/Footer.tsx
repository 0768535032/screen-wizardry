import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="/lovable-uploads/59350df8-5389-4d55-a852-713c5206b11c.png" alt="Witz Africa Logo" className="h-8 mb-6" />
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Get help</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Add your service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sign Up to deliver</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Create a business account</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shop Groceries</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pickups Near Me</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">View all locations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Witz Africa</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Download App</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="block">
                <img src="https://via.placeholder.com/120x40" alt="App Store" className="h-10" />
              </a>
              <a href="#" className="block">
                <img src="https://via.placeholder.com/120x40" alt="Google Play" className="h-10" />
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a>
            </div>
            <p className="text-sm text-gray-400">© 2024 Witz Africa</p>
          </div>
        </div>
      </div>
    </footer>
  );
};