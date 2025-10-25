import NavigationBar from "./NavigationBar";
import { useIdx } from '../IdxContext';

export default function DesktopTechnology({technologies}) {

   const { techIdx, setTechIdx } = useIdx(); 
  
      if (!technologies || technologies.length === 0) return null;

      const tech = technologies[techIdx] || technologies[0];


  return (
    <div className="desktop-technology-background  pt-[2px]">
      <header className="relative bottom-0 text-white text-semibold bg-transparent opacity-78 mt-[48px]">
        <div className=" flex flex-row items-end justify-between pl-12 py-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="translate-y-[-5px]" width="48" height="48"><g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
          <div className="absolute top-1/2 left-[140px] right-[690px] h-px bg-white opacity-50 z-10"></div>
          <NavigationBar className="p-3 translate-y-[3px]" />
        </div>
      </header>
     <main className="w-full mx-auto pl-18 pr-0 pt-12">
        <h1 className="text-[28px] font-normal text-white font-barlow-condensed uppercase px-6">
              <span className="ml-4 mr-4 font-normal uppercase">03</span>
              Space launch 101
            </h1> 
        <div>   
        <div className="w-full flex flex-row text-white ml-0  pt-2 px-6 gap-18">
          
           {/*  <div className="w-[140px] flex flex-col justify-start items-start px-0 py-18 gap-8 ">
                  <div className="cursor-pointer bg-transparent rounded-full w-[80px] h-[80px] border-1 border-blue-300 hover:bg-white hover:border-blue-900 "  onClick={() => setTechIdx(0)} ><p className="text-[32px] font-normal font-bellefair text-white hover:text-blue-900 px-8 py-4.5">1</p></div>
                  <div className="cursor-pointer bg-transparent rounded-full w-[80px] h-[80px] border-1 border-blue-300 hover:bg-white hover:border-blue-900 "  onClick={() => setTechIdx(1)} ><p className="text-[32px] font-normal font-bellefair text-white hover:text-blue-900 px-8 py-4.5">2</p></div>
                  <div className="cursor-pointer bg-transparent rounded-full w-[80px] h-[80px] border-1 border-blue-300 hover:bg-white hover:border-blue-900 "  onClick={() => setTechIdx(2)} ><p className="text-[32px] font-normal font-bellefair text-white hover:text-blue-900 px-8 py-4.5">3</p></div>
            </div>   */}   
          <div className="w-[140px] flex flex-col justify-start items-start px-0 py-18 gap-8 ">
                 {/* 1 */}
                 <button
                   type="button"
                   onClick={() => setTechIdx(0)}
                   aria-pressed={techIdx === 0}
                   className={`rounded-full w-[80px] h-[80px] border text-[32px] font-bellefair flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                     techIdx === 0
                       ? "bg-white text-blue-900 border-blue-900"
                       : "bg-transparent text-white border-blue-300 hover:bg-white hover:text-blue-900 hover:border-blue-900"
                   }`}
                 >
                   1
                 </button>
                 {/* 2 */}
                 <button
                   type="button"
                   onClick={() => setTechIdx(1)}
                   aria-pressed={techIdx === 1}
                   className={`rounded-full w-[80px] h-[80px] border text-[32px] font-bellefair flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                     techIdx === 1
                       ? "bg-white text-blue-900 border-blue-900"
                       : "bg-transparent text-white border-blue-300 hover:bg-white hover:text-blue-900 hover:border-blue-900"
                   }`}
                 >
                   2
                 </button>
                 {/* 3 */}
                 <button
                   type="button"
                   onClick={() => setTechIdx(2)}
                   aria-pressed={techIdx === 2}
                   className={`rounded-full w-[80px] h-[80px] border text-[32px] font-bellefair flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                     techIdx === 2
                       ? "bg-white text-blue-900 border-blue-900"
                       : "bg-transparent text-white border-blue-300 hover:bg-white hover:text-blue-900 hover:border-blue-900"
                   }`}
                 >
                   3
                 </button>
           </div>
                
          
           <div className="w-7/10 flex flex-col justify-start py-18 gap-2">  
                <h1 className="text-[32px] font-normal font-bellefair uppercase mb-4 text-gray-500">The terminology... </h1>
                  <h2 className=" text-[56px] font-normal font-bellefair uppercase mb-4 text-white">{tech.name}</h2>
                  <p className=" text-[18px] font-normal font-barlow text-blue-300">{tech.description}</p>
           </div>               
               
          <img 
                    src={tech.images.portrait}
                    alt={tech.images.portrait.name} 
                    className="w-[608px] h-[600px] relative bottom-0 right-0 justify-end"
                  />    
               
        
      
                  
               
        </div>
        </div> 
     </main>
    </div> 
  
  )}