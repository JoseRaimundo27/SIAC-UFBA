
import { useEffect, useState } from 'react'
import './App.css'
import Login from "./Components/Login/login"
import axios from 'axios'

function App() {
  const [dadosLogin, setDadosLogin] = useState({})
  useEffect(()=>{
    async function getDadosLogin(){
      const res = await axios.get("http://localhost:3000/cadastro")
      setDadosLogin(res.data)
    } 
    getDadosLogin();
  },[])

  return (
    <><h1>{dadosLogin.email}</h1>
    <section>
      <Login/>
    </section>
    </>
  )
}

export default App
