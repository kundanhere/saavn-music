import { ListMusic, Play, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import * as Comp from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { playlists } from '@/store/data';

const ActionButton = () => {
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
        <Comp.DropdownMenuItem disabled onClick={() => console.log('add to favorite clicked')}>
          <span>Add to favorites</span>
        </Comp.DropdownMenuItem>
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

const TableListItem = ({ content, idx }) => {
  return (
    <TableRow>
      <TableCell className="w-[60px] p-2 text-center font-medium">{idx}</TableCell>
      <TableCell className="w-[50px] p-2">
        <img className="h-[32px] w-[32px] rounded-sm object-cover" src={content.cover} alt={content.album} />
      </TableCell>
      <TableCell className="min-w-36 max-w-56 p-2">
        <p>{content.name}</p>
        <p className="text-muted-foreground">{content.artist}</p>
      </TableCell>
      <TableCell className="min-w-36 max-w-36 p-2">{content.album}</TableCell>
      <TableCell className="w-[100px] p-2 text-center">{content.released}</TableCell>
      <TableCell className="max-w-32 p-0">
        <span className="flex items-center justify-center gap-1 p-0 align-middle [&:has([role=checkbox])]:pr-0">
          <ActionButton />
          <Button variant="ghost" className="h-12 w-12 rounded-none p-3.5 text-secondary-foreground/70">
            <Play />
          </Button>
        </span>
      </TableCell>
      <TableCell className="w-[60px] p-2 text-center">{content.duration}</TableCell>
    </TableRow>
  );
};

const TrackList = ({ data }) => {
  return (
    <Table>
      <TableBody>
        {data.map((item, index) => (
          <TableListItem key={item.id} content={item} idx={index + 1} />
        ))}
      </TableBody>
    </Table>
  );
};

export default TrackList;
