import React from 'react'
import Banner from '../layout/Banner'
import AppartementList from '../components/AppartementList'
import "../pages/HomePage.scss"

function HomePage() {
  return (
    <>
        <Banner />
        <AppartementList />
    </>
  )
}

export default HomePage