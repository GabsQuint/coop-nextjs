'use client';

import { useEffect, useState } from 'react';

export default function Splash() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      document.body.classList.add('app-loaded'); // libera o reveal do conteúdo
      setHide(true);                             // remove o splash
    }, 1200); // ajuste: 1000–1800ms
    return () => clearTimeout(t);
  }, []);

  if (hide) return null;

  return (
    <div aria-hidden className="fixed inset-0 z-[9999] grid place-items-center bg-[#0b0b0f]">
      <div className="flex flex-col items-center gap-6">
        <img
          src="/coop-logo.png"
          alt="COOP"
          className="h-24 w-24 drop-shadow-[0_6px_20px_rgba(0,0,0,.5)] animate-[pop_600ms_ease]"
        />
        <div className="h-1.5 w-52 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/3 animate-loader bg-gradient-to-r from-yellow-400 to-blue-500" />
        </div>
      </div>
    </div>
  );
}
