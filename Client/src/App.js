import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites';
import SingUp from './components/SingUp/SingUp';
import Swal from 'sweetalert2';

// const EMAIL = 'sofidubrowsky@hotmail.com.ar'
// const PASSWORD = 'hola123'
const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
   const location = useLocation()
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access,setAccess] = useState(false);
 
   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const {data} = await axios.post(URL, { email, password })
         
            const { access } = data;
            setAccess(data);
            access && navigate('/home');  
         
      } catch (error) {
         console.log(error.message);
         Swal.fire({
            icon: "error",
            title: "Error",
            text: 'No se ha podido iniciar sesión, datos incorrectos',
            showConfirmButton: false,
            timer: 2000
          });
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

 const onSearch = async (id) => {
   try {
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      if (data.name) {
         
         const searched = characters.find((char)=> char.id === data.id)
         if(!searched){
            setCharacters((oldChars) => [...oldChars, data]);
         }else{
            alert('¡Ese personaje ya fue buscado!')
         }
      };
   } catch (error) {
      alert('¡No hay personajes con este ID!')
   }
};

const onClose = (id) =>{
   const charactersFiltered= characters.filter(character => character.id !== id)
   setCharacters(charactersFiltered)
}

return (
      <div className='App'>
         {
            location.pathname !== '/' && location.pathname !== '/SingUp'
            ? <Nav onSearch={onSearch} setAccess={setAccess}/>
            : null
         }
      <Routes>
         <Route path='/' element={<Form login={login}/>}/>  
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/> 
         <Route path='/favorites' element={<Favorites/>} />
         <Route path='/SingUp' element={<SingUp/>} />
      </Routes>
      </div>
   );
}

export default App;
