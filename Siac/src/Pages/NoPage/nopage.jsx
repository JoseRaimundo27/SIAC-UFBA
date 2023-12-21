import React from 'react'
import Header from '../../Components/Header/header'
import Rodape from '../../Components/Rodape/rodape'
import "./nopage.css"
export default function nopage() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="message">
          <h1>PÁGINA NÃO ENCONTRADA</h1>
          <img src="\src\Assets\error-404.png" alt="not-found" />
        </div>
        <Rodape />
      </div>
    </>
  )
}
