import './App.scss';
import { useState } from 'react';

function App() {

  const [valorTela, setValorTela] = useState('')
  const [resultado, setResultado] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operado, setOperado] = useState(false)

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
      <button onClick={onClick}>{lbl}</button>
    )
  }

  //Funcoes
  const addDigitoTela = (d) => {
    if ((d == '+' || d == '-' || d == '/' || d == '*') && (operado)) {
      console.log("+-*/")
      setOperado(false)
      setValorTela(resultado + d)
      return
    } else if (operado)     {
      setValorTela(d)
      setOperado(false)
    }

    const valorDigitadoTela = valorTela + d
    setValorTela(valorDigitadoTela)
  }  

  const limparMemoria = () => {
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
  }

  const operacao = (oper) => {
    if (oper == 'bs') {
      let vTela = valorTela
      vTela = vTela.substring(0, vTela.length - 1)
      setValorTela(vTela)
      setOperado(false)
      return
    }

    try {
      const r = eval(valorTela)
      setAcumulador(r)
      setResultado(r)
      setOperado(true)
    } catch {
      setResultado('ERRO')
    }
  }

  return (
    <>
      <div className="container">
        <h3>Calculadora Simples</h3>
        {Tela(valorTela, resultado)}
        <div className="teclado">
          {Btn('C', limparMemoria())}
          {Btn('(', () => addDigitoTela('('))}
          {Btn(')', () => addDigitoTela(')'))}
          {Btn('/', () => addDigitoTela('/'))}
          {Btn('7', () => addDigitoTela('7'))}
          {Btn('8', () => addDigitoTela('8'))}
          {Btn('9', () => addDigitoTela('9'))}
          {Btn('*', () => addDigitoTela('*'))}
          {Btn('4', () => addDigitoTela('4'))}
          {Btn('5', () => addDigitoTela('5'))}
          {Btn('6', () => addDigitoTela('6'))}
          {Btn('-', () => addDigitoTela('-'))}
          {Btn('1', () => addDigitoTela('1'))}
          {Btn('2', () => addDigitoTela('2'))}
          {Btn('3', () => addDigitoTela('3'))}
          {Btn('+', () => addDigitoTela('+'))}
          {Btn('0', () => addDigitoTela('0'))}
          {Btn('.', () => addDigitoTela('.'))}
          {Btn('<-', () => operacao('bs'))}
          {Btn('=', () => operacao('='))}
        </div>
      </div>     
    </>
  );
}

export default App;
