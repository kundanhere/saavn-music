import { Play } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { capitalizeFirstLetter, convertSecondsToMinutes, formatString } from '@/lib/utils';

import ActionButton from './action-button';

/**
 * Renders a table row for a track item in a track list.
 */
const TrackListItem = ({ content, idx, itemIndex = true }) => {
  return (
    <TableRow className="!border-b">
      {itemIndex && <TableCell className="w-[60px] p-2 text-center font-medium">{idx}</TableCell>}
      <TableCell className="w-0 p-0 lg:w-[50px] lg:p-2">
        <img className="h-[32px] w-[32px] rounded-sm object-cover" src={content.image[0].url} alt={content.name} />
      </TableCell>
      <TableCell className="w-72 p-2">
        <p className="w-72 truncate">{capitalizeFirstLetter(content.name)}</p>
        <p className="w-72 origin-left scale-90 truncate text-muted-foreground">
          {formatString(content.artists.primary)}
        </p>
      </TableCell>
      <TableCell className="min-w-36 max-w-36 scale-90 p-2">{content.album.name}</TableCell>
      <TableCell className="hidden w-[100px] p-2 text-center lg:table-cell">{content.year}</TableCell>
      <TableCell className="max-w-32 p-0">
        <span className="flex items-center justify-center gap-1 p-0 align-middle [&:has([role=checkbox])]:pr-0">
          <ActionButton data={content} />
          <Button variant="ghost" className="h-12 w-12 rounded-none p-3.5 text-secondary-foreground/70">
            <Play />
          </Button>
        </span>
      </TableCell>
      <TableCell className="w-[60px] p-2 text-center">{convertSecondsToMinutes(content.duration)}</TableCell>
    </TableRow>
  );
};

/**
 * Renders a table of track items.
 */
const TrackList = ({ data, itemIndex = true, className = '' }) => {
  return (
    <Table className={className}>
      <TableBody>
        {data?.map((item, index) => (
          <TrackListItem key={item.id} content={item} itemIndex={itemIndex} idx={index + 1} />
        ))}
      </TableBody>
    </Table>
  );
};

export default TrackList;
