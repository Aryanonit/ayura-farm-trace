import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">Ayura</span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Bringing radical transparency to Ayurveda through blockchain technology. From farm to your hands.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2">
                <Mail className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <MapPin className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Verify Products</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Farmer Dashboard</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Processor Portal</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">API Documentation</a></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>
          
          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground/60 text-sm">
            © 2024 Ayura. All rights reserved. Built with trust, secured by blockchain.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-xs text-secondary-foreground/60">Powered by</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-accent">Blockchain</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;