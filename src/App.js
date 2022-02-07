import './App.css';
import {useState} from 'react';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {

  const name = 'Brendo Lina';
  const newName = name.toUpperCase();
  const ano = 2022;
  const nascimento = 1996;
  const url = 'https://via.placeholder.com/150'
  function soma(a,b){
    return a + b;
  }
  //OutraLista
  const meusItens = ['React', 'Vue', 'Angular']

  //Seunome

  const [nome,setNome] = useState()
    



  return (
    <div className="App">
      <h1>Olá, mundo !</h1>
      <p>Seja Bem vindo ao React {newName} !</p>
      <p>Sua idade é {ano - nascimento}</p>
      <p>Soma {soma(25,23)}</p>
      <img src={url} alt="my image"/>
      <HelloWorld />
      <Pessoa nome="Brendon" idade="25" profissao="Programador" foto="https://via.placeholder.com/150"/>
      <List />
      <h2>Testando Eventos</h2>
      {/* eventos onclick com props */}
      <Evento numero="1"/>
      <Form />
      <h2>EMAIL CADASTRADO</h2>
        <Condicional />
      <h2>Renderização de listas</h2> 
      <OutraLista itens={meusItens}/> 
      <OutraLista itens={[]}/>
      <h2>State LIFT</h2>
      <SeuNome setarnome={setNome} />
      <Saudacao nome={nome} />

    </div>
  );
}

export default App;
