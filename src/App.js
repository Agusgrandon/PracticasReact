//@ts-check
import './App.css';
import Titulo from './Components/Titulo';
import Barra from './Components/Barra';


function App() {
  return (
    <div className="App">
       <header className="App-header">
       <Titulo></Titulo>
       <Barra></Barra>
       </header>
    </div>
  );
}

export default App;
