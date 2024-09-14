import { CalendarDays } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const InfoCard = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost" className="text-lg font-bold h-9 px-2">
          Saavn v2.0
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/42537934?v=4" />
            <AvatarFallback>KG</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Creater</h4>
            <p className="text-sm">
              The Saavn v2.0 – created and maintained by{' '}
              <a href="https://github.com/kundanhere" target="_blank" className="hover:underline underline-offset-2">
                @kundanhere
              </a>
              .
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{' '}
              <span className="text-xs text-muted-foreground">Created September 2024</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default InfoCard;
