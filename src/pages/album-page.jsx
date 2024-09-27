import AlbumCard from '@/components/custom/track-card';

import { songs } from '@/store/data';

import Page from './layout';

const AlbumPage = () => {
  return (
    <Page title="Top Albums" body="Top albums this week. Updated weekly." styles="mb-24">
      <div className="grid h-full w-full grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8">
        {songs.map((song) => (
          <AlbumCard key={song.id} media={song} size={100} className="mb-3" />
        ))}
      </div>
    </Page>
  );
};

export default AlbumPage;
