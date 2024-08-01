import './App.css';
import HellowWorld from './componets/HelloWorld'
import SayMyName from './componets/SayMyName'
import Pessoa from './componets/Pessoa'
import Frase from './componets/Frase'
import List from './componets/List'

function App() {

  const nome = "Kauan"
  return (
    <div className="App">
      <HellowWorld />
      <Frase />
      <Frase />
      <SayMyName nome= "Kauan"/>
      <SayMyName nome= {nome}/>
      <Pessoa 
        nome={"Kauan"} 
        idade={21} 
        profissao={"Programador"} 
        foto={"https://via.placeholder.com/150"}/>
      <List />
    </div>
  );
}

export default App;
