import { Separator } from '@/components/ui/separator';

const SongPage = () => {
  return (
    <div className="mb-24">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Made for You</h1>
        <p className="text-sm text-muted-foreground">Your personal playlists. Updated daily.</p>
      </div>
      <Separator className="my-4" />
    </div>
  );
};

export default SongPage;
