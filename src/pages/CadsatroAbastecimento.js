import styles from './Login.module.css'
import Button from '@mui/material/Button';
import { useState } from 'react';


export function CadastroAbastecimento() {

  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [license, setLicence] = useState('');
  const [potency, setPotency] = useState('');
  const [renavam, setRenavam] = useState('');
  const [typeFuel, setTypeFuel] = useState('');
  const [volumeFuel, setVolume] = useState('');
  const [priceFuel, setFuel] = useState('');



  const handleModel = (event) => { 
    setModel(event.target.value); 
  }
  
  const handleColor = (event) => { 
    setColor(event.target.value); 
  }
  const handleLicence = (event) => { 
    setLicence(event.target.value); 
  }
  const handlePotency = (event) => { 
    setPotency(event.target.value); 
  }
  const handleRenavam = (event) => { 
    setRenavam(event.target.value); 
  }
  const handleTypeFuel = (event) => { 
    setTypeFuel(event.target.value); 
  }
  const handleVolume = (event) => { 
    setVolume(event.target.value); 
  }
  const handlePriceFuel = (event) => { 
    setFuel(event.target.value); 
  }



  function handleSubmit(event) {
    event.preventDefault();
    const actualRows = JSON.parse(localStorage.getItem('rows'));

    const data ={
      id: actualRows.length + 1,
      model: model,
      color: color,
      license: license,
      potency: potency,
      renavam: renavam,
      typeFuel: typeFuel,
      volumeFuel: volumeFuel,
      priceFuel: priceFuel,
      actions:'Excluir'
    }
    
    actualRows.push(data)
    console.log(actualRows)

    localStorage.setItem('rows',  JSON.stringify(actualRows));


    console.log(model);
    console.log(color);
    console.log(license);
    console.log(potency);
    console.log(renavam);
    console.log(typeFuel);
    console.log(volumeFuel);
    console.log(priceFuel);
  }


  return (
    <>
       <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.content}>
          
         
          <span className={styles.label_login} >Modelo</span>
          <input type="text" value={model} onChange={handleModel}/>

          <span className={styles.label_login} >Cor</span>
          <input type="text" value={color} onChange={handleColor} />

          <span className={styles.label_login} >Placa</span>
          <input type="text" value={license} onChange={handleLicence} />

          <span className={styles.label_login} >Potência</span>
          <input type="text" value={potency} onChange={handlePotency} />

          <span className={styles.label_login} >Renavam</span>
          <input type="text" value={renavam}  onChange={handleRenavam}/>

          <span className={styles.label_login} >Tipo de Conbustivel</span>
          <input type="text" value={typeFuel} onChange={handleTypeFuel} />

          <span className={styles.label_login} >Quantidade de Conbustivel</span>
          <input type="text" value={volumeFuel} onChange={handleVolume} />

          <span className={styles.label_login} >Valor Abastecido</span>
          <input type="text" value={priceFuel} onChange={handlePriceFuel} />

          <Button variant="contained" type='submit'>Cadastrar</Button>
          
        </form>
      </div>

    </>
  )
}


export default CadastroAbastecimento