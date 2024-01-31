import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='w-full h-full'>
      <Navbar/>
      <Main  />
      <Footer />
    </main>
  )
}

export default App
