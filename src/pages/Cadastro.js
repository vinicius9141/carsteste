import styles from './Login.module.css'
import { useState } from 'react';
import Button from '@mui/material/Button';

function Cadastro() {

  const [user, setUser] = useState()
  const [password, setPassword] = useState()
  const [againPassword, setAgainPassword] = useState()


  async function validForm(){
      
    if(user && password && againPassword !== ''){
      alert('Cadastro realizado com sucesso');
      setUser('');
      setPassword('');
      setAgainPassword('');

    }else{
      alert('Porfavor preencha os daodos corretamente');
    }

      console.log(user, password, againPassword)
  }


  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label_login} >Nome Completo</span>
          <input type="text" value={user} name='user' onChange={(e)=> setUser(e.target.value)} />
          <span className={styles.label_login} >Digite o CPF</span>
          <input type="text" />
          <span className={styles.label_login} >Senha</span>
          <input type="password" name='password' value={password}   onChange={(e) =>setPassword(e.target.value)}/>
          <span className={styles.label_login} >Digite a Senha Novamente</span>
          <input type="password" name='againPassword' value={againPassword}  onChange={(e) =>setAgainPassword(e.target.value)}/>

          <Button variant="contained" onClick={validForm}>Cadastrar</Button>

        </div>
      </div>

    </>
  )
}

export default Cadastro