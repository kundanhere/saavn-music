import * as Ico from 'lucide-react';

import { playlists } from '@/store/data';

import ButtonLink from './button-link';

const Sidebar = () => {
  return (
    <div className="mb-24 pb-12">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Discover</h2>
          <div className="space-y-1">
            <ButtonLink to="/" icon={Ico.CirclePlay}>
              Listen Now
            </ButtonLink>
            <ButtonLink to="/radio" icon={Ico.Radio} disabled={true}>
              Radio
            </ButtonLink>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Library</h2>
          <div className="space-y-1">
            <ButtonLink to="/playlists" icon={Ico.ListMusic}>
              Playlists
            </ButtonLink>
            <ButtonLink to="/songs" icon={Ico.Music2}>
              Songs
            </ButtonLink>
            <ButtonLink to="/artists" icon={Ico.MicVocal}>
              Artists
            </ButtonLink>
            <ButtonLink to="/albums" icon={Ico.Library}>
              Albums
            </ButtonLink>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">Playlists</h2>
          <div className="space-y-1 p-2">
            {playlists.map((playlist, index) => (
              <ButtonLink key={index} to={`/playlist/${index + 1}`} icon={Ico.ListMusic}>
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
