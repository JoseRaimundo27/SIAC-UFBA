import React from 'react'

export default function form(props) {
    if (props.type == "login") {
        return (
            <>
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
                            <input type="email" placeholder="Digite seu CPF (somente números)" autoFocus={true} />
                            <label htmlFor="password">Senha: </label>
                            <input type="password" placeholder="Digite sua senha" />
                            <input type="password" placeholder="Digite novamente sua senha" />
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