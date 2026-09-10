'use client';

import { useEffect } from 'react';

const GlobalAtmosphere: React.FC = () => {
  useEffect(() => {
    const root = document.documentElement;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0;
      root.style.setProperty('--page-progress', progress.toFixed(4));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div aria-hidden="true" className="global-atmosphere pointer-events-none fixed inset-0 z-[2]">
      <div className="global-atmosphere-layer global-atmosphere-layer-a" />
      <div className="global-atmosphere-layer global-atmosphere-layer-b" />
    </div>
  );
};

export default GlobalAtmosphere;
