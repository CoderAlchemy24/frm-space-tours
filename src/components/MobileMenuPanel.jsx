import { Link } from "react-router-dom";

export default function MobileMenuPanel({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
  
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

   
      <aside className="absolute right-0 top-0 h-full w-1/2 bg-blue-900/90 backdrop-blur shadow-2xl">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
            <g fill="currentColor" fillRule="evenodd">
              <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
              <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
            </g>
          </svg>
        </button>

        <nav className="h-full flex">
          <ul className="flex flex-col justify-center gap-4 pr-0 pl-auto w-full text-white">
            <li className=' ml-2 mr-0 font-barlow text-[16px] uppercase pl-4 pr-14 py-5 border-r-3 border-blue-900 blur-95 hover:border-r-3 hover:border-white'><Link to="/" ><span className="font-bold mx-3">00</span> Home</Link></li>
          <li className=  ' ml-2 mr-0 font-barlow text-[16px] uppercase pl-4 pr-14 py-5 border-r-3 border-blue-900   blur-95 hover:border-r-3 hover:border-white'><Link to="/destination" ><span className="font-bold mx-3">01</span> Destination</Link></li>
          <li className=  ' ml-2 mr-0 font-barlow text-[16px] uppercase pl-4 pr-14 py-5 border-r-3 border-blue-900   blur-95 hover:border-r-3 hover:border-white'><Link to="/crew" ><span className="font-bold mx-3">02</span> Crew</Link></li>
          <li className=  ' ml-2 mr-0 font-barlow text-[16px] uppercase pl-4 pr-14 py-5 border-r-3 border-blue-900   blur-95 hover:border-r-3 hover:border-white'><Link to="/technology" ><span className="font-bold mx-3">03</span> Technology</Link></li>
       
          </ul>
        </nav>
      </aside>
    </div>
  );
}