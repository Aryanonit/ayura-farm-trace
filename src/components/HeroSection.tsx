import { Button } from "@/components/ui/button";
import { QrCode, ArrowRight } from "lucide-react";
import heroFarmer from "@/assets/hero-farmer.jpg";
import traceabilityFlow from "@/assets/traceability-flow.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative gradient-hero leaf-pattern">
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Know the{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Journey
                </span>
                .<br />
                Trust the{" "}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Source
                </span>
                .
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-lg">
                Ayura brings radical transparency to Ayurveda. Scan any product to trace its authentic story from the farm to your hands.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <QrCode className="w-5 h-5" />
                Verify a Product
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Join as a Partner
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span>Blockchain Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span>AI Verified</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Interactive Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img 
                src={heroFarmer} 
                alt="Authentic Indian farmer in organic herb farm"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Floating Traceability Visual */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-glow">
                <img 
                  src={traceabilityFlow} 
                  alt="Digital traceability flow from farm to consumer"
                  className="w-48 h-36 object-cover rounded-lg"
                />
                <div className="mt-2 text-xs text-center text-foreground font-medium">
                  Farm → Processing → You
                </div>
              </div>
              
              {/* Trust Badge */}
              <div className="absolute bottom-8 left-8 bg-accent/90 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-soft">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">100% Authenticated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;