import { Sprout, Link2, QrCode } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Sprout,
      title: "Register at the Source",
      description: "Farmers create a digital identity for each batch with a single tap, geo-tagging it on the blockchain.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Link2,
      title: "Update the Journey", 
      description: "Processors and distributors add their step to the immutable ledger, creating an unbroken chain of custody.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: QrCode,
      title: "Verify with a Scan",
      description: "Consumers scan the product's QR code to instantly view its complete, verified history.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Three Steps to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Trust
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience radical transparency in the Ayurvedic supply chain through our simple, secure process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="relative group hover:scale-105 transition-spring"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-soft">
                  {index + 1}
                </div>
                
                <div className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-glow transition-smooth border border-border/50">
                  <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-8 h-8 ${step.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 w-8 lg:w-12 h-0.5 bg-gradient-to-r from-primary to-accent opacity-60"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;