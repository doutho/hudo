import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export type Language = 'en' | 'de' | 'sv' | 'fr';
export type Country = 'US' | 'DE' | 'UK' | 'SE' | 'FR';

export interface LanguageOption {
  code: Language;
  label: string;
  country: Country;
  amazonDomain: string;
}

export const languageOptions: LanguageOption[] = [
  { code: 'en', label: 'English', country: 'US', amazonDomain: 'amazon.com' },
  { code: 'de', label: 'Deutsch', country: 'DE', amazonDomain: 'amazon.de' },
  { code: 'sv', label: 'Svenska', country: 'SE', amazonDomain: 'amazon.se' },
  { code: 'fr', label: 'Français', country: 'FR', amazonDomain: 'amazon.fr' },
];

interface LanguageSelectorProps {
  onLanguageChange: (option: LanguageOption) => void;
  currentLanguage: LanguageOption;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onLanguageChange,
  currentLanguage,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-primary/10">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={`${option.code}-${option.country}`}
            onClick={() => onLanguageChange(option)}
            className={currentLanguage.code === option.code && currentLanguage.country === option.country ? 'bg-primary/10' : ''}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;