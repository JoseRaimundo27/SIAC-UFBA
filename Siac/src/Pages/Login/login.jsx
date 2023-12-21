import React from 'react'
import Header from '../../Components/Header/header.jsx'
import Form from '../../Components/Form/form.jsx'
import Rodape from '../../Components/Rodape/rodape.jsx'

import "./login.css"

function Login() {
  return (
    <>
      <div className="container">
        <Header />
        <Form type={"login"}/>
        <Rodape />
      </div>
    </>
  )
}

export default Login 