import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  const name = 'Brendo Lina';
  const newName = name.toUpperCase();
  const ano = 2022;
  const nascimento = 1996;
  const url = 'https://via.placeholder.com/150'
  function soma(a,b){
    return a + b;
  }



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
      <Evento numero="2"/>
      <Form />
    </div>
  );
}

export default App;
