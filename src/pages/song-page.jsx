import TrackList from '@/components/custom/track-list';

import { sortByDate } from '@/lib/utils';

import { songs } from '@/store/data';

import Page from './layout';

const SongPage = () => {
  return (
    <Page title="Top Hits" body="Trending songs this week. Updated daily.">
      <TrackList data={sortByDate(songs, 'desc')} />
    </Page>
  );
};

export default SongPage;
