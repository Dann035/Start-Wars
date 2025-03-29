export const initialStore=()=>{
  return{
    message: null,
    vehicles: [],
    characters: [],
    species: [],
    starships: [],
    planets: [],
    films: [],
    loading: false,
    favorites:[],
    fav: false,
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'GET_CHARACTERS':
      return {
        ...store,
        characters: action.payload,
        loading: false,
      };
    case 'GET_VEHICLES':
      return {
        ...store,
        vehicles: action.payload,
        loading: false,
      };
    case 'GET_SPECIES':
      return {
        ...store,
        species: action.payload,
        loading: false,
      };
    case 'GET_STARSHIPS':
      return {
        ...store,
        starships: action.payload,
        loading: true,
      };
    case 'GET_PLANETS':
      return {
        ...store,
        planets: action.payload,
        loading: false,
      };
    case 'GET_FILMS':
      return {
        ...store,
        films: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...store,
        loading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...store,
        message: action.payload,
        loading: false,
      };
    case 'SET_FAVORITES':
      return {
        ...store,
        favorites: action.payload,
      };
    default:
      throw new Error('Invalid action type')
  };
}

