import { Link } from 'react-router-dom'

export default function NavigationBar() {
    return(
        <nav className='h-[64px] w-auto flex flex-row justify-center items-center  py-auto'>
        <ul className=" bg-blue-900 blur-95 text-white flex flex-row justify-center items-center gap-6">
          <li className=' mx-2 font-barlow text-[16px] uppercase px-2 py-5 border-b-3 border-blue-900 blur-95 hover:border-b-3 hover:border-white'><Link to="/" ><span className="font-bold mx-3">00</span> Home</Link></li>
          <li className=' mx-2 font-barlow text-[16px] uppercase px-2 py-5 border-b-3 border-blue-900 blur-95 hover:border-b-3 hover:border-white'><Link to="/destination" ><span className="font-bold mx-3">01</span> Destination</Link></li>
          <li className=' mx-2 font-barlow text-[16px] uppercase px-2 py-5 border-b-3 border-blue-900 blur-95 hover:border-b-3 hover:border-white'><Link to="/crew" ><span className="font-bold mx-3">02</span> Crew</Link></li>
          <li className=' mx-2 font-barlow text-[16px] uppercase px-2 py-5 border-b-3 border-blue-900 blur-95 hover:border-b-3 hover:border-white'><Link to="/technology" ><span className="font-bold mx-3">03</span> Technology</Link></li>
        </ul>
      </nav>
    )
}