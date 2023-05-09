import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Detail = () => {
    const {id} = useParams()
    const [character,setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
           }, [id]);

    return(
       <div //className={styles.detailcontainer}
       >
         <h2 style={{color:'white'}}>Name: {character?.name}</h2>
         <h2 style={{color:'white'}}>Status: {character?.status}</h2>
         <h2 style={{color:'white'}}>Species: {character?.species}</h2>
         <h2 style={{color:'white'}}>Gender: {character?.gender}</h2>
         <h2 style={{color:'white'}}>Origin: {character?.origin?.name}</h2>
         <img src={character?.image} alt={character?.name}></img>
        </div>
    )
}

export default Detail;