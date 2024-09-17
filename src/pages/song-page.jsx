import Page from '@/pages/layout';
import { songs } from '@/store/data';
import { sortByDate } from '@/lib/utils';
import TrackList from '@/components/custom/track-list';

const SongPage = () => {
  return (
    <Page title="Top Hits" body="Trending songs this week. Updated daily." styles="mb-24">
      <TrackList data={sortByDate(songs, 'desc')} />
    </Page>
  );
};

export default SongPage;
