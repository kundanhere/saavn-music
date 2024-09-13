import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
          <div className="mt-2 flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
              <p className="text-sm text-muted-foreground">Your personal playlists. Updated daily.</p>
            </div>
          </div>
          <Separator className="my-4" />
        </TabsContent>
        <TabsContent value="live">
          <div className="mt-2 flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">Listen Now</h2>
              <p className="text-sm text-muted-foreground">Top picks for you. Updated daily.</p>
            </div>
          </div>
          <Separator className="my-4" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HomePage;
