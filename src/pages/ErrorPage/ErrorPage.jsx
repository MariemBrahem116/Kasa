import React from 'react'
import "../ErrorPage/ErrorPage.scss"
import Main from '../../layout/Main/Main'
import { Link } from 'react-router-dom'
function ErrorPage() {
  return (
    <>
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