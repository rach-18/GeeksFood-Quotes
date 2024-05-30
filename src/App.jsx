import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Context from './components/Context'
import Footer from './components/Footer'
import quotes from './data/Quotes'

function App() {
  return(
    <div>
      <Navbar />
      {
        quotes.map((item) => {
          return <Context content={item.quote} author={item.author} />
        })
      }
      <Footer />
    </div>
  )
}

export default App
