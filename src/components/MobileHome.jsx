
import { useState } from "react";
import MobileMenuPanel from "./MobileMenuPanel";

import { useNavigate } from 'react-router-dom'
import { useIdx } from '../IdxContext'

export default function MobileHome() {
  const [isOpen, setIsOpen] = useState(false);

   const navigate = useNavigate();
  const { setDestIdx } = useIdx();

   const handleExplore = () => {
    setDestIdx(0);
    navigate('/destination');
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleToggle = () => setIsOpen((v) => !v);

  return (
    <div className="mobile-home-background min-h-screen m-0 pb-20">
      <header className="p-4 flex items-center justify-between">
        {/* logo */}
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="translate-y-[-2px]">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
          </g>
        </svg>

        {/* hamburger button */}
        <button
          onClick={handleToggle}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="w-10 h-10 flex items-center justify-center rounded-md bg-white/10 backdrop-blur-sm text-white"
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleToggle(); } }}
        >
          {isOpen ? (
            /* X icon */
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
          ) : (
            /* hamburger icon */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </header>

      <main className="py-[128px] px-[40px]">
          <div className="w-auto h-full flex flex-col justify-start items-center pb-22">
             <h1 className="text-normal text-[16px] font-barlow-condensed uppercase mb-4 text-white">
              So, You want to travel to</h1>
            <h2 className="text-[80px] font-bellefair uppercase font-normal mb-6 text-white">Space</h2>
            <p className="text-white font-barlow font-normal text-[15px] text-center px-[72px] ">Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!
            </p>
            </div>
            <button className="rounded-full w-[144px] h-[144px] m-auto   bg-white text-blue-900 text-center font-bellefair font-normal text-[18px] uppercase flex items-center justify-center 
            hover:opacity-80 cursor-pointer flex-shrink-0
           hover:ring-[80px] hover:ring-white/20" 
            onClick={handleExplore}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleExplore(); }}
            >
            Explore
            </button>
        </main>

      <MobileMenuPanel isOpen={isOpen} onClose={handleClose} />
    </div>
  );
}

