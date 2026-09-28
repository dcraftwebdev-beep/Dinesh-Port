import { useEffect, useRef, useState } from 'react';

// Scales a fixed-size design canvas to fill its parent's width.
export default function useScaleToFit(designWidth) {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const update = () => setScale(node.clientWidth / designWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, [designWidth]);

  return [ref, scale];
}
