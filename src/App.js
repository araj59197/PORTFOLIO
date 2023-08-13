import React from 'react'
import Home from './components/home'
import Nav from './components/nav'
import Footer from './components/footer'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
<>
<BrowserRouter>
<Nav/>
<Home/>
<Footer/>
</BrowserRouter>
</>
  )
}

export default App

