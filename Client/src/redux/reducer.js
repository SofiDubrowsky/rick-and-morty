import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, USERS, POST_USER } from "./action-types";

const initialState = {
    myFavorites: [], 
    allCharacters: [],
    users: []
}

const reducer = (state = initialState, {type,payload}) => {
    switch(type){
        case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };
        
      case REMOVE_FAV:
        return { ...state, myFavorites: payload};

        case FILTER:
            const filtered = state.allCharacters.filter(char => char.gender === payload)
            return{
                ...state,
                myFavorites: 
                    payload === 'AllCharacters'
                    ? [...state.allCharacters]
                    : filtered
            }

        case ORDER: 
            const allCharactersCopy = [...state.allCharacters]
            return{
                ...state,
                myFavorites:
                   payload === 'A'
                   ? allCharactersCopy.sort((a,b) => a.id - b.id)
                   : allCharactersCopy.sort((a,b) => b.id - a.id)
            }

        case USERS: 
        return{
            ...state, 
            users: payload
        }

        case POST_USER:
            return { ...state}

        default:
            return {...state};
    }
}

export default reducer;