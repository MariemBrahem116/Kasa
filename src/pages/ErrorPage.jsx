import React from 'react'
import "../pages/ErrorPage.scss"
import Navbar from '../components/Navbar'
import Main from '../layout/Main'
import { Link } from 'react-router-dom'
function ErrorPage() {
  return (
    <>
    <Navbar />
    <Main>
        <div className='errorPage'>
            <h1>404</h1>
            <h2>Oups!La page que vous demandez n'existe pas </h2>
            <Link  to="/">Retourner sur la page d'accueil</Link>
        </div>

    </Main>
    </>
  )
}

export default ErrorPage