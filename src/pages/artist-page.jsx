import ArtistCard from '@/components/custom/artist-card';

import { artists } from '@/store/data';

import Page from './layout';

const ArtistPage = () => {
  return (
    <Page title="Top Artists" body="Top selected artists for you. Updated weekly.">
      <div className="grid h-full w-full grid-cols-4 gap-2 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} media={artist} size={100} className="mb-3" />
        ))}
      </div>
    </Page>
  );
};

export default ArtistPage;
