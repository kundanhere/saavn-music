import { CirclePlay, Library, ListMusic, MicVocal, Music2, Radio } from 'lucide-react';
import ButtonLink from '@/components/custom/button-link';
import { playlists } from '@/store/data';

const Sidebar = () => {
  return (
    <div className="pb-12 mb-24">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Discover</h2>
          <div className="space-y-1">
            <ButtonLink to="/" icon={CirclePlay}>
              Listen Now
            </ButtonLink>
            <ButtonLink to="/radio" icon={Radio} disabled={true}>
              Radio
            </ButtonLink>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Library</h2>
          <div className="space-y-1">
            <ButtonLink to="/playlists" icon={ListMusic}>
              Playlists
            </ButtonLink>
            <ButtonLink to="/songs" icon={Music2}>
              Songs
            </ButtonLink>
            <ButtonLink to="/artists" icon={MicVocal}>
              Artists
            </ButtonLink>
            <ButtonLink to="/albums" icon={Library}>
              Albums
            </ButtonLink>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">Playlists</h2>
          <div className="space-y-1 p-2">
            {playlists.map((playlist, index) => (
              <ButtonLink key={index} to={`/playlist/${index + 1}`} icon={ListMusic}>
                {playlist}
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
