import { useEffect } from 'react';

import useColors from '@/hooks/use-colors';

const MediaControls = () => {
  const { color, putColor } = useColors();

  useEffect(() => {
    putColor('https://i.scdn.co/image/ab67616d00001e02576521b1bf3ec2fd7fdfcbd5');
    // console.log(color);
  }, [color, putColor]);

  return (
    <div
      className="relative flex h-full w-full items-center justify-evenly text-center"
      style={{ backgroundColor: `${color}4d` /* 4d -> means opacity 0.3*/ }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-black/10" />
      <div className="z-20 h-fit w-full">Media Controls 1</div>
      <div className="z-20 h-fit w-full">Media Controls 2</div>
      <div className="z-20 h-fit w-full">Media Controls 3</div>
    </div>
  );
};

export default MediaControls;
