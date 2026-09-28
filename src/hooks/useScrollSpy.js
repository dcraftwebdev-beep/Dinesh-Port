import { useEffect, useState } from 'react';

// Returns the id of the section currently in view (last section whose top has passed the offset line).
export default function useScrollSpy(ids, offset = 160) {
  const key = ids.join('|');
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const update = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      setActiveId(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `key` captures ids
  }, [key, offset]);

  return activeId;
}
