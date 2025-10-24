import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IdxProvider } from './IdxContext'
import './App.css'

import Home from './components/Home'
import Destination from './components/Destination'
import Crew from './components/Crew'
import Technology from './components/Technology'

function App() {
  const [destinations, setDestinations] = useState([])
  const [crews, setCrews] = useState([])
  const [technologies, setTechnologies] = useState([])

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data?.destinations ?? [])
        setCrews(data?.crew ?? [])
        setTechnologies(data?.technology ?? [])

        console.log(data)
      })
      .catch((err) => console.error('data.json betöltési hiba:', err))
  }, [])

  return (
    <IdxProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination destinations={destinations} />} />
        <Route path="/crew" element={<Crew crews={crews} />} />
        <Route path="/technology" element={<Technology technologies={technologies} />} />
      </Routes>
      
    </IdxProvider>
   
  )
}

export default App