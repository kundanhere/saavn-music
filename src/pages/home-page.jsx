import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Page from '@/pages/layout';

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
          <Page title="Listen Now" body="Top picks for you. Updated daily." styles="mt-2">
            <p>Display page content here.</p>
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