//@ts-check
import './App.css';
import Titulo from './Components/Titulo';
import CartWidget from './Components/CartWidget';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
       <header className="App-header">
       <Titulo></Titulo>
       <NavBar/>
       <CartWidget/>
       </header>
    </div>
  );
}

export default App;
