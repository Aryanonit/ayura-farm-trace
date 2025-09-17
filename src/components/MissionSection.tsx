import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import heroFarmer from "@/assets/hero-farmer.jpg";

const MissionSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img 
                src={heroFarmer} 
                alt="Farmer in traditional Ayurvedic herb garden"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Quote Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-glow">
                  <div className="flex items-start space-x-3">
                    <Heart className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <blockquote className="text-foreground font-medium text-lg leading-relaxed">
                        "{t('mission.quote')}"
                      </blockquote>
                      <div className="mt-3 text-sm text-muted-foreground">
                        — The Ayura Team
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Empowering{" "}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Tradition
                </span>{" "}
                with{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Technology
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                For thousands of years, Ayurveda has healed through nature's wisdom. Today, we're using blockchain technology to ensure that this ancient knowledge reaches you with complete transparency and authenticity.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Direct support to local farmers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Preserving traditional knowledge</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Building consumer trust</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="earth" size="lg" className="group">
                Join Our Mission
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">Farmers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">99.9%</div>
                  <div className="text-sm text-muted-foreground">Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;