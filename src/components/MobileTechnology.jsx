import { useState } from "react";
import MobileMenuPanel from "./MobileMenuPanel";

import { useIdx } from '../IdxContext'

export default function MobileTechnology({technologies}) {
  const [isOpen, setIsOpen] = useState(false);

  const { techIdx, setTechIdx } = useIdx();
  
  if (!technologies || technologies.length === 0) return null;

  const tech = technologies[techIdx] || technologies[0];
   


  const handleClose = () => setIsOpen(false);
  const handleToggle = () => setIsOpen((v) => !v);

  return (
    <div className="mobile-technology-background min-h-screen m-0 ">
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
           <span className="font-normal ml-0 pr-4 text-color-blue-300 ">03</span>Space launch 101
        </h1>
                
        <div className="w-full flex flex-col text-white ml-0 pt-2 px-6 gap-18">
                       
                <div className="relative left-1/2 right-1/2 -mx-[50vw]">
                  <img
                    src={tech.images.landscape}
                    alt={tech.name}
                    className="w-[100vw] max-w-none h-auto object-cover"
                  />
                </div>
          

                 <div className="flex flex-row justify-center items-start px-10 py-2 mt-4 mb-0  gap-6 ">
                       {/* 1 */}
                       <button
                         type="button"
                         onClick={() => setTechIdx(0)}
                         aria-pressed={techIdx === 0}
                          className="cursor-pointer bg-transparent rounded-full w-[40px] h-[40px] border-1 border-blue-300 hover:bg-white hover:border-blue-900 hover:text-blue-900 focus:bg-white focus:text-blue-900"
                       >
                         1
                       </button>
                       {/* 2 */}
                       <button
                         type="button"
                         onClick={() => setTechIdx(1)}
                         aria-pressed={techIdx === 1}
                        className="cursor-pointer bg-transparent rounded-full w-[40px] h-[40px] border-1 border-blue-300 hover:bg-white hover:border-blue-900 hover:text-blue-900 focus:bg-white focus:text-blue-900"
                      
                       >
                         2
                       </button>
                       {/* 3 */}
                       <button
                         type="button"
                         onClick={() => setTechIdx(2)}
                         aria-pressed={techIdx === 2}
                         className="cursor-pointer bg-transparent rounded-full w-[40px] h-[40px] border-1 border-blue-300 hover:bg-white hover:border-blue-900 hover:text-blue-900 focus:bg-white focus:text-blue-900"
                        >
                         3
                       </button>
                    </div>    
                  
            <div className=" flex flex-col justify-evenly items-center gap-3 mb-10"> 
             
                  <h1 className="text-[18px] font-normal font-bellefair uppercase text-center mb-2 text-blue-300">The terminology... </h1>
                  <h2 className=" text-[24px] font-normal font-bellefair uppercase text-center  mb-2 text-white">{tech.name}</h2>
                  <p className="w-[328px] text-[15px] font-normal font-barlow text-center  text-blue-300">{tech.description}</p>
             </div>                 
                         
          </div>
      
      </main>
      <MobileMenuPanel isOpen={isOpen} onClose={handleClose} />
    </div>
      )}