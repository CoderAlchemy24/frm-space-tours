import NavigationBar from "./NavigationBar";
import { useNavigate } from 'react-router-dom'
import { useIdx } from '../IdxContext'

export default function TabletHome() {

    const navigate = useNavigate();
  const { setDestIdx } = useIdx();

   const handleExplore = () => {
    setDestIdx(0);
    navigate('/destination');
  };
  return (
     <div className="tablet-home-background min-h-screen">
        <header className=" text-white text-bold bg-transparent opacity-78 my-0 py-0 h-[64px]">
                 <div className=" flex flex-row items-center justify-between gap-4">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-[48px] translate-y-[2px]" width="48" height="48"><g fill="none" fillRule="evenodd">
                     <circle cx="24" cy="24" r="24" fill="#FFF" />
                     <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g>
                     </svg>

                   <NavigationBar className="m-0 p-0 translate-y-[0px]" />
                 </div>
        </header>
        <main className="py-[128px] px-[40px]">
          <div className="w-auto h-full flex flex-col justify-start items-center">
             <h1 className="text-normal text-[28px] font-barlow-condensed uppercase mb-4 text-white">
              So, You want to travel to</h1>
            <h2 className="text-[144px] font-bellefair uppercase font-normal mb-6 text-white">Space</h2>
            <p className="text-white font-barlow font-normal text-[16px] text-center px-[72px] ">Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!
            </p>
            </div>
            <button className="rounded-full w-[272px] h-[272px] m-auto  bg-white text-blue-900 text-center font-bellefair font-normal text-[32px] uppercase flex items-center justify-center 
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
