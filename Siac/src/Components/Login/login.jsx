import React from 'react'
import "../Login/login.css"

function Login() {
  return (
    <>
      <div className="container">
        <header>
          <img src='\src\assets\ufba-logo.png' className="logo-ufba" />
          <p>Sistema Acadêmico - SIAC</p>
        </header>

        <div className="login-container">
          <div className="login">
            <div className="text-login">
              <p>Acesso ao Sistema Acadêmico</p>
            </div>

            <form method="POST" class="formLogin">
              <label for="cpf">CPF: </label>
              <input type="email" placeholder="Digite seu CPF (somente números)" autofocus="true" />
              <label for="password">Senha: </label>
              <input type="password" placeholder="Digite sua senha" />
              <div className="btn-acessar">
                <input type="submit" value="Acessar" class="btn" />
              </div>
              
              <a href="/">Não possuo/esqueci minha senha</a>
            </form>
          </div>
        </div>
        <div className="rodape">
          <p>SUPERITENDÊNCIA DE TECNOLOGIA DA INFORMAÇÃO</p>
          <p>Avenida Ademar de Barros, s/n - Campus de Ondina. CEP 40.170-110/ Salvador - Bahia</p>
          <br />
          <p>Sitma Acadêmico - v1.0.2_2023101</p>
        </div>
      </div>



    </>

  )
}

export default Login 