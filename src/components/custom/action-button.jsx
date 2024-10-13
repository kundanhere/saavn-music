import { ListMusic, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import * as Comp from '@/components/ui/dropdown-menu';

import { playlists } from '@/store/data';

import DownloadLink from './download-link';

/**
 * Renders a dropdown menu with options to download a file, add to favorites, and add to playlists.
 * The dropdown is triggered by a button with a "+" icon.
 * The data prop is expected to have a downloadUrl and name property.
 *
 * @param {Object} data - The data object containing the download URL and file name.
 * @param {string} data.downloadUrl - The URL of the file to download.
 * @param {string} data.name - The name of the file.
 * @returns {JSX.Element} - The ActionButton component.
 */
const ActionButton = ({ data }) => {
  return (
    <Comp.DropdownMenu>
      <Comp.DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-12 w-12 rounded-none border-none p-3.5 text-secondary-foreground/70 outline-0 focus-visible:ring-0"
        >
          <Plus />
          <span className="sr-only">Add</span>
        </Button>
      </Comp.DropdownMenuTrigger>
      <Comp.DropdownMenuContent align="end">
        <DownloadLink url={data?.downloadUrl[4].url} fileName={`${data?.name}.mp3`} />
        <Comp.DropdownMenuItem disabled onClick={() => console.log('add to favorite clicked')}>
          <span>Add to favorites</span>
        </Comp.DropdownMenuItem>

        <Comp.DropdownMenuSeparator />
        <Comp.DropdownMenuSub>
          <Comp.DropdownMenuSubTrigger>
            <span>Add to playlists</span>
          </Comp.DropdownMenuSubTrigger>
          <Comp.DropdownMenuPortal>
            <Comp.DropdownMenuSubContent>
              {playlists.map((playlist, index) => (
                <Comp.DropdownMenuItem key={index} onClick={() => console.log('add to playlist clicked')}>
                  <ListMusic className="mr-2 h-4 w-4" />
                  <span>{playlist}</span>
                </Comp.DropdownMenuItem>
              ))}
            </Comp.DropdownMenuSubContent>
          </Comp.DropdownMenuPortal>
        </Comp.DropdownMenuSub>
      </Comp.DropdownMenuContent>
    </Comp.DropdownMenu>
  );
};

export default ActionButton;
