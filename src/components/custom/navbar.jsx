import { LogOut, Search } from 'lucide-react';
import InfoCard from '@/components/custom/info-card';
import { Input } from '@/components/ui/input';
import { ModeToggle } from '@/components/custom/mode-toggle';
import { LanguageToggle } from '@/components/custom/lang-toggle';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';

const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission
};

const Navbar = () => {
  return (
    <>
      <Menubar className="flex justify-between items-center px-2 lg:px-4 py-6">
        <div className="flex flex-1 items-center space-x-1">
          <InfoCard />
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem inset>Show Playing Next</MenubarItem>
              <MenubarCheckboxItem checked disabled>
                Show Lyrics
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem inset>Hide Sidebar</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Account</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="admin">
                <MenubarLabel>Switch Account</MenubarLabel>
                <MenubarSeparator />
                <MenubarRadioItem value="admin">Admin</MenubarRadioItem>
                <MenubarRadioItem value="guest">Guest User</MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem>Add Account...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <MenubarShortcut>⇧⌘Q</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </div>

        {/* search input */}
        <form className="relative flex flex-1" onSubmit={handleSubmit}>
          <Search className="absolute left-2 top-2 h-4 w-4" aria-hidden="true" />
          <Input
            name="search"
            type="text"
            placeholder="Search Albums, Songs, and Playlists..."
            className="pl-8 h-8 shadow-sm outline-none focus-visible:border-b-[1.5px] focus-visible:border-b-primary focus-visible:ring-transparent focus:text-accent-foreground"
          />
        </form>

        {/* Change app theme and language */}
        <div className="flex flex-1 justify-end gap-2">
          <LanguageToggle />
          <ModeToggle />
        </div>
      </Menubar>
    </>
  );
};

export default Navbar;
