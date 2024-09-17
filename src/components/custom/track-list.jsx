import { ListMusic, Play, Plus } from 'lucide-react';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import * as Comp from '@/components/ui/dropdown-menu';
import { playlists } from '@/store/data';

const ActionButton = () => {
  return (
    <Comp.DropdownMenu>
      <Comp.DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="w-12 h-12 p-3.5 focus-visible:ring-0 outline-0 border-none rounded-none text-secondary-foreground/70 "
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
      <TableCell className="font-medium w-[60px] text-center p-2">{idx}</TableCell>
      <TableCell className="w-[50px] p-2">
        <img className="w-[32px] h-[32px] rounded-sm object-cover" src={content.cover} alt={content.album} />
      </TableCell>
      <TableCell className="p-2 min-w-36 max-w-56">
        <p>{content.name}</p>
        <p className="text-muted-foreground">{content.artist}</p>
      </TableCell>
      <TableCell className="p-2 min-w-36 max-w-36">{content.album}</TableCell>
      <TableCell className="w-[100px] text-center p-2">{content.released}</TableCell>
      <TableCell className="max-w-32 p-0">
        <span className="align-middle [&:has([role=checkbox])]:pr-0 flex p-0 gap-1 items-center justify-center">
          <ActionButton />
          <Button variant="ghost" className="w-12 h-12 p-3.5 rounded-none text-secondary-foreground/70">
            <Play />
          </Button>
        </span>
      </TableCell>
      <TableCell className="w-[60px] text-center p-2">{content.duration}</TableCell>
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
