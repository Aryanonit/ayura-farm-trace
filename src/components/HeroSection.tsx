import { Button } from "@/components/ui/button";
import { QrCode, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import heroFarmer from "@/assets/hero-farmer.jpg";


const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen relative gradient-hero leaf-pattern">
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                {t('hero.knowJourney')}{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {t('hero.journey')}
                </span>
                .<br />
                {t('hero.trustSource')}{" "}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  {t('hero.source')}
                </span>
                .
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-lg">
                {t('hero.description')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <QrCode className="w-5 h-5" />
                {t('hero.verifyProduct')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                {t('hero.joinPartner')}
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span>{t('hero.blockchainSecured')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span>{t('hero.aiVerified')}</span>
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
              
              
              {/* Trust Badge */}
              <div className="absolute bottom-8 left-8 bg-accent/90 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-soft">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">{t('hero.authenticated')}</span>
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