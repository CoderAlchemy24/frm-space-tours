import { useState } from "react";
import MobileMenuPanel from "./MobileMenuPanel";

import { useIdx } from '../IdxContext'

export default function MobileCrew({crews}) {
  const [isOpen, setIsOpen] = useState(false);

   const { crewIdx, setCrewIdx } = useIdx();
  
  if (!crews || crews.length === 0) return null;
  
  const crew = crews[crewIdx] || crews[0];
   

  //const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleToggle = () => setIsOpen((v) => !v);

  return (
    <div className="mobile-crew-background min-h-screen m-0 ">
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
      <main className="flex flex-col gap-8 h-full pt-10 px-auto ">
        <h1 className="text-[16px] font-normal text-white text-center font-barlow-condensed uppercase font-regular ml-0">
          <span className="font-normal ml-0 pr-4 text-color-blue-300 ">02</span>Meet your crew</h1>
        <div className="mt-10">
            <h2 className="text-center text-[18px] font-normal font-bellefair uppercase mb-4 text-gray-400">{crew.role}</h2>
            <h3 className="text-center text-[24px] font-normal font-bellefair uppercase mb-6 text-white">{crew.name}</h3>
            <p className="w-[328px] mx-auto px-2 text-center text-[15px] font-normal font-barlow  text-blue-300">{crew.bio}</p>
            <div className="flex flex-row justify-center items-center nav-btns my-20">
              <button className="cursor-pointer w-[10px] h-[10px] bg-[#979797] hover:bg-white p-0 m-6 ml-0 rounded-full hover:text-blue-300" onClick={() => setCrewIdx(0)}  > </button>
              <button className="cursor-pointer w-[10px] h-[10px] bg-[#979797] hover:bg-white p-0 m-6 ml-0 rounded-full hover:text-blue-300" onClick={() => setCrewIdx(1)} > </button>
              <button className="cursor-pointer w-[10px] h-[10px] bg-[#979797] hover:bg-white p-0 m-6 ml-0 rounded-full hover:text-blue-300" onClick={() => setCrewIdx(2)} > </button>
              <button className="cursor-pointer w-[10px] h-[10px] bg-[#979797] hover:bg-white p-0 m-6 ml-0 rounded-full hover:text-blue-300" onClick={() => setCrewIdx(3)} > </button>
            </div>
         
        
            <div className="">
             <img 
               src={crew.images.webp} 
               alt={crew.name} 
               className="h-[340px] w-auto mx-auto mb-0 pb-0 object-contain relative bottom-0" 
             />
            </div>
  
          </div>
      </main>
       <MobileMenuPanel isOpen={isOpen} onClose={handleClose} />
    </div>
  )
}