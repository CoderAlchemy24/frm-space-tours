import NavigationBar from "./NavigationBar";
import { useIdx } from '../IdxContext';
import { Link } from 'react-router-dom'

export default function DesktopCrew({crews}) {

  const { crewIdx, setCrewIdx } = useIdx(); // nincs paraméter

    if (!crews || crews.length === 0) return null;

    const crew = crews[crewIdx] || crews[0];

  return (
    <div className="desktop-crew-background pt-[2px]">
          
          <header className="relative bottom-0 text-white text-semibold bg-transparent opacity-78 mt-[48px]">
            <div className=" flex flex-row items-end justify-between pl-12 py-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="translate-y-[-5px]" width="48" height="48"><g fill="none" fillRule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#FFF" />
                <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
              <div className="absolute top-1/2 left-[140px] right-[690px] h-px bg-white opacity-50 z-10"></div>
              <NavigationBar className="p-3 translate-y-[3px]" />
            </div>
          </header>
          <main className="grid grid-rows-[auto_1fr] gap-8 h-[800px] p-[48px] pb-0">
            
          
           
            <div className="flex flex-row mt-12" >
              
            
              <div className="w-1/2 h-[70%] ml-12 p-6  items-start flex flex-col justify-center  pr-8">
                 <h1 className="text-white text-[28px] font-normal  font-barlow-condensed uppercase ">
                  <span className="mr-4 uppercase">02</span>Meet your crew
                 </h1>
                <h2 className=" pt-28 text-[32px] font-normal font-bellefair uppercase mb-4 text-gray-400">{crew.role}</h2>
                <h3 className="text-[56px] font-normal font-bellefair uppercase mb-6 text-white">{crew.name}</h3>
                <p className="text-[18px] font-normal font-barlow  text-blue-300">{crew.bio}</p>
                <div className="nav-btns mt-30">
                  <button className="cursor-pointer w-[15px] h-[15px] bg-[#979797] hover:bg-white p-0 m-6 ml-0 rounded-full hover:text-blue-300" onClick={() => setCrewIdx(0)}  > </button>
                  <button className="cursor-pointer w-[15px] h-[15px] bg-[#979797] hover:bg-white p-0 m-6 ml-0 rounded-full hover:text-blue-300" onClick={() => setCrewIdx(1)} > </button>
                  <button className="cursor-pointer w-[15px] h-[15px] bg-[#979797] hover:bg-white p-0 m-6 ml-0 rounded-full hover:text-blue-300" onClick={() => setCrewIdx(2)} > </button>
                  <button className="cursor-pointer w-[15px] h-[15px] bg-[#979797] hover:bg-white p-0 m-6 ml-0 rounded-full hover:text-blue-300" onClick={() => setCrewIdx(3)} > </button>
              </div>
           </div>
          
              <div className="w-1/2 h-[70%] flex items-end justify-center">
                <img 
                  src={crew.images.png} 
                  alt={crew.name} 
                  className="max-h-[96%] mb-0 pb-0 w-auto object-contain relative bottom-0" 
                />
              </div>
            
             </div>
          </main>
        </div>
  )

}