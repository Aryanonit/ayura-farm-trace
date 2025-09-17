import { Shield, Users, FileCheck, Eye } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const FeaturesSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Shield,
      title: t('features.blockchain.title'),
      description: t('features.blockchain.description'),
      gradient: "from-accent to-accent/70"
    },
    {
      icon: Users,
      title: t('features.farmer.title'), 
      description: t('features.farmer.description'),
      gradient: "from-primary to-primary/70"
    },
    {
      icon: FileCheck,
      title: t('features.ipfs.title'),
      description: t('features.ipfs.description'),
      gradient: "from-secondary to-secondary/70"
    },
    {
      icon: Eye,
      title: t('features.tracking.title'),
      description: t('features.tracking.description'),
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-20 gradient-organic">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('features.title')}{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              {t('features.works')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('features.description')}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden"
              >
                <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-glow transition-smooth border border-border/30 hover:border-primary/20 h-full">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-spring`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-smooth rounded-2xl`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;