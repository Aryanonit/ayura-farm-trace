import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Factory, Search, QrCode, Package, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useState } from "react";

const DemoSection = () => {
  const { t } = useLanguage();
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const demoViews = [
    {
      id: 'farmer',
      title: t('demo.farmer'),
      icon: User,
      color: 'from-accent to-accent/70',
      component: <FarmerDemo />
    },
    {
      id: 'processor',
      title: t('demo.processor'),
      icon: Factory,
      color: 'from-primary to-primary/70',
      component: <ProcessorDemo />
    },
    {
      id: 'consumer',
      title: t('demo.consumer'),
      icon: Search,
      color: 'from-secondary to-secondary/70',
      component: <ConsumerDemo />
    }
  ];

  return (
    <section className="py-20 gradient-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Interactive{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Demo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience how Ayura works from different perspectives
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {demoViews.map((demo) => {
            const IconComponent = demo.icon;
            return (
              <Card 
                key={demo.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  activeDemo === demo.id ? 'ring-2 ring-primary shadow-glow' : ''
                }`}
                onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${demo.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                  <Button 
                    variant={activeDemo === demo.id ? "default" : "outline"}
                    className="w-full"
                  >
                    {activeDemo === demo.id ? 'Close Demo' : 'Try Demo'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {activeDemo && (
          <div className="animate-fade-in">
            {demoViews.find(demo => demo.id === activeDemo)?.component}
          </div>
        )}
      </div>
    </section>
  );
};

const FarmerDemo = () => {
  const [step, setStep] = useState(1);
  
  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">Farmer Dashboard</h3>
        
        {step === 1 && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Create New Batch</h4>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Herb Type</label>
                <select className="w-full p-3 border rounded-lg">
                  <option>Select Herb</option>
                  <option>Ashwagandha</option>
                  <option>Turmeric</option>
                  <option>Neem</option>
                  <option>Brahmi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Quantity (kg)</label>
                <input type="number" className="w-full p-3 border rounded-lg" placeholder="100" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Farm Location</label>
                <Button variant="outline" className="w-full justify-start">
                  <QrCode className="w-4 h-4 mr-2" />
                  Use Current Location
                </Button>
              </div>
            </div>
            <Button onClick={() => setStep(2)} className="w-full">
              Create Batch & Generate QR
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="text-center space-y-6">
            <CheckCircle className="w-16 h-16 text-accent mx-auto" />
            <h4 className="text-xl font-bold text-accent">Batch Created Successfully!</h4>
            <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300 mx-auto w-fit">
              <QrCode className="w-32 h-32 text-gray-400 mx-auto" />
              <p className="text-sm text-gray-600 mt-2">Batch ID: ASH-2024-001</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1">Print QR Code</Button>
              <Button variant="outline" className="flex-1">Share via WhatsApp</Button>
            </div>
            <Button onClick={() => setStep(1)} variant="ghost">Create Another Batch</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ProcessorDemo = () => {
  const [step, setStep] = useState(1);
  
  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">Processor Dashboard</h3>
        
        {step === 1 && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Scan Incoming Batch</h4>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <QrCode className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Point camera at QR code or enter Batch ID</p>
              <input 
                type="text" 
                placeholder="Enter Batch ID (e.g., ASH-2024-001)"
                className="w-full p-3 border rounded-lg mb-4"
              />
              <Button onClick={() => setStep(2)} className="w-full">
                Verify & Process Batch
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Batch Verification</h4>
            <div className="bg-accent/10 p-4 rounded-lg">
              <h5 className="font-medium mb-2">Original Batch Info:</h5>
              <p><strong>Herb:</strong> Ashwagandha</p>
              <p><strong>Farmer:</strong> Ramesh Kumar</p>
              <p><strong>Quantity:</strong> 100 kg</p>
              <p><strong>Location:</strong> Haridwar, Uttarakhand</p>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-medium">Add Processing Step:</h5>
              <div>
                <label className="block text-sm font-medium mb-2">Processing Type</label>
                <select className="w-full p-3 border rounded-lg">
                  <option>Cleaning & Drying</option>
                  <option>Powder Processing</option>
                  <option>Extract Preparation</option>
                  <option>Quality Testing</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Upload Certificate</label>
                <Button variant="outline" className="w-full justify-start">
                  <Package className="w-4 h-4 mr-2" />
                  Upload Lab Report (PDF)
                </Button>
              </div>
            </div>
            <Button onClick={() => setStep(3)} className="w-full">
              Add to Blockchain
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="text-center space-y-6">
            <CheckCircle className="w-16 h-16 text-primary mx-auto" />
            <h4 className="text-xl font-bold text-primary">Processing Step Added!</h4>
            <p className="text-gray-600">Batch ASH-2024-001 has been updated with your processing information.</p>
            <Button onClick={() => setStep(1)} className="w-full">Process Another Batch</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ConsumerDemo = () => {
  const [step, setStep] = useState(1);
  
  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">Consumer Verification</h3>
        
        {step === 1 && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Verify Product Authenticity</h4>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Scan QR code on your product or enter Batch ID</p>
              <input 
                type="text" 
                placeholder="Enter Batch ID (e.g., ASH-2024-001)"
                className="w-full p-3 border rounded-lg mb-4"
                defaultValue="ASH-2024-001"
              />
              <Button onClick={() => setStep(2)} className="w-full">
                Verify Product
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-bold text-accent">✓ 100% Authentic</h4>
              <p className="text-gray-600">This product has been verified on the blockchain</p>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold">Product Journey:</h5>
              
              <div className="relative">
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-300"></div>
                
                <div className="flex items-start space-x-4 pb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <div>
                    <h6 className="font-medium">Farm Harvest</h6>
                    <p className="text-sm text-gray-600">Ramesh Kumar, Haridwar</p>
                    <p className="text-xs text-gray-500">March 15, 2024</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 pb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <div>
                    <h6 className="font-medium">Processing & Testing</h6>
                    <p className="text-sm text-gray-600">Organic Labs Pvt Ltd</p>
                    <p className="text-xs text-gray-500">March 20, 2024</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <div>
                    <h6 className="font-medium">Ready for Consumer</h6>
                    <p className="text-sm text-gray-600">Quality Certified</p>
                    <p className="text-xs text-gray-500">March 25, 2024</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1">View Certificates</Button>
              <Button variant="outline" className="flex-1">See on Map</Button>
            </div>
            <Button onClick={() => setStep(1)} variant="ghost" className="w-full">Verify Another Product</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DemoSection;