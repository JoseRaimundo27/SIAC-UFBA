import './App.css'
import Login from "./Components/Login/login"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from './Components/Cadastro/cadastro.jsx';
import NoPage from './Components/NoPage/nopage.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route> 
          <Route path="/cadastro" element={<Cadastro/>}></Route>
          <Route path="*" element={<NoPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
