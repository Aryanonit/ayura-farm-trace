import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Languages } from "lucide-react";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
      className="flex items-center gap-2"
    >
      <Languages className="w-4 h-4" />
      {language === 'en' ? 'हिं' : 'EN'}
    </Button>
  );
};

export default LanguageSwitch;