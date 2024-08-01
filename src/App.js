import './App.css';
import HellowWorld from './componets/HelloWorld'
import SayMyName from './componets/SayMyName'
import Pessoa from './componets/Pessoa'

function App() {

  const nome = "Kauan"
  return (
    <div className="App">
      <HellowWorld />
      <SayMyName nome= "Kauan"/>
      <SayMyName nome= {nome}/>
      <Pessoa 
        nome={"Kauan"} 
        idade={21} 
        profissao={"Programador"} 
        foto={"https://via.placeholder.com/150"}/>
    </div>
  );
}

export default App;
