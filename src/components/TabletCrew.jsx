import NavigationBar from "./NavigationBar";
import { useIdx } from '../IdxContext';
import { Link } from 'react-router-dom';

export default function TabletCrew({crews}) {
   const { crewIdx, setCrewIdx } = useIdx(); 

    if (!crews || crews.length === 0) return null;

    const crew = crews[crewIdx] || crews[0];

  return (
     <div className="tablet-crew-background min-h-screen">
          
                <header className=" text-white   text-semibold bg-transparent opacity-78 mt-0">
                    <div className=" flex flex-row items-end justify-between bg-blue-900 pl-10 py-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="translate-y-[-8px]" width="48" height="48"><g fill="none" fillRule="evenodd">
                        <circle cx="24" cy="24" r="24" fill="#FFF" />
                        <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
                      <NavigationBar className="p-3 translate-y-[3px]" />
                    </div>
                </header>
                <main className="flex flex-col gap-8 h-full pt-10 pl-10 ">
                    <h1 className="text-[20px] font-normal text-white font-barlow-condensed uppercase font-regular ml-0">
                      <span className="font-normal ml-0 pr-4 text-color-blue-300 ">02</span>Meet your crew</h1>
                    <div className="mt-10">
                        <h2 className="text-center text-[24px] font-normal font-bellefair uppercase mb-4 text-gray-400">{crew.role}</h2>
                        <h3 className="text-center text-[40px] font-normal font-bellefair uppercase mb-6 text-white">{crew.name}</h3>
                        <p className="w-128 mx-auto px-2 text-center text-[16px] font-normal font-barlow  text-blue-300">{crew.bio}</p>
                        <div className="flex flex-row justify-center items-center nav-btns my-20">
                          <button className="cursor-pointer w-[10px] h-[10px] bg-[#979797] hover:bg-white p-0 m-6 ml-0 rounded-full hover:text-blue-300" onClick={() => setCrewIdx(0)}  > </button>
                          <button className="cursor-pointer w-[10px] h-[10px] bg-[#979797] hover:bg-white p-0 m-6 ml-0 rounded-full hover:text-blue-300" onClick={() => setCrewIdx(1)} > </button>
                          <button className="cursor-pointer w-[10px] h-[10px] bg-[#979797] hover:bg-white p-0 m-6 ml-0 rounded-full hover:text-blue-300" onClick={() => setCrewIdx(2)} > </button>
                          <button className="cursor-pointer w-[10px] h-[10px] bg-[#979797] hover:bg-white p-0 m-6 ml-0 rounded-full hover:text-blue-300" onClick={() => setCrewIdx(3)} > </button>
                        </div>
                     
                    
                        <div className="">
                         <img 
                           src={crew.images.png} 
                           alt={crew.name} 
                           className="h-[520px] w-auto mx-auto mb-0 pb-0 object-contain relative bottom-0" 
                         />
                        </div>
              
                </div>
               </main>
         </div>
  )
}