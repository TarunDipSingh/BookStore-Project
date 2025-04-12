import React from 'react'
import Navbar from '../components/Navbar'
import Cource from '../components/Cource'
import Footer from '../components/Footer'

export default function Cources() {
  
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
    <Cource />
    </div>
    <Footer />
    </>
  )
}
