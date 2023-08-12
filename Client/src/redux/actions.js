import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, USERS, POST_USER } from "./action-types";
import axios from 'axios';

export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character);

         if (!data.length) throw Error('No hay favoritos')

         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch (error) {
         console.log(error);
      }
   };
};

export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(endpoint)


         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });

      } catch (error) {
         console.log(error.message);
      }
   };
};

export const filterCards = (gender) => {
   return { type: FILTER, payload: gender }
}

export const orderCards = (order) => {
   return { type: ORDER, payload: order }
}

export const allUsers = () => {
   return async (dispatch) => {
      const { data } = await axios.get('http://localhost:3001/rickandmorty/users');
      return dispatch({ type: USERS, payload: data });
   }
}

export const postUser = (payload) => {
   return async (dispatch) => {
      let info = await axios.post('http://localhost:3001/rickandmorty/users', payload);
      return dispatch({ type: POST_USER, payload: info.data });
   }
}