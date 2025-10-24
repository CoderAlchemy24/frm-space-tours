import NavigationBar from "./NavigationBar";
import { useIdx } from '../IdxContext';


export default function DesktopDestination({destinations}) {
  const { destIdx, setDestIdx } = useIdx(); // nincs paraméter
  
  if (!destinations || destinations.length === 0) return null;
  
  const destination = destinations[destIdx] || destinations[0];
    return (
    <div className="desktop-destination-background pt-[2px]">
      <header className="relative bottom-0 text-white text-semibold bg-transparent opacity-78 mt-[48px]">
          <div className=" flex flex-row items-end justify-between pl-12 py-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="translate-y-[-5px]" width="48" height="48"><g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            <div className="absolute top-1/2 left-[140px] right-[690px] h-px bg-white opacity-50 z-10"></div>
            <NavigationBar className="p-3 translate-y-[3px]" />
          </div>
      </header>
      <main className="flex flex-col gap-8 h-[860px] py-[48px]">
        <h1 className="col-span-1 row-span-1 text-[28px] font-normal text-white font-barlow-condensed uppercase font-regular pl-12">
          <span className="font-normal ml-12 px-4 text-color-blue-300 ">01</span>Pick your destination</h1>
        <div className="h-full flex flex-row items-center justify-center gap-32 mt-16">
        <div className="w-[539px] h-[640px] flex flex-row items-center justify-center ">
            <img src={destination.images.png} alt={destination.name} className="w-[480px] h-[480px]"/>
        </div>
        <div className="w-[539px] h-[640px] flex flex-col items-start  justify-center text-white">
          <nav className="">
            <ul className="flex flex-row justify-center gap-4 text-xl uppercase text-left text-white font-barlow ">
              <li onClick={() => setDestIdx(0)} className="mx-2 font-barlow text-white text-[16px] font-regular border-transparent border-b-3 uppercase px-2 py-5  hover:border-b-3 cursor-pointer hover:text-blue-300 hover:border-white">{destinations[0]?.name}</li>
              <li onClick={() => setDestIdx(1)} className="mx-2 font-barlow text-white text-[16px] font-regular border-transparent border-b-3 uppercase px-2 py-5  hover:border-b-3 cursor-pointer hover:text-blue-300 hover:border-white">{destinations[1]?.name}</li>
              <li onClick={() => setDestIdx(2)} className="mx-2 font-barlow text-white text-[16px] font-regular border-transparent border-b-3 uppercase px-2 py-5  hover:border-b-3 cursor-pointer hover:text-blue-300 hover:border-white">{destinations[2]?.name}</li>
              <li onClick={() => setDestIdx(3)} className="mx-2 font-barlow text-white text-[16px] font-regular border-transparent border-b-3 uppercase px-2 py-5  hover:border-b-3 cursor-pointer hover:text-blue-300 hover:border-white">{destinations[3]?.name}</li>
            </ul>
            </nav>
            <div className="mt-8 text-left">
                <h2 className="text-[96px] font-normal font-bellefair uppercase  text-left mr-30 my-10">{destination.name}</h2>
                <p className="text-[18px] font-normal font-barlow  mr-30 text-left">{destination.description}</p>
                <div className="mt-12 w-[440px]  border-t-2 text-left border-gray-600 pt-8 flex flex-row justify-start gap-20">
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
    </div>
  )
}