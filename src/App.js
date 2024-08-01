import logo from './logo.svg';
import './App.css';
import HellowWorld from './componets/HelloWorld'
function App() {

  const name = 'Kauan'
  const newName = name.toUpperCase()

  function sum(a, b){
    return a + b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Ola React!</h1>
      <p>Meu primeiro projeto</p>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha imagem" />
      <HellowWorld />
    </div>
  );
}

export default App;
