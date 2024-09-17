import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/providers/theme-provider';
import { Button } from '@/components/ui/button';
import * as Comp from '@/components/ui/dropdown-menu';

export const ModeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <Comp.DropdownMenu>
      <Comp.DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="focus-visible:ring-0 focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </Comp.DropdownMenuTrigger>
      <Comp.DropdownMenuContent align="end">
        <Comp.DropdownMenuItem onClick={() => setTheme('light')}>Light</Comp.DropdownMenuItem>
        <Comp.DropdownMenuItem onClick={() => setTheme('dark')}>Dark</Comp.DropdownMenuItem>
        <Comp.DropdownMenuItem onClick={() => setTheme('system')}>System</Comp.DropdownMenuItem>
      </Comp.DropdownMenuContent>
    </Comp.DropdownMenu>
  );
};
