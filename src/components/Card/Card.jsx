import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div className={style.container}>
         <button onClick={() => {onClose(id)}} className={style.closeButton}>x</button>
         <img src={image} alt='' />
         <Link to={`/detail/${id}`}><h1>{name}</h1></Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
      </div>
   );
}
