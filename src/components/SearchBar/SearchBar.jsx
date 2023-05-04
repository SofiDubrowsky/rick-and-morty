import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {
const[id, setId] = useState('');
const handleChange = (event) => {
   setId(event.target.value)
}

   return (
      <div>
         <input className={style.barra} type='search' onChange={handleChange} value={id} />
         <button className={style.boton} onClick={() => {onSearch(id);setId('')}}>Agregar</button>
      </div>
   );
}
