import style from './Card.module.css'

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div className={style.container}>
         <button onClick={onClose} className={style.closeButton}>x</button>
         <img src={image} alt='' />
         <h1>{name}</h1>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
      </div>
   );
}
