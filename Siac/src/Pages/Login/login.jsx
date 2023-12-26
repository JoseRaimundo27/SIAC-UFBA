import React from 'react'
import Header from '../../Components/Header/header.jsx'
import Form from '../../Components/Form/form.jsx'
import Rodape from '../../Components/Rodape/rodape.jsx'
import axios from "axios"
import {getData} from "../../Hooks/submit.jsx"

import "./login.css"

function Login() {
  return (
    <>
      <div className="container">
        <Header />
        <Form type={"login"}/>
        <Rodape />
        {getData()}
      </div>
    </>
  )
}

export default Login 