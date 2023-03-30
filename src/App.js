import './App.css';
import Login from './pages/Login'
import Cadastro from './pages/Cadastro';
import  List  from './pages/List';
import CadastroAbastecimento from './pages/CadsatroAbastecimento';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'




function App() {
  const isVisible = localStorage.getItem('isValid')

  function exit() {
    localStorage.removeItem('isValid')
    window.location.href('/login')
    window.location.reload()
  }

  return (
    <Router>
      {
        isVisible && <ul className='header'>
        <li>
          <Link to='/'>Login</Link>
        </li>
        <li>
          <Link to='/cadastro'>Cadastro</Link>
        </li>

        <li>
          <Link to='/list'>Lista de carros</Link>
        </li>

        <li>
          <Link to='/CadastroAbastecimento'>Cadastrar novo Abastecimento</Link>
        </li>

        <li className='exit'>
          <Link to='/login' onClick={exit}>Sair</Link>
        </li>
      </ul>
      }
     

      <Routes>
        <Route exact path="/" element={<Login />} > </Route>
      </Routes>

      <Routes>
        <Route  path="/cadastro" element={<Cadastro />} > </Route>
      </Routes>

      <Routes>
        <Route  path="/list" element={<List />} > </Route>
      </Routes>

      <Routes>
        <Route  path="/cadastroAbastecimento" element={<CadastroAbastecimento />} > </Route>
      </Routes>


    </Router>
  );
}

export default App;
