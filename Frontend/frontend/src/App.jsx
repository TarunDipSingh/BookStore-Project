import React from 'react'
import Home from './Home/Home'
import Cources from './Cources/Cources'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cource' element={<Cources />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
    </>
  )
}

export default App