import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import TrackCard from '@/components/custom/track-card';
import Page from '@/pages/layout';

const songs = [
  {
    id: '001',
    name: 'Pehli Dafa',
    album: 'Pehli Dafa',
    artist: 'Atif Aslam',
    cover: 'https://i.scdn.co/image/ab67616d00001e02afd2bc3f876235be94c0d36d',
  },
  {
    id: '002',
    name: 'Aayi Nai (From "Stree 2")',
    album: 'Stree 2',
    artist: 'Sachin-Jigar, Amitabh Bhattacharya',
    cover: 'https://i.scdn.co/image/ab67616d00001e02d4b354ed1b37bcea8d7163c2',
  },
  {
    id: '003',
    name: 'Milegi Milegi',
    album: 'Stree',
    artist: 'Sachin-Jigar, Mika Singh',
    cover: 'https://i.scdn.co/image/ab67616d00001e02757e3e10c59c6e71affce6d6',
  },
  {
    id: '004',
    name: 'Boyfriend',
    album: 'Boyfriend ',
    artist: 'Justin Bieber',
    cover: 'https://i.scdn.co/image/ab67616d00001e0291b2ad31ce6950017efbe2bf',
  },
  {
    id: '005',
    name: 'Dil Diyan Gallan',
    album: 'Tiger Zinda Hai',
    artist: 'Atif Aslam',
    cover: 'https://i.scdn.co/image/ab67616d00001e02576521b1bf3ec2fd7fdfcbd5',
  },
  {
    id: '006',
    name: 'Shape of You',
    album: 'Shape of You',
    artist: 'Ed Sheeran',
    cover: 'https://i.scdn.co/image/ab67616d00001e023dd66389d087a6a4f93f6140',
  },
  {
    id: '007',
    name: 'Dil Dhadakne Do',
    album: 'Dil Dhadakne Do',
    artist: 'Shankar-Ehsaan-Loy',
    cover: 'https://i.scdn.co/image/ab67616d00001e02cff978906e5901b8efacc904',
  },
  {
    id: '008',
    name: 'Chal Tere Ishq Mein',
    album: 'Gadar 2',
    artist: 'Mithoon, Neeti Mohan',
    cover: 'https://i.scdn.co/image/ab67616d00001e027813b389296a4f42219a9795',
  },
];

const HomePage = () => {
  return (
    <div className="mb-24">
      <Tabs defaultValue="music" className="space-y-6">
        <TabsList className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
          <TabsTrigger
            value="music"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow relative"
          >
            Music
          </TabsTrigger>
          <TabsTrigger
            disabled
            value="podcasts"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow relative"
          >
            Podcasts
          </TabsTrigger>
          <TabsTrigger
            disabled
            value="live"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow relative"
          >
            Live
          </TabsTrigger>
        </TabsList>
        <TabsContent value="music">
          <Page title="Listen Now" body="Top picks for you. Updated daily." styles="mt-2 space-y-6">
            <div className="relative flex">
              <ScrollArea type="never" className="w-1 flex-1 overflow-x-auto">
                <div className="flex space-x-4 pb-4">
                  {songs.map((song) => (
                    <TrackCard key={song.id} media={song} />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
            <Separator />
            <div className="relative flex">
              <ScrollArea type="never" className="w-1 flex-1 overflow-x-auto">
                <div className="flex flex-row-reverse space-x-4 pb-4">
                  {songs.map((song) => (
                    <TrackCard key={song.id} media={song} />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </Page>
        </TabsContent>
        <TabsContent value="live">
          <Page title="Made for You" body="Your personal playlists. Updated daily." styles="mt-2">
            <p>Display page content here.</p>
          </Page>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HomePage;
