import { Languages } from 'lucide-react';
import { useLanguage } from '@/providers/language-provider';
import { Button } from '@/components/ui/button';
import * as Comp from '@/components/ui/dropdown-menu';

export const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <Comp.DropdownMenu>
      <Comp.DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative pl-2 flex justify-start w-14 focus-visible:ring-0 focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
        >
          <Languages className="h-4 w-4" />
          <span
            className={`text-xs absolute left-7 transition-all ${lang !== 'hindi' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`}
          >
            EN
          </span>
          <span
            className={`text-xs absolute left-7 transition-all ${lang !== 'english' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`}
          >
            HI
          </span>
          <span className="sr-only">Music Language</span>
        </Button>
      </Comp.DropdownMenuTrigger>
      <Comp.DropdownMenuContent align="end">
        <Comp.DropdownMenuItem onClick={() => setLang('hindi')}>Hindi</Comp.DropdownMenuItem>
        <Comp.DropdownMenuItem onClick={() => setLang('english')}>English</Comp.DropdownMenuItem>
      </Comp.DropdownMenuContent>
    </Comp.DropdownMenu>
  );
};

export default LanguageToggle;
