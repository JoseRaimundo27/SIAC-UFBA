import axios from "axios"

export const postData = (dadosLogin)=>{
    return axios.post("http://localhost:3000/cadastro", dadosLogin)
}

export async function getData(){
    await axios.get("http://localhost:3000/cadastro").then(res=>{
        const email = res.data.map(dado => dado.email)
        const senha = res.data.map(dado => dado.senha)
        console.log(email)
        console.log(senha)
    })
}
