
import { useState } from "react";
import MobileMenuPanel from "./MobileMenuPanel";

import { useNavigate } from 'react-router-dom'
import { useIdx } from '../IdxContext'




export default function MobileDestination({destinations}) {
  const [isOpen, setIsOpen] = useState(false);

   const { destIdx, setDestIdx } = useIdx();
  
  if (!destinations || destinations.length === 0) return null;
  
  const destination = destinations[destIdx] || destinations[0];
   

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleToggle = () => setIsOpen((v) => !v);

  return (
    <div className="mobile-destination-background min-h-screen m-0 pb-20">
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

     <main className="flex flex-col gap-8 h-275 p-5.5 ">
               <h1 className="text-[20px] font-normal text-white text-center font-barlow-condensed uppercase font-regular ml-0">
                 <span className="font-normal ml-0 pr-4 text-color-blue-300 ">01</span>Pick your destination</h1>
              <div className="flex flex-col items-center justify-center gap-12 ">
                <div className="mx-auto my-8" >
                    <img src={destination.images.webp} alt={destination.name} className="w-[150px] h-[150px] "/>
                </div>
                <div className="w-[688px] flex flex-col items-center  justify-center text-white my-auto">
                
                <nav className="my-1">
                  <ul className="flex flex-row justify-center gap-4  uppercase text-center text-white text-[14px] font-barlow-condensed ">
                    <li onClick={() => setDestIdx(0)} className="mx-2 font-barlow text-white text-[16px] font-regular border-transparent border-b-3 uppercase px-2 py-5  hover:border-b-3 cursor-pointer hover:text-blue-300 hover:border-white">{destinations[0]?.name}</li>
                    <li onClick={() => setDestIdx(1)} className="mx-2 font-barlow text-white text-[16px] font-regular border-transparent border-b-3 uppercase px-2 py-5  hover:border-b-3 cursor-pointer hover:text-blue-300 hover:border-white">{destinations[1]?.name}</li>
                    <li onClick={() => setDestIdx(2)} className="mx-2 font-barlow text-white text-[16px] font-regular border-transparent border-b-3 uppercase px-2 py-5  hover:border-b-3 cursor-pointer hover:text-blue-300 hover:border-white">{destinations[2]?.name}</li>
                    <li onClick={() => setDestIdx(3)} className="mx-2 font-barlow text-white text-[16px] font-regular border-transparent border-b-3 uppercase px-2 py-5  hover:border-b-3 cursor-pointer hover:text-blue-300 hover:border-white">{destinations[3]?.name}</li>
                  </ul>
                  </nav>
                  <div>
                  <div className="mx-40 my-6 text-center h-[210px] w-auto">
                      <h2 className="text-[56px] font-normal font-bellefair uppercase  text-center my-4">{destination.name}</h2>
                      <p className="text-[15px] font-normal font-barlow text-center">{destination.description}</p>
                  </div>    
                  <div className="mt-2 w-[350px] mx-auto border-t-2 text-center border-gray-600 pt-8 flex flex-col justify-center gap-6">
                        <div >
                          <h3 className="text-[14px] font-normal font-barlow-condensed uppercase text-gray-400 mb-2">Avg. Distance</h3>
                          <p className="text-[28px] font-normal font-bellefair uppercase">{destination.distance}</p>
                        </div>
                        <div >
                          <h3 className="text-[14px] font-normal font-barlow-condensed uppercase text-gray-400 mb-2">Est. Travel Time</h3>
                          <p className="text-[28px] font-normal font-bellefair uppercase">{destination.travel}</p>
                        </div>
                      </div>
                  </div>
             </div>
              
        </div>
      </main>

      <MobileMenuPanel isOpen={isOpen} onClose={handleClose} />
    </div>
  );
}

