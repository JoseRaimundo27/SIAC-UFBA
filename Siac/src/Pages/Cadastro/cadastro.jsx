import React from 'react';
import Header from '../../Components/Header/header.jsx';
import Form from '../../Components/Form/form.jsx';
import Rodape from '../../Components/Rodape/rodape.jsx';
import "../Login/login.css"

export default function cadastro() {
  return (
    <>
    <div className="container">
      <Header />
      <Form type={"cadastro"}/>
      <Rodape />
    </div>
  </>
  )
}
