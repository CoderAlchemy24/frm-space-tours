import NavigationBar from "./NavigationBar";
import { useIdx } from '../IdxContext';


export default function TabletDestination({destinations}) {

  const { destIdx, setDestIdx } = useIdx();
  
  if (!destinations || destinations.length === 0) return null;
  
  const destination = destinations[destIdx] || destinations[0];
  return (
    <div className="tablet-destination-background min-h-screen">
     
           <header className=" text-white text-bold bg-transparent opacity-78 mt-0">
               <div className=" flex flex-row items-end justify-between bg-blue-900 pl-10 py-auto">
                 <svg xmlns="http://www.w3.org/2000/svg" className="translate-y-[-8px]" width="48" height="48"><g fill="none" fillRule="evenodd">
                   <circle cx="24" cy="24" r="24" fill="#FFF" />
                   <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
                 <NavigationBar className="p-3 translate-y-[3px]" />
               </div>
           </header>
           <main className="flex flex-col gap-8 h-300 p-10 ">
               <h1 className="text-[20px] font-normal text-white font-barlow-condensed uppercase font-regular ml-0">
                 <span className="font-normal ml-0 pr-4 text-color-blue-300 ">01</span>Pick your destination</h1>
              <div className="flex flex-col items-center justify-center gap-12 my-10">
                <div className="mx-10.5 my-10.5" >
                    <img src={destination.images.png} alt={destination.name} className="w-[300px] h-[300px] "/>
                </div>
                <div className="w-[688px] flex flex-col items-center  justify-center text-white my-auto">
                
                <nav className="my-auto">
                  <ul className="flex flex-row justify-center gap-4  uppercase text-center text-white font-barlow ">
                    <li onClick={() => setDestIdx(0)} className="mx-2 font-barlow text-white text-[16px] font-regular border-transparent border-b-3 uppercase px-2 py-5  hover:border-b-3 cursor-pointer hover:text-blue-300 hover:border-white">{destinations[0]?.name}</li>
                    <li onClick={() => setDestIdx(1)} className="mx-2 font-barlow text-white text-[16px] font-regular border-transparent border-b-3 uppercase px-2 py-5  hover:border-b-3 cursor-pointer hover:text-blue-300 hover:border-white">{destinations[1]?.name}</li>
                    <li onClick={() => setDestIdx(2)} className="mx-2 font-barlow text-white text-[16px] font-regular border-transparent border-b-3 uppercase px-2 py-5  hover:border-b-3 cursor-pointer hover:text-blue-300 hover:border-white">{destinations[2]?.name}</li>
                    <li onClick={() => setDestIdx(3)} className="mx-2 font-barlow text-white text-[16px] font-regular border-transparent border-b-3 uppercase px-2 py-5  hover:border-b-3 cursor-pointer hover:text-blue-300 hover:border-white">{destinations[3]?.name}</li>
                  </ul>
                  </nav>
                  <div>
                  <div className="my-auto text-center h-[300px] w-[640px]">
                      <h2 className="text-[80px] font-normal font-bellefair uppercase  text-center my-10">{destination.name}</h2>
                      <p className="text-[16px] font-normal font-barlow text-center">{destination.description}</p>
                  </div>    
                  <div className="mt-2 w-[640px]  border-t-2 text-center border-gray-600 pt-8 flex flex-row justify-center gap-20">
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
