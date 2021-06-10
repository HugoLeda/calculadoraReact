import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';

function App() {

  const [valorTela, setValorTela] = useState('')
  const [resultado, setResultado] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operacao, setOperacao] = useState(false)

  //Componentes
  const Tela = (valor, res) => {
    
    return (
      <div className="tela">
        <span className="operacao">{valor}</span>
        <span className="res">{res}</span>
      </div>
    )
  }

  const Btn = (lbl, onClick) => {
    return (
      <button className="btn" onClick={onClick}>{lbl}</button>
    )
  }

  return (
    <>
      {Tela(0,50)}      
    </>
  );
}

export default App;
