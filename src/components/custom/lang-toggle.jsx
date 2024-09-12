import { Languages } from 'lucide-react';
import { useLanguage } from '@/providers/language-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const LanguageToggle = () => {
  const { setLang } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="inline-flex w-14 focus-visible:ring-0 focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
        >
          <Languages className="mr-1 h-4 w-4" />
          <p className="text-xs rotate-0 scale-100 transition-all hindi:-rotate-90 hindi:scale-0">EN</p>
          <p className="text-xs absolute rotate-90 scale-0 transition-all hindi:rotate-0 hindi:scale-100">HI</p>
          <span className="sr-only">Music Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLang('hindi')}>Hindi</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang('english')}>English</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;

// flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium
