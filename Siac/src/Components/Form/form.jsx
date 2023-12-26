import React, { useState } from 'react'
import axios from "axios"

export default function form(props) {
    const [email,setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleSubmit = async e=>{
        e.preventDefault()
        const dadosLogin = {email, 
                            senha                
        }
        console.log(`DadosLogin é: ${JSON.stringify(dadosLogin)}`)
        await axios.post("http://localhost:3000/cadastro", dadosLogin)
    }

    if (props.type == "login") {
        return (
            <>
                <div className="login-container">
                    <div className="login">
                        <div className="text-login">
                            <p>Acesso ao Sistema Acadêmico</p>
                        </div>
                        <form onSubmit={handleSubmit} method="POST" className="formLogin">
                            <label htmlFor="cpf">CPF: </label>
                            <input type="email" onChange={({ target }) => setEmail(target.value)} placeholder="Digite seu CPF (somente números)" autoFocus={true} />
                            {console.log(email)}
                            <label htmlFor="password">Senha: </label>
                            {console.log(senha)}
                            <input type="password" placeholder="Digite sua senha" onChange={({ target }) => setSenha(target.value)} />
                            <div className="btn-acessar">
                                <input type="submit" value="Acessar" className="btn" />
                            </div>
                            <a href="/cadastro">Não possuo/esqueci minha senha</a>
                        </form>
                    </div>
                </div>
            </>
        )
    }

    if (props.type == "cadastro") {
        return (
            <>
                <div className="login-container">
                    <div className="login">
                        <div className="text-login">
                            <p>Cadastro no Sistema Acadêmico</p>
                        </div>
                        <form method="POST" className="formLogin">
                            <label htmlFor="cpf">CPF: </label>
                            <input type="email" onChange={({ target }) => setEmail(target.value)} placeholder="Digite seu CPF (somente números)" autoFocus={true} />
                            <label htmlFor="password">Senha: </label>
                            <input type="password" placeholder="Digite sua senha" onChange={({ target }) => setSenha(target.value)} />
                            <input type="password" placeholder="Digite novamente sua senha" onChange={({ target }) => setSenha(target.value)} />
                            <div className="btn-acessar">
                                <input type="submit" value="Cadastrar" className="btn" />
                            </div>
                            <a href="/">Voltar para login</a>
                        </form>
                    </div>
                </div></>
        )
    }
}
