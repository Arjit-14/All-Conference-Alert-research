import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Conference from './components/Conference'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-slate-300  flex flex-col w-full '>
            <Navbar/>
          <Hero/>
<Conference/>
          <Footer/>
      </main>
  )
}

export default App
