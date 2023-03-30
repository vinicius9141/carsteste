import styles from './Login.module.css'
import { useState } from 'react';
import Button from '@mui/material/Button';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Cadastro from './Cadastro';

function Login (){

  const [user, setUser] = useState()
  const [password, setPassword] = useState()


  async function validLogin(){
    
    const response = await fetch('https://run.mocky.io/v3/24e4055b-8aab-4a74-8f19-276c32507bd0');
    const data = await response.json();

    if(password !== '' && user !== '' & data.isValid === true ){
      alert('login successful');
      localStorage.setItem('isValid', data.isValid);
      console.log(user, password);
      window.location.href = '/list'
     
    }else{
      alert('login failed');
    }

    return data;
     
    

  }


  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label_login} >Digite seu CPF</span>
          <input type="text" name='user' onChange={(e)=> setUser(e.target.value)} placeholder='000.000.000-00' maxLength={14}/>
          <span className={styles.label_login} >Senha</span>
          <input type="password" name='password'  onChange={(e) =>setPassword(e.target.value)}/>

          <Button variant="contained" size="large" onClick={validLogin}>Login</Button>

        </div>
      </div>

    </>
  )
}

export default Login