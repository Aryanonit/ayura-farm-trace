import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import LanguageSwitch from "@/components/LanguageSwitch";

const Navbar = () => {
  const { t } = useLanguage();
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold text-foreground">Ayura</span>
            <span className="hidden sm:inline-block text-sm text-muted-foreground ml-2">
              {t('nav.tagline')}
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <LanguageSwitch />
            <Button variant="ghost" className="hidden md:inline-flex">
              {t('nav.learnMore')}
            </Button>
            <Button variant="outline">
              {t('nav.loginSignup')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;