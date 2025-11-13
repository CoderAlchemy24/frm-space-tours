import NavigationBar from "./NavigationBar";

import { useNavigate } from 'react-router-dom'
import { useIdx } from '../IdxContext'

export default function DesktopHome() {

   const navigate = useNavigate();
  const { setDestIdx } = useIdx();

   const handleExplore = () => {
    setDestIdx(0);
    navigate('/destination');
  };

  return (
    <div className="desktop-home-background pt-[2px]">
          <header className="relative bottom-0 text-white text-semibold bg-transparent opacity-78 mt-[48px]">
            <div className=" flex flex-row items-end justify-between pl-12 py-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="translate-y-[-5px]" width="48" height="48"><g fill="none" fillRule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#FFF" />
                <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
              <div className="absolute top-1/2 left-[140px] right-[690px] h-px bg-white opacity-50 z-10"></div>
              <NavigationBar className="p-3 translate-y-[3px]" />
            </div>
          </header>
          <main className="text-white opacity-90 px-36 pt-64 pb-32 flex flex-row items-center justify-between">
            <div className="w-158 h-[343px] ">
             <h1 className="w-150 text-normal font-barlow-condensed text-[28px] uppercase mb-4 text-white">
              So, You want to travel to</h1>
            <h2 className="text-normal font-bellefair uppercase font-normal text-[144px] mb-6 text-white">Space</h2>
            <p className="text-white font-barlow font-normal text-18 w-6/8 m-4">Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!
            </p>
            </div>
            <button className="rounded-full w-[272px] h-[272px] bg-white text-blue-900 text-center font-bellefair font-normal text-[32px] uppercase flex items-center justify-center 
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
    </div>
  );
}
