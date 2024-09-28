import { ChevronLeft, ChevronRight, LogOut, Menu, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import * as Comp from '@/components/ui/menubar';
import * as MN from '@/components/ui/sheet';

import usePageNavigation from '@/hooks/use-page-navigation';

import { useStore } from '@/store/use-store';

import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import InfoCard from './info-card';
import { LanguageToggle } from './lang-toggle';
import { ModeToggle } from './mode-toggle';
import Sidebar from './sidebar';

const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission
};

const Navbar = () => {
  let { canGoBack } = useStore();
  const { handleGoBack, handleGoForward } = usePageNavigation();

  return (
    <>
      <Comp.Menubar className="flex items-center justify-between px-2 py-6 lg:px-4">
        <div className="flex flex-shrink items-center space-x-1">
          {/* app logo */}
          <InfoCard />
          {/* menu items  */}
          <Comp.MenubarMenu>
            <Comp.MenubarTrigger>View</Comp.MenubarTrigger>
            <Comp.MenubarContent>
              <Comp.MenubarItem inset>Show Playing Next</Comp.MenubarItem>
              <Comp.MenubarCheckboxItem checked disabled>
                Show Lyrics
              </Comp.MenubarCheckboxItem>
              <Comp.MenubarSeparator />
              <Comp.MenubarItem inset>Hide Sidebar</Comp.MenubarItem>
            </Comp.MenubarContent>
          </Comp.MenubarMenu>
          <Comp.MenubarMenu>
            <Comp.MenubarTrigger>Account</Comp.MenubarTrigger>
            <Comp.MenubarContent>
              <Comp.MenubarRadioGroup value="admin">
                <Comp.MenubarLabel>Switch Account</Comp.MenubarLabel>
                <Comp.MenubarSeparator />
                <Comp.MenubarRadioItem value="admin">Admin</Comp.MenubarRadioItem>
                <Comp.MenubarRadioItem value="guest">Guest User</Comp.MenubarRadioItem>
              </Comp.MenubarRadioGroup>
              <Comp.MenubarSeparator />
              <Comp.MenubarItem>Add Account...</Comp.MenubarItem>
              <Comp.MenubarSeparator />
              <Comp.MenubarItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <Comp.MenubarShortcut>⇧⌘Q</Comp.MenubarShortcut>
              </Comp.MenubarItem>
            </Comp.MenubarContent>
          </Comp.MenubarMenu>
        </div>

        {/* navigation buttons */}
        <div className="flex flex-1 justify-start gap-1 pl-6">
          <Button
            disabled={!canGoBack}
            variant="outline"
            className="flex size-8 items-center justify-center rounded-md p-1"
            onClick={handleGoBack}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            className="flex size-8 items-center justify-center rounded-md p-1"
            onClick={handleGoForward}
          >
            <ChevronRight />
          </Button>
        </div>

        {/* search input */}
        <form className="relative flex flex-grow" onSubmit={handleSubmit}>
          <Search className="absolute left-2 top-2 h-4 w-4" aria-hidden="true" />
          <Input
            name="search"
            type="text"
            placeholder="Search by artists, songs, or albums"
            className="h-8 border-b-[1.5px] pl-8 shadow-sm outline-none focus:text-accent-foreground focus-visible:border-b-primary focus-visible:ring-transparent"
          />
        </form>

        {/* Change app theme and language */}
        <div className="flex flex-1 justify-end gap-1">
          <span className="hidden gap-1 lg:flex">
            <LanguageToggle />
            <ModeToggle />
          </span>
          {/* Mobille menu */}
          <MN.Sheet>
            <MN.SheetTrigger className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground lg:hidden">
              <Menu className="h-[1.2rem] w-[1.2rem]" />
            </MN.SheetTrigger>
            <MN.SheetContent side="left" className="w-[255px] px-0 py-2 lg:hidden">
              <MN.SheetHeader className="items-start px-5">
                <InfoCard />
                <MN.SheetTitle className="hidden" />
                <MN.SheetDescription className="hidden" />
              </MN.SheetHeader>
              <Separator className="mt-1" />
              <ScrollArea className="flex max-h-[calc(100vh-3.2rem)] min-h-[calc(100vh-3.2rem)] flex-col">
                <Sidebar />
                <Separator className="mt-1" />
                <MN.SheetFooter className="!flex-row !justify-start !space-x-1">
                  <LanguageToggle />
                  <ModeToggle />
                </MN.SheetFooter>
              </ScrollArea>
            </MN.SheetContent>
          </MN.Sheet>
        </div>
      </Comp.Menubar>
    </>
  );
};

export default Navbar;
