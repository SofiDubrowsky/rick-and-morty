import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form'

const EMAIL = 'sofidubrowsky@hotmail.com.ar'
const PASSWORD = 'hola123'

function App() {
 const [characters, setCharacters] = useState([]);

 const onSearch = (id) => {
   axios(`https://rickandmortyapi.com/api/character/${id}`)
   .then(response => response.data)
   .then((data) => {
      if (data.name && !characters.find((char) => (char.id === data.id))) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         alert('Error id repetido/inexistente');
      }
   });
}

const onClose = (id) =>{
   const charactersFiltered= characters.filter(character => character.id !== Number(id))
   setCharacters(charactersFiltered)
}

const [access,setAccess] = useState(false);

const navigate = useNavigate();

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access]);

const location = useLocation()

   return (
      <div className='App'>
         {
            location.pathname !== '/' 
            ? <Nav onSearch={onSearch} setAccess={setAccess}/>
            : null
         }
      <Routes>
         <Route path='/' element={<Form login={login}/>}/>  
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/> 
      </Routes>
      </div>
   );
}

export default App;
