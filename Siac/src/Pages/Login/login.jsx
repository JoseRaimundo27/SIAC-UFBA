import React from 'react'
import Header from '../../Components/Header/header.jsx'
import Rodape from '../../Components/Rodape/rodape.jsx'
import "../Login/login.css"

function Login() {
  return (
    <>
      <div className="container">
        <Header/>
        <div className="login-container">
          <div className="login">
            <div className="text-login">
              <p>Acesso ao Sistema Acadêmico</p>
            </div>
            <form method="POST" className="formLogin">
              <label htmlFor="cpf">CPF: </label>
              <input type="email" placeholder="Digite seu CPF (somente números)" autoFocus={true} />
              <label htmlFor="password">Senha: </label>
              <input type="password" placeholder="Digite sua senha" />
              <div className="btn-acessar">
                <input type="submit" value="Acessar" className="btn" />
              </div> 
              <a href="/cadastro">Não possuo/esqueci minha senha</a>
            </form>
          </div>
        </div>
       <Rodape/>
      </div>
    </>
  )
}

export default Login 