import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles.css'
// import FlexboxContainer from './components/flexbox-container.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className='flexbox-container'>
    <div className='flexbox-item flexbox-item-1'></div>
    <div className='flexbox-item flexbox-item-2'></div>
    <div className='flexbox-item flexbox-item-3'></div>
   </div>
   <div className='flexbox-container-2'>
    <div className='flexbox-item flexbox-item-4'></div>
    <div className='flexbox-item flexbox-item-5'></div>
    <div className='flexbox-item flexbox-item-6'></div>
   </div>
   <div className='flexbox-container-3'>
    <div className='flexbox-item flexbox-item-7'></div>
    <div className='flexbox-item flexbox-item-8'></div>
    <div className='flexbox-item flexbox-item-9'></div>
   </div>
   </>
    
  )
}

export default App
