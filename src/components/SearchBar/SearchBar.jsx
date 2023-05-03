import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   return (
      <div>
         <input className={style.barra} type='search' />
         <button className={style.boton} onClick={onSearch}>Agregar</button>
      </div>
   );
}
