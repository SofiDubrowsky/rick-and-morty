import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav';
import characters from './data.js';

function App() {
   return (
      <div className='App'>
        <Nav/>
         <Cards characters={characters}/>
      </div>
   );
}

export default App;
