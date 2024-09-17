import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CardScroller from '@/components/custom/card-scroller';
import ArtistCard from '@/components/custom/artist-card';
import Slider from '@/components/custom/slider';
import Page from '@/pages/layout';
import { artists, songs, tabs } from '@/store/data';

const Trigger = ({ tab, value, ...props }) => {
  return (
    <TabsTrigger
      {...props}
      value={value}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow relative"
    >
      {tab}
    </TabsTrigger>
  );
};

const HomePage = () => {
  return (
    <div className="mb-24">
      <Tabs defaultValue="music" className="space-y-6">
        <TabsList className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
          {tabs.map((tab) => (
            <Trigger key={tab.key} tab={tab.name} value={tab.key} disabled={tab.disabled} />
          ))}
        </TabsList>
        <TabsContent value="music">
          <Page title="Listen Now" body="Top picks for you. Updated daily." styles="mt-2 space-y-6">
            <CardScroller data={songs} size={200} />
            <Slider data={songs} title="New Releases" category="songs" />
            <Slider data={songs} title="Tob Albums" category="albums" />
            <Slider data={artists} title="Popular Artists" category="artists" card={ArtistCard} size={140} />
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
