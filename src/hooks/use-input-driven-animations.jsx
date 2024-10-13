import { useRef } from 'react';

import { useScroll, useTransform } from 'framer-motion';

const useInputDrivenAnimations = () => {
  // 1. Use ref for scroll container
  const scrollRef = useRef(null);

  // 2. Get scroll progress using Framer Motion's useScroll hook
  const { scrollYProgress } = useScroll({ container: scrollRef });

  // 3. Set animation properties for the text
  const props = {
    top: useTransform(scrollYProgress, [0, 0.4, 1], [30, 100, 100]),
    left: useTransform(scrollYProgress, [0, 0.4, 1], [220, 135, 135]),
    scale: useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.72, 0.72]),
    transformOrigin: 'bottom left',
  };

  // 4. Set animation properties for the image
  const imageProps = {
    top: useTransform(scrollYProgress, [0, 0.4, 1], [30, 70, 70]),
    left: useTransform(scrollYProgress, [0, 0.4, 1], [30, 10, 10]),
    scale: props.scale,
    transformOrigin: props.transformOrigin,
  };

  return { scrollRef, props, imageProps };
};

export default useInputDrivenAnimations;
