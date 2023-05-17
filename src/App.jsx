import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import AppartementList from './components/AppartementList'
import Footer from './components/Footer'
import Main from './components/Main'
import "./App.css"

function App() {
  return (
    <div>
      <Navbar/>
      <Main>
        <Banner/>
        <AppartementList/>
      </Main>
      <Footer />
      </div>
  )
}

export default App