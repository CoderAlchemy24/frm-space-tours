import NavigationBar from "./NavigationBar";
import { useIdx } from '../IdxContext';
import { Link } from 'react-router-dom'

export default function DesktopTechnology({technologies}) {

   const { techIdx, setTechIdx } = useIdx(); 
  
      if (!technologies || technologies.length === 0) return null;

      const tech = technologies[techIdx] || technologies[0];

 return (
     <div className="tablet-technology-background min-h-screen m-0 pb-20">
          
                <header className=" text-white   text-semibold bg-transparent opacity-78 mt-0">
                    <div className=" flex flex-row items-end justify-between bg-blue-900 pl-10 py-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="translate-y-[-8px]" width="48" height="48"><g fill="none" fillRule="evenodd">
                        <circle cx="24" cy="24" r="24" fill="#FFF" />
                        <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
                      <NavigationBar className="p-3 translate-y-[3px]" />
                    </div>
                </header>
              

                <main className="flex flex-col gap-8 h-full m-10 ">
                      <h1 className="text-[20px] font-normal text-white font-barlow-condensed uppercase ml-0">
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

                        <div className="flex flex-row justify-center items-center  px-10 py-0 mt-4 mb-0  gap-6 ">
                       {/* 1 */}
                       <button
                         type="button"
                         onClick={() => setTechIdx(0)}
                         aria-pressed={techIdx === 0}
                          className="cursor-pointer bg-transparent rounded-full w-[56px] h-[56px] border-1 border-blue-300 hover:bg-white hover:border-blue-900 hover:text-blue-900 focus:bg-white focus:text-blue-900"
                       >
                         1
                       </button>
                       {/* 2 */}
                       <button
                         type="button"
                         onClick={() => setTechIdx(1)}
                         aria-pressed={techIdx === 1}
                        className="cursor-pointer bg-transparent rounded-full w-[56px] h-[56px] border-1 border-blue-300 hover:bg-white hover:border-blue-900 hover:text-blue-900 focus:bg-white focus:text-blue-900"
                      
                       >
                         2
                       </button>
                       {/* 3 */}
                       <button
                         type="button"
                         onClick={() => setTechIdx(2)}
                         aria-pressed={techIdx === 2}
                         className="cursor-pointer bg-transparent rounded-full w-[56px] h-[56px] border-1 border-blue-300 hover:bg-white hover:border-blue-900 hover:text-blue-900 focus:bg-white focus:text-blue-900"
                        >
                         3
                       </button>
                    </div>     
                          
                    <div className=" flex flex-col justify-evenly items-center gap-3 mb-10"> 
                     
                          <h1 className="text-[24px] font-normal font-bellefair uppercase text-center mb-2 text-blue-300">The terminology... </h1>
                          <h2 className=" text-[40px] font-normal font-bellefair uppercase text-center  mb-2 text-white">{tech.name}</h2>
                          <p className=" text-[16px] font-normal font-barlow text-center  text-blue-300">{tech.description}</p>
                     </div>                 
                         
                  </div>
                
               </main>
         </div>
  )
}
