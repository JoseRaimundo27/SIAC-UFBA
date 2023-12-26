import './App.css'
import Login from "./Pages/Login/login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from './Pages/Cadastro/cadastro.jsx';
import NoPage from './Pages/NoPage/nopage.jsx';

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
